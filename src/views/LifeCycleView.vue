<script>
export default{
  mounted() {
    console.log(`컴포넌트가 마운트 됐습니다.`)
  },
  beforeMount() {
    console.log(`마운트이전.`)
  },
  beforeUpdate(){
    console.log(`업데이트시작.`)
  },
  updated(){
    console.log(`업데이트완료.`)
  },
  data(){
    return{
      count:0
    }
  }
}


</script>
<template>
  {{ console.log('템플릿 컴파일 시작') }}
  <div class="about">
    <h1>This is an LifeCycle</h1>
    <button @click="count++">+</button>
    <div id="counter">{{ count }}</div>
  </div>
  {{ console.log('템플릿 컴파일 완료') }}
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
