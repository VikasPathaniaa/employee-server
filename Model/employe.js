import  mongoose from 'mongoose' ;

const experienceSchema = new mongoose.Schema({
    id: Number,
    companyName: String,
    experienceDesignation: String,
    timePeriod: String
});

const employeeSchema = new mongoose.Schema({
    employeId: Number,
    name: String,
    phoneNumber: String,
    email: String,
    address: String,
    designation: String,
    joiningDate: String,
    gender: String,
    experience: [experienceSchema]
});

const EmployeeModel = mongoose.model('Employee', employeeSchema);

export default  EmployeeModel;