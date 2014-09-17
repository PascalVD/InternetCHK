exports.action = function(data, callback, config, SARAH){

var config = config.modules.InternetCHK;

var url = 'http://www.google.fr/';

   console.log(url);
  var request = require('request');
  request({ 'uri' : url }, function (err, response, body){
    
  if (err || response.statusCode != 200) {
    callback({'tts': "pas de connexion internet"});
    return;
  }else{
callback({'tts': "La connexion fonctionne correctement "});  
  }
 });

}

exports.cron = function(callback, task, SARAH){

var url = 'http://www.google.fr/';

   console.log(url);
 var request = require('request');
  request({ 'uri' : url }, function (err, response, body){
    
  if (err || response.statusCode != 200) {
    callback({'tts': "pas de connexion internet"});
    return;
  }else{
callback({'tts': "La connexion fonctionne correctement "});  
  }
 });
}

