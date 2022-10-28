<script>
	
	import {token, today, now, subjects, grades, info} from '../stores'
	import {push, link} from 'svelte-spa-router'
	import {fetchSchool, fetchTimetable, fetchSubjects} from '../fetch/fetch'
	import { findInterval } from '../utils/utils'
	import { writable } from 'svelte/store'

	// kiui
	import CurrentPeriod from '../kiui/Timetable/CurrentPeriod.svelte'
	import NextPeriod from '../kiui/Timetable/NextPeriod.svelte'
  import Subject from '../kiui/Subject.svelte'
  import NavBar from '../kiui/NavBar.svelte'
	
	if ($token == "") {
		push("/login/update")
	}

	let interval = writable(1)

	function setInterval(school) {
		interval.set(findInterval(school.intervals, $now))
		return ''
	}

</script>

<main>
	{#if $token}
		<!-- getting interval -->
		{#await fetchSchool($token) then school}
			{setInterval(school)}
		
			<!-- navbar -->
			<NavBar location="home" />

			<div id="greeting">
				Bună, {$info.firstName}! 👋
			</div>

			<!-- getting timetable (for widget) -->
			{#await fetchTimetable($token) then timetable}
				{#if timetable[$today]}
					{#if timetable[$today][$interval]}
						<CurrentPeriod user="student" timetable={timetable} day={$today} interval={$interval}/>
					{/if}
					<br>
					{#if timetable[$today][$interval + 1]}
						<NextPeriod user="student" timetable={timetable} day={$today} interval={$interval + 1} />
					{/if}
				{/if}

				<div id="heading">Clasele mele</div>

				{#await fetchSubjects($token) then data}
					{#each data as subject}
						<Subject {subject} />
					{/each}
				{/await}
			{/await}
		{/await}	
	{/if}
</main>

<style scoped>
	#greeting {
		font-size: 1.8em;
		color: var(--black);
		margin-left: 25px;
		margin-top: 30px;
		margin-bottom: 20px;
		font-weight: 600;
		font-family: var(--sans-serif);
	}

	#heading {
		font-size: 1.5em;
		color: var(--black);
		margin-left: 30px;
		margin-top: 30px;
		margin-bottom: 5px;
		font-weight: 600;
		font-family: var(--sans-serif);
	}
</style>
