var myfile = require('./myfile.js');
var dirname = process.argv[2];
var extension = process.argv[3];

myfile(dirname, extension, function(err, files) {
  if(err) return console.log('Error', err);

    for (var i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
})
