/*
  dal.js
  Rory McCann - rsm54
  created: 09/02/12

  Data Abstraction Layer.

  Provides methods to retrieve data from the webservice

 */



var dataRequest = (function() {

	var DAL = {
		studentNoURL : '/CamSISProxy?datatype=StudentInformation',
		examResultURL : '/CamSISProxy?datatype=Results',
		timetableURL : '/CamSISProxy?datatype=ExamTimetable',
	};

	// changed to use $.ajax to allow for error handlers
	var getJSON = function(url, succ) {
		$.ajax({
			url : url,
			dataType : 'json',
			data : {
				"fromJS" : "y"
			},
			success : function(d) {
				succ(d.data);
			},
			statusCode : {
				// 570 indicates user is not authed
				570 : function() {
					// TODO: test this thorougly
					$.mobile.changePage('login.htm', 'pop', true, true);
				},
				404: function() {
					// TODO: handle this more gracefully (although it should never occur)
					alert('error');
				}
			}
		});
	};

	return {
		getStudentNumber : function(succ) {
			getJSON(DAL.studentNoURL, succ);
		},

		getExamResults : function(succ) {
			getJSON(DAL.examResultURL, succ);
		},

		getTimetable : function(succ) {
			getJSON(DAL.timetableURL, succ);
		}
	};
})();
