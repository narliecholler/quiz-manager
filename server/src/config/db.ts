import mongoose from 'mongoose'

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_STRING)
  } catch (e) {
    throw e
  }
}

export default connectToDatabase