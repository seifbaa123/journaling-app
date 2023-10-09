import db from "$lib/server/db"

export async function load() {
    const journals = await db.journal.findMany()

    return {
        journals,
    };
}
