/*
 * Tests for DAL.js
 */

module("Data Access Layer");

test("Object existance", function() {
	ok(dataRequest, "dataRequest");
	ok(dataRequest.getStudentNumber,"getStudentNumber");
	ok(dataRequest.getTimetable,"getTimetable");
	ok(dataRequest.getExamResult,"getExamResult");
});