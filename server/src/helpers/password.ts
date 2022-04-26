
import bcrypt from 'bcryptjs'

export async function hashPassword(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  } catch (e) {
    throw e
  }
}

export async function comparePassword(input: string, password: string): Promise<boolean> {
  try {
    return await bcrypt.compare(input, password)
  } catch (e) {
    throw e
  }
}