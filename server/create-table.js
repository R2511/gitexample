var server = require('./server');
var ds = server.dataSources.db;


var lbTables = ['accessToken', 'ACL','Role','RoleMapping','student','users','studentdetails','studentmarks'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});
