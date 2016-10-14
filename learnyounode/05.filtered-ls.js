var fs = require('fs');
var path = require('path');

var ruta = process.argv[2];
var ext = process.argv[3];

 
fs.readdir(ruta, function (err, files) {
 if (err) return console.error(err)
  files.forEach(function (filename) {
    if (path.extname(filename) === '.' + ext) {
      console.log(filename);
    }
  });
});

