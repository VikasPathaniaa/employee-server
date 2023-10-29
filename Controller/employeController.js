import EmployeeModel from "../Model/employe.js";


export const employeController =async (req , res)=>{
    try{
        const data = req.body;
        const employe = new EmployeeModel(data);
    
         await employe.save()
         return res.status(200).json({
            msg:"data added Successfully ",
            success:true
         })
    }catch(error){
        return res.status(500).json({
            msg:"Error While Register Employe ",
            success:false,
           error: error.message
        })

    }
   

}

export const getAllEmployes = async( req , res)=>{

    try{
        let record = await EmployeeModel.find()
        return res.status(200).json({
            data:record,
            success:true
        })
    }catch(error){
        return res.status(500).json({
            msg:"Error While fetch Data",
            success:false,
            error: error.message
        })
    }
    }

    export const updateById = async (request, response) => {
        try {
          let employe = await EmployeeModel.findById(request.params.id);
          if (!employe) {
            return response.status(404).json({ msg: "No employe found " });
          }
          await Post.findByIdAndUpdate(request.params.id, { $set: request.body });
          return response.status(200).json({ msg: "data Updated Successfully" });
        } catch (error) {
          return response.status(500).json(error.message);
        }
      };

    export const deleteEmploye = async (request, response) => {
        console.log(request.params.id, "request.params.idrequest.params.id");
        try {
          let employe = await EmployeeModel.findById(request.params.id);
      
          if (!employe) {
            return response.status(400).json("employe not found");
          }
      
          await employe.deleteOne(); // Assuming you're using Mongoose, use deleteOne() instead of delete()
      
          return response.status(200).json("employe deleted successfully");
        } catch (error) {
          return response.status(500).json({ msg: error.message });
        }
      };
      