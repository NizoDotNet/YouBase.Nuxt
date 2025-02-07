import {defineStore} from "pinia";
import type {UserInterface} from "~/interfaces/userInterface";
import router from "#app/plugins/router";

export  const userStore = defineStore('user', () =>{

    const userObject = ref<UserInterface>();
    const user = reactive(userObject);
    const isAuthenticated = ref(false);
    const router = useRouter()
    const isLoading = ref(false)

    async function loginUser(loginData: object) {
        try {
            await $fetch('/api/auth/login', {
                method: 'POST',
                body: loginData,
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });
            await getUser()
            await router.push('/');
        } catch (e) {
            console.log(e)
        }
    }

    async function registerUser(registerData: object) {
        try {
            isLoading.value = true
            await $fetch('/api/auth/register', {
                method: 'POST',
                body: registerData,
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });

            await router.push('/auth/login');
        } catch (e) {
            console.log(e)
        } finally {
            isLoading.value = false
        }
    }

     async function refreshToken() {
         const {data, error} = await useFetch('/api/auth/refresh', {
             method: 'GET',
             server: false,
             credentials: "include"
         });
         if(!error.value) {
             window.location.reload()
         }

     }
    async function getUser() {
        try {
            isLoading.value = true;
            const data = await $fetch<UserInterface>('/api/users', {
                method: 'GET',
            })
            userObject.value = {...data}
            isAuthenticated.value = true;
        } catch (e) {
            console.log(e)
            await refreshToken()
        } finally {
            isLoading.value = false;
        }

    }
    async function logOut() {
        try {
            await $fetch<UserInterface>('/api/auth/logout', {
                method: 'GET',
            })
            isAuthenticated.value = false;
            userObject.value = undefined;
            window.location.reload()
        } catch (e) {
            console.log(e)
        }
    }
    return { user, loginUser, isAuthenticated, getUser, logOut, isLoading, registerUser }
});