<template>
    <div style="margin-top:80px;">
        <div id="grid2"><h4>계정</h4></div>
        <hr id="grid-hr2" style="width:80%">
        <div id="account" class="menu">
            <div><Logout/></div>
            <div><Delete/></div>
            <div><PasswordChange/></div>
        </div>
    </div>
</template>

<script>
import Logout from "../auth/Logout";
import Delete from "../auth/Delete";
import PasswordChange from "../auth/PasswordChange";

export default {
    name: "Profile",
    components: {
        Logout,
        Delete,
        PasswordChange,
    },
    data() {
        return {

        }
    },
    methods: {
    },
}
</script>

<style scoped>
.w3-container {
    transition-delay: 2s; 
}

.profile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>