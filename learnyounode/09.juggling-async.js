var http = require('http');
var bl = require('bl');
var results = [];
var resultsCount = 0;

for (var i = 0; i < 3; i++) {
  get(process.argv[2 + i], i);
}

function get(url, i) {
  http.get(url, function (response) {

    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }

      results[i] = data.toString();
      resultsCount++;

      if (resultsCount === 3) {
          for(var k = 0; k < 3; k++) {
            console.log(results[k]);
	  }
      }

    }));    
  });
}
