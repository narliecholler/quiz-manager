export interface IUserDetails {
  name: string
  email: string
  password: string
}

export interface IUserSignIn {
  email: string
  password: string
}

export interface IUserSignUpDetails {
  email: string
  password: string
  name: string
}

interface IUserSignInResponse {
  email: string
  name: string
  token?: string
}

export interface IUserResponse {
  status: number
  message: string
  data: IUserSignInResponse
}