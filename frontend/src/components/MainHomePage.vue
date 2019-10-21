<template>
    <div>
        <div v-if="data">
            <h1>Login 하셨습니다.</h1>
            <Logout/>
            <Delete/>
        </div>
        <div v-else>
            <h1>Login</h1>
            <Login/>
            <SignUp/>
        </div>
        
    </div>
</template>

<script>
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Logout from './auth/Logout'
import Delete from './auth/Delete'

export default {
    name: 'MainHomePage',
    components: {
        SignUp,
        Login,
        Logout,
        Delete,
    },
    data() {
        return {
            data: ""
        }
    },
    created() {
        this.data = JSON.parse(sessionStorage.getItem('userinfo'))
    },
}
</script>