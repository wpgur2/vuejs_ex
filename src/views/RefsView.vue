<script>
export default {
  data(){
    return{
      list: [
        'html','css','js'
      ]
    }
  },
     
  mounted() {
    this.$refs.userName.focus()
    console.log(this.$refs.items)
  }
}

</script>
<template>
  <div class="layout">
    <h1>This is an Refs</h1>
    <input ref="userName" />
    <!-- <input type="text" id="userName"> -->
    <ul>
      <li v-for="item in list" ref="items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .layout {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
