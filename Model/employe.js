import mongoose from 'mongoose'

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
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    address: String,
    designation: String,
    joiningDate: String,
    gender: String,
    experience: [experienceSchema]
});

const EmployeeModel = mongoose.model('Employee', employeeSchema);

export default EmployeeModel;
