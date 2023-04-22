<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function into(){
  router.push("/login")
}

</script>

<template>
  <div class="content">
    <div class="infoButtonF">
      <button @click="into" class="intoButton btn btn-lg btn-warning">进入音乐课堂</button>
    </div>

  </div>
</template>

<style scoped>
.content {
  position: fixed;
  background-image: url(/img/background.png);
  background-size: 100%;
  background-color: black;
  width: 100%;
  height: 100vh;
}

.infoButtonF {
  position: fixed;
  width: 100%;
  bottom: 15%;
}

.intoButton {
  display: block;
  margin: 0 auto;
}
</style>
