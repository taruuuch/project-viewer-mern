const { Router } = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const { getUser, getUserById } = require('../controllers/user.controller')
const router = Router()

router.get(
  '/my',
  authMiddleware,
  getUser
)
router.get(
  '/:userId',
  getUserById
)

module.exports = router