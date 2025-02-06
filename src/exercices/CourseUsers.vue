<script setup lang="ts">
import {ref, computed} from "vue";
import {useUsers} from "./composables/useUsers.ts";

interface CourseProps {
  title: string,
  authorName?: string,
}

defineProps<CourseProps>();

const isLoading = ref<boolean>(false);
const textIsLoading = computed<string>(() => isLoading.value ? 'En cours' : 'Terminé');


const { users, getUsers } = useUsers()

getUsers()
</script>

<template>
    <div>
      <p>{{ title }}</p>

      <span> Chargement {{ textIsLoading }}</span>

      <span v-if="isLoading">{{ textIsLoading }}</span>

      <ul v-else>
        <li
            v-for="user in users"
            :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>
    </div>
</template>
