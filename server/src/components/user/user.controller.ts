import { Request, Response, NextFunction } from 'express'
import { signUp, signIn } from './user.service'

/*
    needed; 
      - middleware for validating email etc...
*/

export const SignUp = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const { body: { credentials } } = req

  try {
    const data = await signUp(credentials)
    return res.status(data.status).json({ message: data.data })
  } catch (e) {
    next(e)
  }
}

export const SignIn = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const { body: { details } } = req

  try {
    const response = await signIn(details)
    return res.status(response.status).send(response.data ? { ...response.data } : response.message)
  } catch (e) {
    next(e)
  }
}