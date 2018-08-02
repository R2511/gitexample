'use strict';
module.exports = function(studentmarks) {
    studentmarks.markdetails = function(context, cb) {
				studentmarks.create(context,function(err,model) {
					console.log(model);
					if(err){
						cb(err);
					}
					var responseData = {};
					                responseData.title = 'successfull';
					                responseData.statusCode = 200;
					                cb(null, responseData);
			});
  };
    studentmarks.remoteMethod('markdetails', {
        http: {
            path: '/studentmarks',
            verb: 'post'
        },
        accepts: {
            arg: 'data',
            type: 'json',
            http: {
              source: 'body'
            }
          },
				returns: {
           arg: 'status',
           type: 'string'
       }
    });
  studentmarks.change = function (context,cb) {
  console.log(context);
  var info = {
      subject: context.subject,
      marks: context.marks
    }
studentmarks.updateAll({studentid:context.studentid}, info, function(err, model){
     return cb(err,model);
     console.log(model);
     if(err){
       cb(err);
     }
   });
 };
studentmarks.remoteMethod('change', {
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
      path: '/update-marks',
      verb: 'post'
    }
  });
};
