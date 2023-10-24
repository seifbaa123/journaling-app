import db from "$lib/server/db"

export async function load() {
    const year = new Date().getFullYear()
    const journals = await db.journals.findMany({
        where: {
            date: { gte: `${year}-01-01`, lte: `${year}-12-31` },
        }
    })

    return {
        journals,
    };
}
