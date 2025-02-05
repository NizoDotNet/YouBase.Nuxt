import {defineStore} from "pinia";
import type {UserInterface} from "~/interfaces/userInterface";

export  const userStore = defineStore('user', () =>{
    const userObject = ref({
        id: "",
        email: "",
        userName: "",
        nickname: "",
    });
    const user = reactive(userObject);
    const isAuthenticated = ref(false);

    async function loginUser(loginData: object) {
        try {
            const res = await $fetch('/api/auth/login', {
                method: 'POST',
                body: loginData,
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });
            await getUser()
        } catch (e) {
            console.log(e)
        }
    }

    async function getUser() {
        try {
            const user = await $fetch<UserInterface>('/api/users', {
                method: 'GET',

            })
            if(user !== undefined) {
                isAuthenticated.value = true;
                userObject.value = {...user};
            }
        } catch (e) {
            console.log(e)
        }

    }
    async function logOut() {
        try {
            await $fetch<UserInterface>('/api/auth/logout', {
                method: 'GET',
            })
            isAuthenticated.value = false;
            userObject.value = {
                id: "",
                email: "",
                userName: "",
                nickname: "",
            };
        } catch (e) {
            console.log(e)
        }
    }
    return { user, loginUser, isAuthenticated, getUser, logOut }
});