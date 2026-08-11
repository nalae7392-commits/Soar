// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'DM Mono',
			cssVariable: '--font-mono',
			weights: [300, 400],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['D2Coding', 'Nanum Gothic Coding', 'monospace'],
		},
	],
});
