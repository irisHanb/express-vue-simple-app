<template>
  <div class="register wrap">
    <form action>
      <div class="form-field">
        <input type="email" placeholder="이메일 주소를 입력해주세요.">
      </div>
      <div class="form-field">
        <input type="password" placeholder="비밀번호를 입력해주세요.">
      </div>
      <div class="btns">
        <button type="button">회원가입</button>
        <button type="button">로그인</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.register {
  input {
    width: 80%;
    padding: 0.5em 1em;
  }
  .form-field {
    margin-bottom: 0.5em;
  }
  .btns {
    button:first-child {
      margin-right: 1em;
    }
  }
}
</style>


