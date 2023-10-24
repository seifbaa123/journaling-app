import jwt from "jsonwebtoken"

export function signUser(username: string) {
    const jwtKey: jwt.Secret = getKey()
    return jwt.sign(username, jwtKey)
}

export function getKey() {
    return process.env.JWT_KEY ?? process.exit(1)
}
