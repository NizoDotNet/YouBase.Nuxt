import {defineStore} from "pinia";
import type {UserInterface} from "~/interfaces/userInterface";

export  const userStore = defineStore('user', () =>{
    const userObject: UserInterface = {
        id: "",
        email: "",
        userName: "",
        nickname: "",
    }
    const user = reactive(userObject)
    const isAuthenticated = ref(false)

    async function loginUser(loginData: object) {
        try {
            const res = await $fetch('/api/auth/login', {
                method: 'POST',
                body: loginData,
                credentials: 'include'
            });
            console.log(res)
            const getUser = await $fetch('/api/users')
            console.log(getUser)
        } catch (e) {
            console.log(e)
        }
    }
    return { user, loginUser, isAuthenticated }
});