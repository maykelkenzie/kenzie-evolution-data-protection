import createUserService from "../services/users/createUser.service.js"
import listSpecificUserService from "../services/users/listSpecificUser.service.js"
import listUsersService from "../services/users/listUsers.service.js"

export const createUserController = async (req,res) => {
    try {
        const {body} = req.body
        const user = await createUserService(req.body)
        return res.status(201).send(user)
        
    } catch (error) {
        return res.status(400).send({message: error.message})
    }
}

export const listUsersController = async (req,res) => {
    try {
        const user = await listUsersService()
        return res.status(200).send(user)
        
    } catch (error) {
        return res.status(400).send({message: error.message})
    }
}

export const listSpecificUserController = async (req,res) => {
    try {
        const {id} = req.params
        const user = await listSpecificUserService(id)
        return res.status(200).send(user)
        
    } catch (error) {
        return res.status(400).send({message: error.message})
    }
}