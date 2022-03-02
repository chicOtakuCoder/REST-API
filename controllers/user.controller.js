const res = require('express/lib/response');
const User = require('../models/User');

class UserController {
    static getAll = async (req, res) => {
        try {
            const allUsers = await User.find()

            return res.status(200).json(allUsers)
        } catch (error) {
            res.status(500).json("No Users found")
        }
    }

    static create = async (req, res) => {
        try {
            const { firstName, lastName, age } = req.body;

            const newUser = await User.create({
                firstName,
                lastName,
                age
            })

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json('server error');
        }
    }

    static update = async () => {
        try {
            const { id } = req.params;
            const { firstName, lastName, age } = req.body

            if (!id) {
                return res.status(404).json('post not found')
            }
                const update = await User.findByIdAndUpdate({_id : id})
                const userUpdated = Object.assign(update, req.body)

                userUpdated.save()

                res.status(200).json(userUpdated) 
            
        } catch (error) {
            res.status(500).json('server error')
        } 
    }
    
    static delete = async () => {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json('invalid request')
            }

            const deleteUser = await User.findByIdAndDelete({ _id: id });

            if(!deleteUser) {
                return res.status(404).json('User not found')
            }

            res.status(200).json('success')
        
    }
}

module.exports = UserController;