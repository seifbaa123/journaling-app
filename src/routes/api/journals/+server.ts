import { json } from "@sveltejs/kit";
import db from "$lib/server/db"

export async function GET() {
    const journals = await db.journal.findMany()
    return json({ journals })
}

export async function POST({ request }) {
    const body = await request.json()
    const journal = await db.journal.create(body)
    return json({ journal })
}
