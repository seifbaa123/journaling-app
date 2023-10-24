import { json } from "@sveltejs/kit";
import db from "$lib/server/db"

export async function GET({ locals }) {
    const journals = await db.journals.findMany({ where: { username: locals.username } })
    return json({ journals })
}

export async function POST({ request, locals }) {
    const body = await request.json()
    body.username = locals.username
    const journal = await db.journals.create({ data: body })
    return json({ journal })
}
