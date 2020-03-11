<script>
	import {fetchPeople} from './services/people'
	export let name;
	let toto;

	fetchPeople().then(response => {
		toto = JSON.stringify(response, null, 2)
	})
</script>

<main>
	<pre>{toto}</pre>
</main>

<style lang="scss" global>
	@import "./scss/reset";
</style>
