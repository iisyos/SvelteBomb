<script context="module" lang="ts">
    import type { LoadInput } from '@sveltejs/kit'
    export async function load({ fetch, params }:LoadInput) {
            // loadのInputのparamsでslugを取得することができる。
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
        return {
            props: {
                post: response.ok && (await response.json())
            }
        };
    }
    </script>
    
    <script lang="ts">
        import type { PostJson } from '../../../types'
        export let post:PostJson;    
    </script>
    
    
    <div class="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>