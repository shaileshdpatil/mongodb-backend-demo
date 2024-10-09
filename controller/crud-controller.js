const Employee = require("../modals/employe-modal");

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({data: employees})
    } catch (e) {
        console.log(e)
    }
}

const createEmployees = async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            const exist = await Employee.exists({_id:data._id});
            if (exist) {
                const {_id,...payload} = data;
                const updated = await Employee.findByIdAndUpdate(_id,payload);
                return res.status(200).json({ data: updated });
            }
            res.status(400).json({data: "document id is not valid"});
        } else {
            const employees = await Employee.create(data);
            res.status(200).json({data: employees});
        }
    } catch (e) {
        console.log(e)
        res.status(400).json({data: "Invalid Request Please check parameters"});
    }
}

module.exports = {
    getEmployees,
    createEmployees
}