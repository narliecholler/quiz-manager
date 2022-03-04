import { Request, Response, NextFunction } from 'express'
import { signUp } from './user.service'

export const SignUp = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "pass!" });
  // const { body: { credentials } } = req

  // try {
  //   // const t = await signUp(credentials)
  //   // return res.json(t)

  //   res.json('hello')
  // } catch (e) {
  //   throw e
  // }
}

export const SignIn = (req: Request, res: Response, next: NextFunction) => {

}