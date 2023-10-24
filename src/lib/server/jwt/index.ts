import jwt from "jsonwebtoken"

export function signUser(username: string) {
    const jwtKey: jwt.Secret = process.env.JWT_KEY ?? process.exit(1)
    return jwt.sign(username, jwtKey)
}
