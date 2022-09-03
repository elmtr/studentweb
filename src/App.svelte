<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

	import {token, info} from './stores';
	import {onMount} from 'svelte';

	onMount(() => {
		token.set(localStorage.getItem('token'))
		info.set(JSON.parse(localStorage.getItem('userInfo')))

		if (!$info) {
			push("/login")
		}
		if (!$token) {
			push("/login/update")
		}
	})
</script>

<main>
	<Router {routes} />
</main>