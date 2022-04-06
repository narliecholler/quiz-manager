import User from "./user.model"
import { hashPassword } from "../../helpers/password"

export interface UserSignUp {
  name: string
  email: string
  password: string
}

interface ResponseProp {
  status: number
  data: string
}

export async function signUp(credentials: UserSignUp): Promise<ResponseProp> {
  const { name, email, password } = credentials
  let response = <ResponseProp>{ status: 200, data: '' }

  // if user exists return error
  try {
    const findUser = await User.findOne({ email })

    // if findUser has content it means user exists so return response 
    if (findUser) {
      return response = {
        status: 400,
        data: `User already exists, log in with ${findUser.email} instead`
      }
    }

    // sign up user
    const hash = await hashPassword(password)
    const user = new User({ name, email, password: hash })
    await user.save()

    // return email of new user in data
    response = {
      status: 200,
      data: user.email
    }

    return response
  } catch (e) {
    throw new Error('Error trying to sign up.')
  }



  // if (findUser)

  // try {
  //   await User.findOne({ email })

  //   const hash = await hashPassword(password)
  //   const user = new User({ name, email, password: hash })

  //   await user.save()

  // } catch (e) {
  //   throw e
  // }
}


//   const data = {
//     error: {},
//     data: {}
//   }

//   try {
//     // retrieve user email.
//     const user = await User.findOne({
//       email,
//     })

//     // check if user already exists via email.
//     if (user) {
//       return {
//         success: false,
//         error: 'Email already exists, try and sign in.'
//       }
//     }

//     const hash = await hashPassword(password)
//     const t = new User({ email, password: hash })

//     return await t.save((err: any, res: any) => {
//       if (err) {
//         return {
//           data: {
//             ...data,
//             error: err
//           }
//         }
//       }

//       return {
//         data: {
//           ...data,
//           data: res
//         }
//       }
//     })


//     // return { error, result }

//   } catch (e) {
//     throw e
//   }
// }