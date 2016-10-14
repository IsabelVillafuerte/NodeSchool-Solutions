var http = require('http');

var url = process.argv[2];

http.get(url, function(request) {
  var info = "";
  request.setEncoding("utf8");
  request.on("data", function(data) {
    info += data;
  });
  request.on("end", function() {
    console.log(info.length);
    console.log(info);
  });
});
