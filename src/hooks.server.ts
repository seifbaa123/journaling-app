import { getKey } from "$lib/server/jwt"
import jwt from "jsonwebtoken"

const nonAuthRoutes = [
    "/signup",
    "/api/auth/signup",
]

const redirect = () => new Response(null, {
    status: 301,
    headers: { location: '/signup' }
})

export async function handle({ event, resolve }) {
    if (nonAuthRoutes.includes(event.url.pathname)) {
        return resolve(event)
    }

    const token = event.cookies.get("token")

    if (token) {
        try {
            event.locals.username = jwt.verify(token, getKey()) as string
            return resolve(event)
        } catch {
            return redirect()
        }
    }

    return redirect()
}
