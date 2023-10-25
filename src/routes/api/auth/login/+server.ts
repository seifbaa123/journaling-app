import { json } from "@sveltejs/kit"
import db from "$lib/server/db"
import bcrypt from "bcrypt"
import { signUser } from "$lib/server/jwt"

export async function POST({ request }) {
    const body = await request.json()
    const user = await db.users.findFirst({ where: { username: body.username } })

    if (user) {
        if (await bcrypt.compare(body.password, user.password)) {
            return json({ token: signUser(user.username) })
        }
    }

    return json({})
}
