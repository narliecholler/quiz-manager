import { Request, Response, NextFunction } from 'express'
import { signUp } from './user.service'

export const SignUp = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const { body: { credentials } } = req

  try {
    const data = await signUp(credentials)
    return res.status(data.status).json({ message: data.data })
  } catch (e) {
    next(e)
  }


}

export const SignIn = (req: Request, res: Response, next: NextFunction): Response => {
  return res.status(200).json({ message: 'SignIn' })
}