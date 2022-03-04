import mongoose from 'mongoose'

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING)
  } catch (e) {
    throw e
  }
}

export default connectToDatabase