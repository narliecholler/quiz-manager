import User from "../user.model"
import { signUp, UserSignUp } from '../user.service'
import { connectDb, closeConnection, clearDatabase } from '../../../config/db_test'

const credentialsObj: UserSignUp = {
  name: 'charlie',
  email: 'test@test.com',
  password: '123Password'
}

describe('Testing user service functions', () => {
  beforeAll(async () => await connectDb())

  afterAll(async () => await closeConnection())

  afterEach(async () => await clearDatabase())

  it('Creates a user', async () => {
    const { status, data } = await signUp(credentialsObj)

    // data returns email address so search DB for that if successful.
    const theUser = await User.findOne({ data })

    expect(status).toEqual(200)
    expect(data).toEqual(credentialsObj.email)
    expect(theUser.name).toEqual(credentialsObj.name)
    expect(theUser.email).toEqual(credentialsObj.email)
    expect(theUser.password).not.toEqual(credentialsObj.password)
  })

  it('if user exists, returns correct response', async () => {
    // insert one user.
    await signUp(credentialsObj)

    // try to insert another user with same email.
    const { status, data } = await signUp(credentialsObj)

    expect(status).toEqual(400)
    expect(data).toEqual(`User already exists, log in with ${credentialsObj.email} instead`)
  })

  it('If an error is thrown, return correct error response (ie. invalid credentials body)', async () => {
    await expect(async () => {
      await signUp({ name: '', email: '', password: '' })
    }).rejects.toThrow('Error trying to sign up.')

  })
})