<script context="module" lang="ts">
    import type { LoadInput } from '@sveltejs/kit'
    // Input
    export async function load({ fetch }:LoadInput) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return {
		props: {
			posts: response.ok && (await response.json())
		}
	};
    }
</script>

<script lang="ts">
    import type { PostJson } from '../../types'
    export let posts:PostJson[];    
</script>

<a href="/about">------</a >

<ul class="post-list">
    {#each posts as post}
        <!-- <-- 詳細ページへのリンク --> -->
        <li><a href={`posts/${post.id}`} class="post-link">{post.title}</a></li>
    {/each}
</ul>
