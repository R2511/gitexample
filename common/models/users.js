'use strict';
var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
var bcrypt = require('bcrypt');
var config = require('../../server/config.json');
var path = require('path');
var passwordHash = require('password-hash');
var loopback = require('../../node_modules/loopback/lib/loopback');
var LoopBackContext = require('loopback-context');
var utils = require('../../node_modules/loopback/lib/utils');
var SALT_WORK_FACTOR = 10;
var crypto = require('crypto');

module.exports = function(users) {

users.signup = function(context, cb) {
  console.log(context);
  context.password = passwordHash.generate(context.password);
  users.create(context,function(err,model) {
					console.log(model);
					if(err){
						cb(err);
					}
         else{
           var student = {
             'userId':model.id
           }
         users.app.models.student.create(student,function(err,model){
          console.log(model);
             if(err) {
               cb(err);
             }
             var responseData = {};
					                responseData.title = 'successfull';
					                responseData.statusCode = 200;
					                cb(null, responseData)
                });
            };
        });
};
  users.remoteMethod('signup', {
        http: {
            path: '/signUp',
            verb: 'post'
        },
        accepts: {
            arg: 'data',
            type: 'json',
            http: {
              source:'body'
            }

        },
				returns: {
           arg: 'status',
           type: 'string'
       }
    });

users.signin = function(context,cb) {
  var default_ttl = 1000 * 60 * 60 * 24 * 14;
    users.find ({
      where: {
        Username : context.Username

      }
 },function(err,model){
      if (err) {
         cb(err);
      } else {
        if (model.length > 0) {
            var hash = passwordHash.verify(context.password,model[0].password);
            if (hash) {
                users.app.models.accessToken.create({
                       ttl: default_ttl,
                       userId: model[0].id
                     },function(err, accessToken) {
                       if (err) {
                           return cb(err);
                         }
                       else{
                         console.log(model);
                         var responseData = {};
                        responseData.statusCode = 200;
                        responseData.Username=context.Username;
                        responseData.password=model[0].password;
                        responseData.token = accessToken.id;
                        responseData.role=model[0].role;
                        responseData.id=model[0].id;
                        console.log(responseData);
                         cb(null, responseData)
                       }
                 });

            } else {
              console.log('password incorrect');
              cb(null,'password incorrect');
            }
        } else {
      cb(null,'incorrect Username');
        }
      }
    });
};
users.remoteMethod('signin', {
          http: {
              path: '/signin',
              verb: 'post'
          },
          accepts:{
              arg: 'data',
              type: 'json',
              http: {
                source:'body'
              }
            },

          returns: {
             arg: 'status',
             type: 'string'
         }
      });

users.getusers = function(Role,cb) {
  if (Role=='student'){
    var list = {role:Role}
  } else if(Role=='teacher') {
        var list = {role: 'student'}
      }
  users.find({
    where: list
    },function(err,model)  {
      if(err){
        cb(err,null)
      }
      else{
        console.log(model);
        cb(null,model)
      }
    });

  };

users.remoteMethod(
    'getusers',
    {
      accepts: [
        { arg: 'role',type: 'string'}
      ],
      http: {
        verb: 'get',
        path: '/getusers'},

      returns:
      { arg: 'status',
       type: 'string'
     }
});

users.getusersid = function(password,cb) {
      users.find({
        where: {
           id: password
        }
      },function(err,model)  {
        if(err){
          cb(err,null)
        }
        else{
          cb(null,model)
        }
      });
    };
    users.remoteMethod(
        'getusersid',
        {
          accepts: [
            { arg: 'id',type: 'number'}
          ],
          http: {
            verb: 'get',
            path: '/getusersid'},

          returns:
          { arg: 'status',
           type: 'string'
         }
       });

users.change = function (context,cb) {
  console.log(context);
  users.updateAll( {id: context.id}, {password: context.password}, function(err, model){
     return cb(err,model);
     console.log(model);

     if(err){
       cb(err);
     }
   });
 };
users.remoteMethod('change', {
  accepts: {
      arg: 'data',
      type: 'json',
      http: {
        source: 'body'
      }
    },
      returns: {
      arg: 'result',
      type: 'string'
    },
    http: {
      path: '/userupdate',
      verb: 'post'
    }
  });

};
