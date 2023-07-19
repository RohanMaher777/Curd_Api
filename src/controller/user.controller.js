const db = require('../db/connection');
const User = db.user

const getUsers = async(req, res)=>{
    const data = await User.findAll({});
    res.status(200).json({data: data});
}

const getUser = async(req, res)=>{
    const data = await User.findOne({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({data: data});
}

const postUser = async(req, res)=>{
    const postData = req.body 
    if(postData.length>1){
        var data = await User.bulkCreate(postData)
    }
    else{
        var data = await User.create(postData)
    }
    res.status(200).json({data: data});
}

const deleteUser = async(req, res)=>{
    const data = await User.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({data: data});
}

const patchUser = async(req, res)=>{
    var userData = req.body
    const data = await User.update(userData,{
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({data: data});
}


module.exports = {
    getUsers,
    getUser,
    postUser,
    deleteUser,
    patchUser
}
