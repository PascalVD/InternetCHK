exports.action = function(data, callback, config, SARAH)
{
 
        var config = config.modules.InternetCHK;
 
        var url = 'http://www.google.fr/';
 
  var fs   = require('fs');
	fs.exists('./plugins/InternetCHK/stat.txt"', function (exists) {
	var Statt = fs.createWriteStream('./plugins/InternetCHK/stat.txt');
	Statt.end();
	});
  
  var etat;
  etat = fs.readFileSync("./plugins/InternetCHK/stat.txt", "UTF-8");
  console.log("Demande explicite contenu fichier stat.txt = "+etat);
 
 
        console.log(url);
        var request = require('request');
  request({ 'uri' : url }, function (err, response, body)
  {
   
        if (err || response.statusCode != 200)
        {
     
      if (etat != "NOK")
      {
        fs.writeFileSync("./plugins/InternetCHK/stat.txt", "NOK", "UTF-8");
                                return;
      }
      callback({'tts': "pas de connexion internet"});
        }
        else
        {
      if (etat != "OK")
      {
        fs.writeFileSync("./plugins/InternetCHK/stat.txt", "OK", "UTF-8");
                                return;
      }
      callback({'tts': "La connexion fonctionne correctement "});
        }
 });
 
}
 
exports.cron = function(callback, task, SARAH)
{
  var url = 'http://www.google.fr/';
 
  var fs   = require('fs');
	fs.exists('./plugins/InternetCHK/stat.txt"', function (exists) {
		var Statt = fs.createWriteStream('./plugins/InternetCHK/stat.txt');
		Statt.end();
	});
  var etat;
  etat = fs.readFileSync("./plugins/InternetCHK/stat.txt", "UTF-8");
  console.log("CRON contenu fichier etat.txt = "+etat);
 
 
        console.log(url);
        var request = require('request');
  request({ 'uri' : url }, function (err, response, body)
  {
   
        if (err || response.statusCode != 200)
        {
     
      if (etat != "NOK")
      {
        fs.writeFileSync("./plugins/InternetCHK/stat.txt", "NOK", "UTF-8");
                callback({'tts': "pas de connexion internet"});
                                return;
      }
        }
        else
        {
      if (etat != "OK")
      {
        fs.writeFileSync("./plugins/InternetCHK/stat.txt", "OK", "UTF-8");
        callback({'tts': "La connexion fonctionne correctement "});
                                return;
      }  
        }
 });
}

