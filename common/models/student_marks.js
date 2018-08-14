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
            verb: 'get'
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
  studentmarks.change = function (context, cb) {
  console.log(context);
  var info = {
      english:context.english,
      maths:context.maths,
      science:context.science,
      tamil:context.tamil,
      social:context.social,
      // subject: context.subject,
      marks: context.marks
    }
        studentmarks.updateAll({
              studentid:context.studentid
        }, info, function(err, model){
              console.log(model,"MODEL---")
             return cb(err,info);
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




  studentmarks.getmarks = function(context,cb) {
        studentmarks.find({
          where: {
             student_id: context
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
      studentmarks.remoteMethod(
          'getmarks',
          {
            accepts: [
              { arg: 'student_id',type: 'number'}
            ],
            http: {
              verb: 'get',
              path: '/student-getmarks'},

            returns:
            { arg: 'status',
             type: 'string'
           }
         });

};
