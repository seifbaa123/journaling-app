import db from "$lib/server/db"

export async function load({ locals }) {
    const year = new Date().getFullYear()
    const journals = await db.journals.findMany({
        where: {
            username: locals.username,
            date: { gte: `${year}-01-01`, lte: `${year}-12-31` },
        }
    })

    return {
        journals,
    };
}
