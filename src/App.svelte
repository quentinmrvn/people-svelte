<script>
	import {fetchPeople} from './services/people'

	import PersonCard from './components/PersonCard/PersonCard.svelte'
	import AppBar from './components/AppBar/AppBar.svelte'
	import SearchInput from './components/SearchInput/SearchInput.svelte'

	let persons = [];
	let search = "";

	$: filterPersons = persons.filter(person => {
		const re = new RegExp(search, 'i');
		return person.firstname.match(re) || person.lastname.match(re);
	});

	fetchPeople().then(response => {
		persons = response;
	});

	const onInput = (e) => {
		search = e.currentTarget.value;
	};

</script>
<div  class="App">
	<header>
		<AppBar />
	</header>
	<main>
		<div class="card-container">
			{#each filterPersons as person}
				<PersonCard person={person}/>
			{/each}
		</div>
		<div class="control-container">
			<SearchInput
					id="search"
					label="search by name"
					value={search}
					on:input={onInput}
			/>
		</div>
	</main>
</div>

<style lang="scss" global>
	@import "App";
	@import "index";
</style>
