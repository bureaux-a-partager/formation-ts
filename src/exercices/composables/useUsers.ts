import {type Ref, ref} from "vue";
import type {User} from "../interfaces/User.ts";

interface useUsers {
    readonly users: Ref<User[]>,
    getUsers: ()  => Promise<void>,
}

export function useUsers(): useUsers {
    const users = ref<User[]>([]);

    const getUsers = async (): Promise<void> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des utilisateurs')
            }

            users.value = await response.json();
        } catch (e) {
            users.value = [];
        }
    }

    return {
        users,
        getUsers,
    }
}