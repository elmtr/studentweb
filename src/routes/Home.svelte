<script>
	
	import {token, today, interval} from '../stores'
	import {push, link} from 'svelte-spa-router'
	import {fetchSchool, fetchTimetable, fetchSubjects} from '../fetch/fetch'

	// kiui
	import CurrentPeriod from '../kiui/Timetable/CurrentPeriod.svelte'
	import NextPeriod from '../kiui/Timetable/NextPeriod.svelte'
  import Subject from '../kiui/Subject.svelte'
  import NavBar from '../kiui/NavBar.svelte'
  import Loader from '../kiui/PopUps/Loader.svelte'

	if ($token == "") {
		push("/login/update")
	}

</script>

<main>
	<Loader />
	{#if $token}
		<!-- getting interval -->
		{#await fetchSchool($token) then schoolData}
		
			<!-- navbar -->
			<NavBar location="home" />

			<!-- getting timetable (for widget) -->
			{#await fetchTimetable($token) then data}
				{#if data[$today]}
					{#if data[$today][$interval]}
						<CurrentPeriod user="student"/>
					{/if}
					<br>
					{#if data[$today][$interval + 1]}
						<NextPeriod user="student" />
					{/if}
				{/if}

				<div id="heading">Clasele mele</div>

				{#await fetchSubjects($token) then data}
					{#each data as subject}
						<Subject {subject} />
					{/each}
				{/await}
				<br><br><br><br><br>
			{/await}
		{/await}	
	{/if}
</main>

<style scoped>
	#heading {
		font-size: 1.5em;
		color: var(--black);
		margin-left: 30px;
		margin-top: 15px;
		margin-bottom: 5px;
		font-weight: 600;
		font-family: var(--sans-serif);
	}
</style>
