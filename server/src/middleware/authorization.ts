import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

/**
 * User authorization via legal JWT.
 */

interface AuthInfo extends Request {
  user: string
}

export function verifyToken(req: AuthInfo, res: Response, next: NextFunction): Response<void> {
  const token = req.headers.authorization.split(' ')[1] // separate jwt from bearer and space before string

  if (!token) {
    return res.status(403).json({ message: 'no token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_STRING)
    console.log('decoded', decoded)
    // req.user = decoded
  } catch (e) {
    next(e)
  }
}