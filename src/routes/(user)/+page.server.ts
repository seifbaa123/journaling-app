import db from "$lib/server/db"

export async function load({ locals }) {
    const journals = await db.journals.findMany({ where: { username: locals.username } })

    return {
        journals,
    };
}
