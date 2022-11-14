import {writable} from 'svelte/store';

export const d = new Date();

const days = [7, 1, 2, 3, 4, 5, 6]

// timetable stuff
export const timetable = writable({});
export const school = writable({});

export const interval = writable(1)

export const today = writable(days[d.getDay()])
export const now = writable(d.getHours() + d.getMinutes() / 100)

// export const today = writable(1)
// export const now = writable(9.29)

// signup && login
export const passcode = writable("")
export const lastName = writable("")
export const firstName = writable("")

export const phoneNumber = writable("")

export const loading = writable(false)
export const errorMessage = writable("")
export const warningMessage = writable("")

export const loginTime = writable()

// authentication and authorization
export const token = writable("");
export const info = writable("");

// administrative
export const subjects = writable([]);
export const grades = writable({});

// core
export const marks = writable({});
export const average = writable(0);
export const draftMarks = writable({});
export const truancies = writable({});
export const pointsValue = writable(0)

// -- dialog boxes

// update
export const showUpdate = writable(true);

// truancy
export const showMotivateTruancy = writable(false);
export const showAddTruancy = writable(false);
export const selectedTruancy = writable({});

// mark
export const showAddMark = writable(false);

// draftMark
export const showAddDraftMark = writable(false);
export const showModifyDraftMark = writable(false);
export const showDefinitivateDraftMark = writable(false);
export const selectedDraftMark = writable({})
