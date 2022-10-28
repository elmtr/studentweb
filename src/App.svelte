<script>
	import Router, {push} from 'svelte-spa-router';
	import routes from './routes';

	import {token, info} from './stores';
	import {onMount} from 'svelte';

	onMount(() => {
		token.set(localStorage.getItem('token'))
		info.set(JSON.parse(localStorage.getItem('userInfo')))

		// if (!$info) {
		// 	push("/login")
		// }
		// if (!$token) {
		// 	push("/login/update")
		// }
	})
</script>

<main>
	<Router {routes} />
</main>

<style>
	:root {
		--darkgreen: #054D1B;
		--darkgreen-transparent: rgba(5, 77, 27, 0.6);
		--lightgreen: #38E377;
		--lightgreen-transparent: rgba(56, 227, 119, 0.6);
		--gray: #BDBDBD;
		--black: #303030;
		--white: white;
		--offwhite: #F2F2F2;
		--red: red;
		--yellow: yellow;
		--border-radius: 20px;
		--border: 1.5px solid var(--darkgreen);
		--width: 93%;
		--serif: serif;
		--sans-serif: sans-serif;
		--container: 100%;
	}

	@media screen and (min-width: 576px) {
		:root {
			--container: 80%;
		}
	}
	
	@media screen and (min-width: 768px) {
		:root {
			--container: 60%;
		}
	}
	
	@media screen and (min-width: 992px) {
		:root {
			--container: 50%;
		}
	}
</style>
