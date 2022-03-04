import User from "./user.model"
import { hashPassword } from "../../helpers/password"

interface UserSignUp {
  email: string,
  password: string
}


export async function signUp(credentials: UserSignUp) {
  const { email, password } = credentials
  const data = {
    error: {},
    data: {}
  }

  try {
    // retrieve user email.
    const user = await User.findOne({
      email,
    })

    // check if user already exists via email.
    if (user) {
      return {
        success: false,
        error: 'Email already exists, try and sign in.'
      }
    }

    const hash = await hashPassword(password)
    const t = new User({ email, password: hash })
    return await t.save((err: any, res: any) => {
      console.log(err)
      if (err) {
        return {
          data: {
            ...data,
            error: err
          }
        }
      }

      console.log('res', res)

      return {
        data: {
          ...data,
          data: res
        }
      }
    })


    // return { error, result }

  } catch (e) {
    throw e
  }
}