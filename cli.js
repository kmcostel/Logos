#!/usr/bin/env node

var fs = require('fs');
var request = require('request');
var clearbit = require('clearbit')('aa1d6895b1f6dada3f93c5d57d40348c');
var http =     require('http');


request('GivenURLhere').pipe(fs.createWriteStream('uniqueName.png'))







/*
var png = http.get("http://logo.clearbit.com/linkedin.com", function(res) {
  console.log("Got response: " + res.statusCode);
  console.log('response[headers]...` ');
  for (var attr in res['headers']) {
//    console.log('Attr: ' + attr + ', value = ' + res['headers'][attr]);
  }
  for (var attr in res) {
//    console.log('Attr: ' + attr + ', value = ' + res[attr]);
  }
  }).on('error', function(e) {
//    console.log("Got error: " + e.message);
  });
for (var attr in png) {
  console.log('attr = ' + attr + ', value = ' + png[attr]);
}
console.log(png);
*/
/*
var options = {
   host: 'https://logo.clearbit.com/linkedin.com',
   port: 80,
   method: 'GET'
};

http.get(options, funtion(response) {
   console.log(response);      
}).end();


var args  = process.argv.slice(2);
var domain = args[0];

if (!domain) {
   console.error('Usage: cli.js [domain]')
   process.exit(1);
}
else {
   //getCall();
}

*/

/*
clearbit.Company.find({domain: 'linkedin.com'})
  .then(function (company) {
      for (var attr in company) {
         console.log('Attribute: ' + attr + ', value: ' +
	 company[attr]);
//	 for (var attr2 in attr) {
//	    console.log('attr = ' + attr + 
//	 }
      }
      console.log('Logo: ', company.logo);
      console.log('Site: ', company.site);
  })
  .catch(clearbit.Company.NotFoundError, function (err) {
    // Email address could not be found
    console.log(err);
  })
  .catch(function (err) {
    console.error(err);
  });
  */
