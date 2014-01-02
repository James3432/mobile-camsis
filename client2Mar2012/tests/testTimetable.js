/*
 * Tests for timetable.js
 */

module("Timetable");

//TODO: add real tests

test("Object existence", function() {
	ok(timetable, "timetable");
	ok(timetable.genTimetable, "genTimetable");
});

test("Data Conversion", function() {
	var data = {
		"timetable" : {
			"description" : "Timetable",
			"terms" : [ {
				"description" : "Term",
				"examinations" : [ {
					"description" : "Reading the Christian Bible (Exam)",
					"formatted_datetime" : "30 May 2011  9:30AM - 12:30PM",
					"subject_area" : {
						"value" : "TME1"
					}
				}, {
					"description" : "Introduction to New Testament (Exam)",
					"formatted_datetime" : "31 May 2011  9:30AM - 12:30PM",
					"subject_area" : {
						"value" : "TME1"
					}
				}, {
					"description" : "Belief and practice in the ear (Exam)",
					"formatted_datetime" : "01 June 2011  9:30AM - 11:30AM",
					"subject_area" : {
						"value" : "TME1"
					}
				}, {
					"description" : "Christian doctrine (2 hour wri (Exam) 2",
					"formatted_datetime" : "30 May 2011  9:30AM - 11:30AM",
					"subject_area" : {
						"value" : "TME1"
					}
				} ],
				"value" : "Easter Term 2011"
			} ]
		}
	};
	var expected = {
		"days" : [ {
			"day" : "30 May 2011",
			"exams" : [ {
				"description" : "Reading the Christian Bible (Exam)",
				"formatted_datetime" : "30 May 2011  9:30AM - 12:30PM",
				"subject_area" : {
					"value" : "TME1"
				}
			}, {
				"description" : "Christian doctrine (2 hour wri (Exam) 2",
				"formatted_datetime" : "30 May 2011  9:30AM - 11:30AM",
				"subject_area" : {
					"value" : "TME1"
				}
			} ]
		}, {
			"day" : "31 May 2011",
			"exams" : [ {
				"description" : "Introduction to New Testament (Exam)",
				"formatted_datetime" : "31 May 2011  9:30AM - 12:30PM",
				"subject_area" : {
					"value" : "TME1"
				}
			} ]
		}, {
			"day" : "01 June 2011",
			"exams" : [ {
				"description" : "Belief and practice in the ear (Exam)",
				"formatted_datetime" : "01 June 2011  9:30AM - 11:30AM",
				"subject_area" : {
					"value" : "TME1"
				}
			} ]
		} ]
	};
	var result = timetable.genTimetable(data);
	deepEqual(result, expected, "Generated timetable data");
});