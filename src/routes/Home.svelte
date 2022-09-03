<script>
	
	import {token, info} from '../stores'
	import {push, link} from 'svelte-spa-router'

	if ($token == "") {
		push("/login/update")
	}

	let subjects = $info.subjects

</script>

<main>
	{#if subjects}
		{#each subjects as subject}
			<a href="/student/{subject.id}" use:link>
				{subject.name} 
			</a>
			<br>
		{/each}
	{/if}
</main>
