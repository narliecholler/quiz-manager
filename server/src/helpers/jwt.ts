import jwt from 'jsonwebtoken'

export function createJwt(id: string, email: string, duration: number): string {
  return jwt.sign({ id, email, duration }, process.env.TOKEN_SECRET, {
    expiresIn: duration
  })
}

export function decodeJwt(): null {
  return null
}