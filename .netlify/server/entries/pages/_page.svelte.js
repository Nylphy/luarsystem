import { c as create_ssr_component, d as each, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let produtos;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ produtos } = data);
  return `<div class="${"w-full bg-cyan-500"}"><h1 class="${"text-3xl text-red-500 bg-cyan-500"}">Welcome to SvelteKit</h1></div>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>

<div class="${"grid place-items-center"}"><table class="${"table table-fixed"}">
		<thead><tr><th>Código</th>
				<th>Descrição</th>
				<th>Unid.</th>
				<th>Preço</th></tr></thead>
		<tbody>${each(produtos, (produto) => {
    return `<tr class="${"text-start"}"><td>${escape(produto.Codigo)}</td>
					<td>${escape(produto.Descricao)}</td>
					<td>${escape(produto.Unid)}</td>
					<td>${escape(produto.Preco)}</td>
				</tr>`;
  })}</tbody></table></div>`;
});
export {
  Page as default
};
