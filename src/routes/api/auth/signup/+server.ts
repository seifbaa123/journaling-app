import { json } from "@sveltejs/kit"
import db from "$lib/server/db"
import bcrypt from "bcrypt"
import { signUser } from "$lib/server/jwt"

export async function POST({ request }) {
    const body = await request.json()
    body.password = await bcrypt.hash(body.password, 10)
    const user = await db.users.create({ data: body })

    return json({ token: signUser(user.username) })
}
