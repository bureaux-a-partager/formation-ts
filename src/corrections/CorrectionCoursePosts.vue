<script setup lang="ts">
import {computed} from "vue";
import {useCorrectionPosts} from "./composables/useCorrectionPosts.ts";
import {type Post} from "./interfaces/CorrectionPost.ts";

defineProps<{ title: string }>();

const { posts, getPosts } = useCorrectionPosts();

getPosts()

const orderedPosts = computed<Post[]>(() => [...posts.value].sort((a, b) => a.title.localeCompare(b.title)))
</script>

<template>
  <div>
    <p>{{ title }}</p>

    <ul>
      <li
          v-for="orderedPost in orderedPosts"
          :key="orderedPost.id"
      >
        {{ orderedPost.title }}
      </li>
    </ul>
  </div>
</template>
