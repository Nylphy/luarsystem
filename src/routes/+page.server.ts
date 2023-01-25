import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const prerender = true;
export const load: PageServerLoad = async () => {
	return {
		produtos: await prisma.produto.findMany()
	};
};
