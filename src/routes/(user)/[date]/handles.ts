import { goto, invalidateAll } from "$app/navigation";
import { lang } from "$lib/store";
import type { Journals } from "@prisma/client";
import { get } from "svelte/store";

export async function handleSubmit(journal: Journals, isJournalExist: boolean) {
    if (isJournalExist) {
        fetch(`/api/journals/${journal.date}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(journal)
        });
    } else {
        isJournalExist = true;
        fetch(`/api/journals/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(journal)
        });
    }

    invalidateAll().then(() => goto('/'));
}

export function handleRemove(journal: Journals) {
    if (confirm(get(lang).removeThisJournal)) {
        fetch(`/api/journals/${journal.date}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        goto('/');
    }
}
