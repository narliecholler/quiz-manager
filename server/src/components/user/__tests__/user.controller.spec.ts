import App from '../../../app'
import supertest from 'supertest'
import { connectDb, closeConnection, clearDatabase } from '../../../config/db_test'


const request = supertest(App());

describe('Testing user controller', () => {
  // beforeAll(async () => await connectDb())

  // afterAll(async () => await closeConnection())

  // afterEach(async () => await clearDatabase())

  it('testing /signup', async () => {
    const res = await request.get('/api/auth/signup')

    expect(res.body.message).toBe('pass!')
  })

})