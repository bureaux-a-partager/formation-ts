import {ref} from "vue";

// TODO
export function usePosts() {
    const posts = ref([]);

    const getPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des posts')
            }

            posts.value = await response.json();
        } catch (e) {
        }

        posts.value = []
    }

    return {
        posts,
        getPosts,
    }
}