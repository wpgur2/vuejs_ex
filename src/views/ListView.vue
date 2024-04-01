<script>
export default{
  data(){
    return{
      parentLangs : 'webs',
      items : [
        {id:1,title:'HTML',desc:'HTML...'},
        {id:2,title:'css',desc:'css...'},
        {id:3,title:'js',desc:'js...'}
      ],
      myObject: {
      title: 'Vue에서 목록을 작성하는 방법',
      author: '홍길동',
      publishedAt: '2016-04-10'
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    }
  },
  computed: {
    evenNumbers() {
      console.log('evenNumbers 실행')
      return this.numbers.filter(n => n % 2 === 0)
    }//numbers가 변경될 경우만 실행
  },
  methods: {
    even(numbers) {
      console.log('even 실행')
      return numbers.filter(number => number % 2 === 0)
    }
  }//data함수 내 어느 값이든 변경이 되면 실행
}
</script>
<template>
  <div class="layout">
    <ul>
      <li v-for="(item,index) in items" :key="item.id">
        {{parentLangs}}:{{index }}-{{ item.title }}
      </li>
      <li v-for="value in myObject" :ket="value.id">
        {{ value }}
      </li>
    </ul>
    <hr>
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <hr>
    <ul>
      <template v-for="item in items">
        <li>{{ item.desc }}</li>
      </template>
    </ul>
    <h2>필터</h2>
    <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>
    <button @click="this.numbers.push(2)">+</button>
    <hr>
    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
    <button @click="sets[0].push(2)">+</button>
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
