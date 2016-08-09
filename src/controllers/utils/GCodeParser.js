module.exports = function(sPath, fCallback) {
  var result = [],
      aLine,
      fLineReader;

  fLineReader = require('readline').createInterface({
    input: require('fs').createReadStream(sPath)
  });

  fLineReader.on('line', function (line) {
    aLine = line.trim();
    if(line[0]==";")
      aLine = null;
    if(aLine != null)
      result.push(aLine);
  });

  fLineReader.on('close', function(){
    fCallback(result);
  });
}
