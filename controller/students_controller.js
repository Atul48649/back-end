const Student = require('../models/Student');

module.exports.createStudent = function(req, res){
    const { name, subject, fee, file } = req.body;
    Student.create({
        name: name,
        subject: subject,
        fee: fee,
        file: file
    }, function(err, student){
        if(err){
            console.log("Error in creating student");
            return;
        }
        return res.status(200).json({
            message: 'Student created successfully!',
            data: {
                name: req.body.name,
                subject: req.body.subject,
                fee: req.body.fee,
                file: file
            }
        });
    })
}