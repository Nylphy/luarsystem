<script lang="ts">
	import type { PageData } from './$types';
	import Fuse from 'fuse.js';

	export let data: PageData;
	$: ({ produtos } = data);

	// fuse options, check https://fusejs.io/
	export let fuseShouldSort = true;
	export let fuseThreshold = 0; //0.6
	export let fuseLocation = 0;
	export let fuseDistance = 0; //90

	let fuseOptions = {
		shouldSort: fuseShouldSort,
		threshold: fuseThreshold,
		location: fuseLocation,
		distance: fuseDistance,
		maxPatternLength: 32,
		minMatchCharLength: 1,
		keys: ['Codigo', 'Descricao']
	};

	let search = '';
	let filteredItems: any;

	$: if (!search) {
		filteredItems = produtos;
		console.log('not found search');
	} else {
		let fuse = new Fuse(produtos, fuseOptions);
		filteredItems = fuse.search(search);
		console.log('searching');
	}
</script>

<div class="w-full bg-cyan-500">
	<h1 class="text-3xl text-red-500 bg-cyan-500">Welcome to SvelteKit</h1>
</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<input bind:value={search} />
<div class="grid place-items-center">
	<table class="table table-fixed">
		<!-- head -->
		<thead>
			<tr>
				<th>Código</th>
				<th>Descrição</th>
				<th>Unid.</th>
				<th>Preço</th>
			</tr>
		</thead>
		<tbody>
			{#if search}
				{#each filteredItems as produto}
					<tr class="text-start">
						<td>{produto.item.Codigo}</td>
						<td>{produto.item.Descricao}</td>
						<td>{produto.item.Unid}</td>
						<td>{produto.item.Preco}</td>
					</tr>
				{/each}
			{/if}
			{#if !search}
				{#each filteredItems as produto}
					<tr class="text-start">
						<td>{produto.Codigo}</td>
						<td>{produto.Descricao}</td>
						<td>{produto.Unid}</td>
						<td>{produto.Preco}</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>
