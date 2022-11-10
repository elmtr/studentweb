<script>
	import Router, {push} from 'svelte-spa-router';
	import routes from './routes';

	import {token, info, now} from './stores';
	import {onMount} from 'svelte';

	let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

	onMount(() => {
		token.set(localStorage.getItem('token'))
		info.set(JSON.parse(localStorage.getItem('info')))

		localStorage.removeItem("userInfo")

		push("/welcome")
	})

	// updating time
	function updateTime() { 
		let d = new Date()
		$now = (d.getHours() + d.getMinutes() / 100).toFixed(2)
	}
	setInterval(updateTime, 60000)
</script>

<main>
	{#if !mobile}
		<div id="block">
			<div>:((( 
			<br><br> din păcate, va trebui sa folosești un telefon</div>
		</div>
	{/if}
	<div style="width: var(--container); margin: auto;">
		<Router {routes} />
	</div>
</main>

<style>
	:root {
		--darkgreen: #054D1B;
		--darkgreen-filter: invert(21%) sepia(18%) saturate(2168%) hue-rotate(87deg) brightness(98%) contrast(97%);
		--darkgreen-transparent: rgba(5, 77, 27, 0.6);
		--lightgreen: #38E377;
		--lightgreen-filter: invert(81%) sepia(13%) saturate(2385%) hue-rotate(80deg) brightness(94%) contrast(89%);
		--lightgreen-transparent: rgba(56, 227, 119, 0.6);
		--gray: #BDBDBD;
		--black: #303030;
		--white: white;
		--white-filter: invert(100%) sepia(37%) saturate(0%) hue-rotate(232deg) brightness(105%) contrast(107%);
		--offwhite: #F2F2F2;
		--red: red;
		--red-filter: invert(13%) sepia(96%) saturate(7497%) hue-rotate(1deg) brightness(101%) contrast(112%);
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

	#block {
		z-index: 10;
		background: var(--offwhite);
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
	}

	#block div {
		width: 50%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--darkgreen);
		font-family: var(--sans-serif);
		text-align: center;
	}
</style>
