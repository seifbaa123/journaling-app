import { json } from "@sveltejs/kit";
import db from "$lib/server/db"

export async function GET({ params }) {
    const journal = await db.journals.findFirst({
        where: {
            date: params.date,
        }
    })
    return json({ journal })
}

export async function PUT({ request, params }) {
    const body = await request.json()
    const journal = await db.journals.update({
        where: {
            date: params.date,
        },
        data: body,
    })
    return json({ journal })
}

export async function DELETE({ params }) {
    const journal = await db.journals.delete({
        where: {
            date: params.date,
        },
    })
    return json({ journal })
}
