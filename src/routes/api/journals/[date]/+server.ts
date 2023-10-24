import { json } from "@sveltejs/kit";
import db from "$lib/server/db"

export async function GET({ params, locals }) {
    const journal = await db.journals.findFirst({
        where: {
            username: locals.username,
            date: params.date,
        }
    })
    return json({ journal })
}

export async function PUT({ request, params, locals }) {
    const body = await request.json()
    const journal = await db.journals.update({
        where: {
            username: locals.username,
            date: params.date,
        },
        data: body,
    })
    return json({ journal })
}

export async function DELETE({ params, locals }) {
    const journal = await db.journals.delete({
        where: {
            username: locals.username,
            date: params.date,
        },
    })
    return json({ journal })
}
