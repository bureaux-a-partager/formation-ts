import {type Ref, ref} from "vue";
import type {Post} from "../interfaces/CorrectionPost.ts";

interface useCorrectionPosts {
    readonly posts: Ref<Post[]>
    getPosts: () => Promise<void>
}

// TODO
export function useCorrectionPosts(): useCorrectionPosts  {
    const posts = ref<Post[]>([]);

    const getPosts = async (): Promise<void> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des posts')
            }

            posts.value = await response.json();
        } catch (e) {
            posts.value = []
        }
    }

    return {
        posts,
        getPosts,
    }
}