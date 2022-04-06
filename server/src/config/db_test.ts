/**
 * This file allows the methods to set up and clear mongo db for testing
 */

import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongoServer: MongoMemoryServer

export async function connectDb(): Promise<void> {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri(), {});

  mongoose.connection.once('open', () => {
    console.log(`MongoDB successfully connected to ${mongoServer.getUri()}`);
  });

  mongoose.connection.on('error', (e) => {
    if (e.message.code === 'ETIMEDOUT') {
      console.log(e);
      mongoose.connect(mongoServer.getUri(), {});
    }
    console.log(e);
  });
}

export async function closeConnection(): Promise<void> {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoServer.stop()
}

export async function clearDatabase(): Promise<void> {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}
