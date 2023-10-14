import db from "$lib/server/db"

export async function load({ params }) {
    const journal = await db.journals.findFirst({
        where: {
            date: params.date,
        }
    })

    return {
        journal,
    };
}
