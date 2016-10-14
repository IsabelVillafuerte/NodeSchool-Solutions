var fs = require('fs');
var path = require('path');
var result = [];
var count = 0;

module.exports = function(path_name, extension, callback){

  fs.readdir(path_name, function readDirc(err, files){
    if(err){
      return callback(err);
    }
    for(var i = 0; i < files.length; i++) {
      if(path.extname(files[i]) == '.' + extension){
        result[count] = files[i];
        count++;
      }
    }
    return callback(null, result);
  })
}
