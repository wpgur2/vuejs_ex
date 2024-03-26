<script setup>
const rawHtml = '<a href="">Link</a>'
const pid=10;
const isButtonDisabled=true;
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
const number=20;
const ok=false;
const message='안녕하세요'
const id=30;

const url ="naver.com";
const attributeName="href";

const sayHello=()=>{
  alert('안녕');
}

const items = [
  {id:0,title:'html'},
  {id:1,title:'css'},
  {id:2,title:'js'}
]

const onSubmit = ()=>{
  alert('제출되었습니다');
}
</script>
<template>
  <div class="layout">
    <h1>This is an about page</h1>
    <hr>
    <p>{{rawHtml}}</p>
    <p><span v-html="rawHtml"></span></p>
    <hr>
    <h2>속성바인딩</h2>
    <div v-bind:id="pid"></div>
    <div :id="pid"></div>
    <div id="pid"></div>
    <h2>불리언바인딩</h2>
    <button :disabled="isButtonDisabled">버튼</button>
    <button :disabled="!isButtonDisabled">버튼</button>
    <hr>
    <h2>여러속성바인드</h2>
    <div v-bind="objectOfAttrs"></div>
    <h2>javascript ex</h2>
    {{ number + 1 }}
    {{ ok ? '예' : '아니오' }}
    {{ message.split('').reverse().join('') }}
    <div :id="`list-${id}`"></div>
    <hr>
    <h2>함수호출</h2>
    <!--<span :tilte="sayHello('안녕')"></span>-->
  
    <a v-bind:href="url">네이버</a>
    <a :href="url">네이버</a>
    <a v-bind:[attributeName]="url"> ... </a>
    <div v-for="item in items" :key="item.id">
      {{ item.title }}
    </div>

    <h2>v-on</h2>
    <div>
      <button type="button" v-on:click="sayHello('안녕')">버튼</button>
      <button type="button" @click="sayHello('안녕')">버튼</button>
      <button type="button" @mouseover="sayHello('안녕')">버튼</button>
    </div>
    <form action="" @submit.prevent="onSubmit">
      <button>제출</button>
    </form>
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
