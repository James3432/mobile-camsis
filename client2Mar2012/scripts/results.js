/*
  results script
  Rory McCann
 */

var results = (function() {
	
	/* remove future exam results */
	/* based on exams with no mark or out_of */
	var stripInvalid = function(data) {
		var toDelete = [];
		
		for (var i =0; i < data.results.terms.length; i++) {
			for (var j = 0; j < data.results.terms[i].papers.length;j++) {
				if (data.results.terms[i].papers[j].mark == "" || data.results.terms[i].papers[j].out_of == "")
					toDelete.push({t: i, p: j});
			}
		}
		// remove papers
		for (var i = 0; i < toDelete.length; i++) {
			delete data.results.terms[toDelete[i].t].papers[toDelete[i].p];
		}
		
		toDelete = [];
		// now remove terms
		for (var i =0; i < data.results.terms.length; i++) {
			if (data.results.terms[i].papers.length > 0 && data.results.terms[i].papers[0] == undefined)
				toDelete.push(i);
		}
		
		for (var i = 0; i < toDelete.length; i++) {
			delete data.results.terms[toDelete[i]];
		}
		return data;
	};

	return {
		genResults : function(data) {
			return stripInvalid(data);
		}
	};

})();