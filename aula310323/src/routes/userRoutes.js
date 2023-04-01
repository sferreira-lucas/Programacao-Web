import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.get('/', userController.getAllusers)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)

export default router