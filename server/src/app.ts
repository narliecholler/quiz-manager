import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { UserRoute } from '@components/user'

const App = () => {
  const app = express()
  app.use(bodyParser.json({ limit: "50mb" }))
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
  app.use(cors())

  app.use('/api/auth', UserRoute)

  return app
}

export default App