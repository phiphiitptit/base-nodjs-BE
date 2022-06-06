const StudentModel = require('../models/UserModel');

const CreateStudent = async (req,res)=>{
    try {
        const doc = await StudentModel.create(req.body);
       
        res.status(200).json({
            mes:"Create Successful",
            data :doc,
        })
        
    } catch (e) {
        res.status(400).json({
            mes:"Create Fail",
            data :e,
        })
    }
}

module.exports = {
    CreateStudent
  };