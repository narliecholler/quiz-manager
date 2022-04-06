import 'dotenv/config'
import App from './app'
import connectToDatabase from './config/db'

const port: string = process.env.PORT
const environment = process.env.NODE_ENV

const app = App()

const startServer = (): void => {

  if (environment !== 'test') {
    connectToDatabase()
      .then(() => {
        console.log('connected to database')
      })
      .then(() => {
        app.listen(port, () => console.log(`Server started on port: ${port}`))
      })
      .catch((err) => {
        console.log('connection error', err)
        process.exit()
      })
  }

}

startServer()
