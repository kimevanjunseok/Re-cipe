<template>
  <div>
    <div @click="move" class="right" id="door"></div>
  </div>
</template>
<script>

export default {
    name: 'Ref',
    data() {
        return {
            height: 0,
            width: 0,
        }
    },
    mounted() {
        this.height = window.innerHeight
        this.width = window.innerWidth
        document.getElementById("door").style.height = this.height + 'px'
        document.getElementById("door").style.width = this.width + 'px'
        document.getElementById("door").style.backgroundSize  = this.width + 'px' + " "  + this.height + 'px'
    },
    methods :{
        move: function () {
            document.querySelector(".right").addClass('right'+"-DoorOpen");
            setTimeout(() => {
                this.$router.push("/Main")
            }, 800)
        }
      },
}
</script>
<style scoped>
@-webkit-keyframes right-DoorOpen {
0% {
    -webkit-transform: translate(0px, 0px); }

100% {
    -webkit-transform: translate(-100%, 0px); } }

#door {
    float: left;
    overflow: hidden;
    background: url("../assets/ref_ori.png");
    background-repeat: no-repeat;
    background-position: center top;
    position: absolute;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    animation-duration: 2s;
    z-index: 10;
}

.right-DoorOpen {
    -webkit-animation-name: right-DoorOpen;
    animation-name: right-DoorOpen;
}

</style>
