import App from './app'
import connectToDatabase from './helpers/db'
require('dotenv').config()

const port: string = process.env.PORT
const app = App()

const startServer = () => {
  console.log('here')
  // connectToDatabase()
  //   .then(() => {
  //     console.log('connected to database, now starting server...')
  if (process.env.NODE_ENV !== 'test') app.listen(port, () => console.log(`Server started on port: ${port}`))
  // })
  // .catch(err => {
  //   throw err
  // })
}

startServer()
