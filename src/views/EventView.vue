<script>
export default{
  data() {
    return {
      count: 0,
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      // `this`는 메서드가 활성화된 현재 인스턴스를 가리킵니다.
      alert(`안녕 ${this.name}!`)
      // 'event'는 네이티브 DOM 이벤트 객체입니다.
      if (event) {
        alert(event.target.tagName)
      }
    },
    say(message) {
    alert(message)
  },
    warn(message, event) {
      // 이제 네이티브 이벤트 객체에 접근할 수 있습니다.
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    doThis(){
      //.stop
      alert('link 전파 차단');
    },
    onSubmit(){
      //.onSubmit
      alert('폼 제출을 막았다');
    },
    doThat(){
      //.stop.prevent
      alert('기본속성차단,링크 전파 차단');
    },
    boxClick(){
      alert('box클릭');
    },
    spanClick(){
      alert('span클릭');
    },
    submit(){
      alert('enter키가 입력');
    },
    onPageDown(){
      alert('pageDown키가 입력');
    }
  }
}
</script>
<template>
  <div class="layout">
    <h1>This is an Event Handling page</h1>
    <h2>인라인 핸들러</h2>
    <button @click="count++">1 추가</button>
    <p>숫자 값은: {{ count }}</p>

    <h2>메서드 핸들러</h2>
    <button @click="greet">환영하기</button>

    <h2>인라인 핸들러에서 메서드 호출</h2>
    <button @click="say('안녕')">안녕이라고 말하기</button>
    <button @click="say('잘가')">잘가라고 말하기</button>

    <h2>인라인 핸들러에서 이벤트 객체 접근</h2>
    <!-- 특수한 키워드인 $event 사용 -->
    <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
      제출하기
    </button>

    <!-- 인라인 화살표 함수 사용 -->
    <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
      제출하기
    </button>

    <h2>이벤트 수식어</h2>
    <!-- 클릭 이벤트 부모에게 전파가 중지됩니다. -->
    <a @click.stop="doThis" href="https://www.naver.com" target="_blank">dothis</a>

    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
    <form @submit.prevent="onSubmit" action="https://www.naver.com">
      <button>제출</button>
    </form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <a @click.stop.prevent="doThat" href="https://www.naver.com" target="_blank">
      dothat
    </a>

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <form @submit.prevent action="https://www.naver.com">
      <button>제출</button>
    </form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
    <div @click="boxClick" class="box">
      <span @click="spanClick" class="box">
        click
      </span>
    </div>
    <div @click.self="boxClick" class="box">
      <span @click.self="spanClick" class="box">  
        click
      </span>
    </div>

    <h2>입력키 수식어</h2>
    <input @keyup.enter="submit" />
    <input @keyup.page-down="onPageDown" />
  </div>
</template>

<style>
.box{
  border: 1px solid;
  padding: 20px;
  display: inline-block;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
