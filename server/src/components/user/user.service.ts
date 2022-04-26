import jwt from 'jsonwebtoken'
import User from './user.model'
import { hashPassword, comparePassword } from '../../helpers/password'
import { IUserSignUpDetails, IUserSignIn, IUserResponse } from './types'

export async function signUp(credentials: IUserSignUpDetails): Promise<Partial<IUserResponse>> {
  const { name, email, password } = credentials
  let response: Partial<IUserResponse> = { status: 200 }

  try {
    // see if user exists
    const findUser = await User.findOne({ email })
    if (findUser) {
      return response = {
        status: 400,
        message: `User already exists, log in with ${findUser.email} instead`
      }
    }

    // sign up user
    const hash = await hashPassword(password)

    const user = new User({ name, email, password: hash })
    await user.save()

    // return email and name of user.
    return response = {
      ...response,
      data: {
        email: user.email,
        name: user.name
      }
    }
  } catch (e) {
    throw new Error('Error trying to sign up.')
  }
}

export async function signIn(details: IUserSignIn): Promise<Partial<IUserResponse>> {
  const { email, password } = details
  let response: Partial<IUserResponse> = { status: 200 }

  try {
    // check if email exists .
    const user = await User.findOne({ email })
    if (!user) {
      return response = {
        status: 401,
        message: 'No user found.'
      }
    }

    // compare passwords if email does exist.
    const validPassword = await comparePassword(password, user.password)
    if (!validPassword) {
      return response = {
        status: 401,
        message: 'Password incorrect.'
      }
    }

    // create JWT token
    const token = jwt.sign({ email: user.email, name: user.name, id: user._id }, process.env.TOKEN_STRING, {
      expiresIn: 86400 // 24 hours
    })

    // return user if logged in.
    return response = {
      ...response,
      data: {
        name: user.name,
        email: user.email,
        token
      }
    }

  } catch (e) {
    throw new Error(`Cannot sign in: ${e.message}`)
  }
}