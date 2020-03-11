<script>
	import {fetchPeople} from './services/people'

	import PersonCard from './components/PersonCard/PersonCard.svelte'
	import AppBar from './components/AppBar/AppBar.svelte'

	let persons = [];

	fetchPeople().then(response => {
		persons = response;
	})
</script>
<div  class="App">
	<main>
		<header>
			<AppBar />
		</header>
		<div class="card-container">
			{#each persons as person}
				<PersonCard person={person}/>
			{/each}
		</div>
	</main>
</div>

<style lang="scss" global>
	@import "App";
	@import "index";
</style>
