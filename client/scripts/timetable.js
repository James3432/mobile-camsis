/*
  timetable script
  Rory McCann
 */

var timetable = (function() {

	/*
	 * checks if an array of (k,v) contains a key with value v
	 */

	var containsKey = function(arr, k, v) {
		for ( var i = 0; i < arr.length; i++) {
			if (arr[i][k] == v)
				return i;
		}
		return -1;
	};

	/*
	 * returns an array of days that have exams, without duplicates
	 */

	var getDays = function(data) {
		var terms = data.timetable.terms;
		var days = [];
		for ( var t = 0; t < terms.length; t++) {
			for ( var i = 0; i < terms[t].examinations.length; i++) {
				var d = getDate(terms[t].examinations[i].formatted_datetime);
				var k = containsKey(days, "day", d);
				if (k > -1) {
					days[k]["exams"].push(terms[t].examinations[i]);
				} else {
					days.push({
						"day" : d,
						"exams" : [ terms[t].examinations[i] ]
					});
				}
			}
		}
		return days;
	};

	var getDate = function(date) {
		var spaces = date.split(' ');
		return spaces[0] + " " + spaces[1] + " " + spaces[2];
	};

	var convertData = function(data) {
		var days = getDays(data);
		var new_json = {
			"days" : days
		};
		return new_json;
	};

	return {
		/* an array of exam days */
		examDates: function(data) {
			var terms = data.timetable.terms;
			var days = [];
			events = new Array(
					["Y",	"1",	"1",	"2006",	"1:00 AM",	"12:00 PM",	"New Year's Day",	"New Year's Day will be ushered in with great joy and celebration. Come as you are."],
					["F",	"1",	"3",	"2",	"1:00 AM",	"12:59 PM",	"Martin Luther King Day",	"Honors civil rights leader Rev Martin Luther King."],
					["Y",	"2",	"2",	"2005",	"1:00 AM",	"12:59 PM",	"Groundhog Day",	"If Philadelphia's groundhog 'Punxsutawney Phil' sees his shadow, there will be six more weeks of winter weather. If he does not see his shadow, there will be an early spring."],
					["Y",	"2",	"14",	"2005",	"1:00 AM",	"12:59 PM",	"Valentine's Day",	"Traditional celebration of love and romance, including the exchange of cards, candy, flowers, and other gifts."],
					["F",	"2",	"3",	"2",	"1:00 AM",	"12:59 PM",	"President's Day",	"Honors the birthdays of George Washington, Abraham Lincoln and other past American Presidents."],
					["F",	"3",	"0",	"0",	"1:00 AM",	"12:59 PM",	"Easter",	"Traditional celebration of the resurrection of Jesus Christ."],
					["Y",	"3",	"17",	"2005",	"1:00 AM",	"12:59 PM",	"St. Patrick's Day",	"A celebration of Irish heritage and culture, based on the Catholic feast of St. Patrick. Primary activity is simply the wearing of green clothing ('wearing of the green')."],
					["Y",	"3",	"22",	"2005",	"1:00 AM",	"12:59 PM",	"World Water Day",	"A day to promote appreciation of the world's most valuable commodity - water."],
					["Y",	"4",	"1",	"2005",	"1:00 AM",	"12:59 PM",	"April Fool's Day",	"A day to play tricks on or 'fool' family, friends, and coworkers, if so inclined. As Ecclesiastes says: 'There is a time for everything'; in this case, a time to be silly."],
					["F",	"5",	"2",	"1",	"1:00 AM",	"12:59 PM",	"Mother's Day",	"Honors mothers and motherhood (made a Federal Holiday by Presidential order)."],
					["F",	"5",	"3",	"7",	"1:00 AM",	"12:59 PM",	"Armed Forces Day",	"Celebrates the United States Army, Navy, Air Force and Marine Corps; formerly - each used to have separate days."],
					["F",	"5",	"4",	"2",	"1:00 AM",	"12:59 PM",	"Memorial Day",	"Honors the nation's war dead, and those we love who have passed away. Traditionally a time to decorate graves and remember those who have gone before us. Also marks traditional beginning of summer."],
					["Y",	"6",	"14",	"2005",	"1:00 AM",	"12:59 PM",	"Flag Day",	"Honors the American flag, encourages patriotism. Citizens are urged to fly the flag and study its traditions."],
					["F",	"6",	"3",	"1",	"1:00 AM",	"12:59 PM",	"Father's Day",	"Honors all Fathers and fatherhood."],
					["Y",	"7",	"4",	"2005",	"1:00 AM",	"12:59 PM",	"Independence Day",	"Celebrates our Declaration of Independence from England in 1776, usually called the Fourth of July."],
					["F",	"9",	"1",	"2",	"1:00 AM",	"12:59 PM",	"Labor Day",	"Celebrates the achievements of workers, giving them a day of rest - marks traditional end of summer."],
					["F",	"10",	"2",	"2",	"1:00 AM",	"12:59 PM",	"Columbus' Day",	"Honors the traditional discovery of the Americas by Christopher Columbus."],
					["Y",	"10",	"31",	"2005",	"1:00 AM",	"12:59 PM",	"Halloween",	"Celebrates All Hallow's Eve, decorations include jack o'lanterns, costume wearing parties, and candy - considered a pagan holiday by many Christians."],
					["Y",	"11",	"11",	"2005",	"1:00 AM",	"12:59 PM",	"Veteran's Day",	"Honors all veterans of the United States armed forces. A traditional observation is a moment of silence at 11 AM remembering those who fought for peace."],
					["F",	"11",	"4",	"5",	"1:00 AM",	"12:59 PM",	"Thanksgiving",	"A day to give thanks for your many blessings - traditionally for the Autumn harvest, and it marks the beginning of the 'holiday season'."],
					["Y",	"12",	"25",	"2005",	"1:00 AM",	"12:59 PM",	"Christmas",	"Celebration of the traditional day of Jesus' birth - God was made flesh and dwelt among us."]
				// Please omit the final comma after the ] from the last line above unless you are going to add another event at this time.
				);
			for ( var t = 0; t < terms.length; t++) {
				for ( var i = 0; i < terms[t].examinations.length; i++) {
					var examArray = new Array();
					examArray[0] = "Y";
					examArray[1] = "2";
					examArray[2] = "20";
					examArray[3] = "2012";
					examArray[4] = "1:00 AM"; 
					examArray[5] = "12:59 PM";
					examArray[6] = "exam";
					examArray[7] = "location";
					
					/* var d = getDate(terms[t].examinations[i].formatted_datetime);
					if ($.inArray(d,days) == -1)
						days.push(d);
						*/
					days.push(examArray);
				}
			}
			return events;
		},
			
		genTimetable : function(data) {
			return convertData(data);
		}
	};

})();