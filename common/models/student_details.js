'use strict';
module.exports = function(studentdetails) {
  studentdetails.info = function(context, cb) {
				studentdetails.create(context,function(err,model) {
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
  studentdetails.remoteMethod('info', {
        http: {
            path: '/studentdetails',
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
};
