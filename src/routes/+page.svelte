<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ produtos } = data);
</script>

<div class="w-full bg-cyan-500">
	<h1 class="text-3xl text-red-500 bg-cyan-500">Welcome to SvelteKit</h1>
</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

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
			{#each produtos as produto}
				<tr class="text-start">
					<td>{produto.Codigo}</td>
					<td>{produto.Descricao}</td>
					<td>{produto.Unid}</td>
					<td>{produto.Preco}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
