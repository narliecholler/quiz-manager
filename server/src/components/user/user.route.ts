import { Router } from 'express'
import { SignUp, SignIn } from './user.controller'

const router = Router()

router
  .route('/signup')
  .get(SignUp)

router
  .route('/signin')
  .get(SignIn)

export default router