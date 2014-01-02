<?php

if(!(isset($_SESSION))){
	session_start();
}

require 'facebook.php';

$facebook = new Facebook(array(
  'appId'  => '133865240028300',
  'secret' => 'e39e075ef259e84061e2c6630ddf5782',
));

// Get User ID
$user = $facebook->getUser();

// We may or may not have this data based on whether the user is logged in.
// An access token is invalid if the user logged out of Facebook.

if ($user) {
  try {
    // Proceed knowing you have a logged in user who's authenticated.
    $user_profile = $facebook->api('/me');
		
	$fql    =   'SELECT interests FROM user WHERE uid = me()';
	$param  =   array(
	 'method'    => 'fql.query',
	 'query'     => $fql,
	 'callback'  => ''
	);
	$fqlResult   =   $facebook->api($param);
	
	$fql2    =   'SELECT pic_big_with_logo,pic_big FROM user WHERE uid = me()';
	$param  =   array(
	 'method'    => 'fql.query',
	 'query'     => $fql2,
	 'callback'  => ''
	);
	$fqlPic   =   $facebook->api($param);

  } catch (FacebookApiException $e) {
    error_log($e);
    $user = null;
  }
}

// Login or logout url will be needed depending on current user state.
if ($user) {
  $logoutUrl = $facebook->getLogoutUrl();
  $_SESSION['UserType'] = "FBUser";
} else {
  $loginUrl = $facebook->getLoginUrl(array(
	'scope' => 'user_interests,user_about_me'
  ));
  $_SESSION['UserType'] = "visitor";
}

?>
<!doctype html>
<html xmlns:fb="http://www.facebook.com/2008/fbml">
  <head>
    <title>Facebook Test Page</title>
    <style>
      body {
        font-family: 'Lucida Grande', Verdana, Arial, sans-serif;
      }
      h1 a {
        text-decoration: none;
        color: #3b5998;
      }
      h1 a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <h1>Facebook Authentication Test Page</h1>

    <?php if ($user): ?>
      <a href="<?php echo $logoutUrl; ?>">Logout</a>
    <?php else: ?>
      <div>
        <!--//<a href="<?php echo $loginUrl; ?>">Login with Facebook</a>-->
		<a href="<?php echo $loginUrl; ?>">Login with Facebook</a>
      </div>
    <?php endif ?>

    <h3>PHP Session Info:</h3>
    <pre><?php print_r($_SESSION); ?></pre>

    <?php if ($user): ?>
      <h3>You</h3>
      <img src="https://graph.facebook.com/<?php echo $user; ?>/picture">
	  <img src="<?php echo $fqlPic[0][pic_big_with_logo]; ?>">
	  
      <h3>Your User Object (/me)</h3>
      <pre><?php print_r($user_profile); ?></pre>
	  <h3>You</h3>
      <pre><?php print_r($fqlResult); print_r($fqlPic);?></pre>
    <?php else: ?>
      <strong><em>You are not Connected.</em></strong>
    <?php endif ?>
	
  </body>
</html>
