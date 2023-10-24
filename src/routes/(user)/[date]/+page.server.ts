import db from "$lib/server/db"

export async function load({ params, locals }) {
    const journal = await db.journals.findFirst({
        where: {
            username: locals.username,
            date: params.date,
        }
    })

    return {
        journal,
    };
}
