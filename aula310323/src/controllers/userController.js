import User from '../models/userModel.js'

async function getAllusers(req, res){
    const users = await User.findAll()
    res.json(users)
}

async function createUser(req, res){
    const user = await User.create(req.body)
    res.json(user)
}

async function deleteUser(req, res){
    const user = await User.destroy({where: {id: req.params.id}})
    res.json(user)
}

async function updateUser(req, res){
    const user = await User.update({where: {id: req.params.id}})
    res.json(user)
}

async function getUserById(req, res){
    const user = await User.findByPk(req.params.id)
    res.json(user)
}

export default {getAllusers, createUser, deleteUser, updateUser, getUserById}