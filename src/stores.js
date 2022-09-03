import {writable} from 'svelte/store';

export const token = writable("");
export const info = writable("");
export const truancies = writable([]);
export const draftMarks = writable([])