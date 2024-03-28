<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      fistName :'John',
      lastName :'Doe'
    }
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킵니다.
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    fullName:{
      get(){
        return this.fistName + ' ' + this.lastName
      },
      set(newValue){
        [this.fistName, this.lastName] = newValue.split(' ');
      }
    }
  }
}
</script>
<template>
  <p>책을 가지고 있다:</p>
  <span>{{publishedBooksMessage }}</span>
  <hr>
  <div>name: {{this.fullName}}</div> <!--get 실행-->
  <div>name: {{this.fullName='길동 홍'}}</div>
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
