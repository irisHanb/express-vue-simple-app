<template>
  <div class="register wrap">
    <form action>
      <div class="form-field">
        <input type="text" placeholder="아이디를 입력하세요." v-model="id" id="email">
      </div>
      <div class="form-field">
        <input type="password" placeholder="비밀번호를 입력해주세요." v-model="pw" id="password">
      </div>
      <div class="btns">
        <button type="button" @click="onJoin">회원가입</button>
        <button type="button" @click="onLogin">로그인</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: null,
      pw: null
    };
  },
  computed: {},
  created() {
    // console.log("regi>>");
    // this.$http.get("/register").then(res => console.log(res.data));
  },
  methods: {
    // ...mapActions(["join"]),
    onJoin() {
      if (this.id === null || this.pw == null) {
        alert("아이디 패스워드를 입력해주세요.");
        return;
      }

      const user = { id: this.id, pw: this.pw };
      this.$store.dispatch("join", user).then(res => {
        // console.log(res.data);
        this.goHome();
      });
    },
    onLogin() {
      if (this.id === null || this.pw == null) {
        alert("아이디 패스워드를 입력해주세요.");
        return;
      }

      const user = { id: this.id, pw: this.pw };
      this.$store.dispatch("login", user).then(res => {
        this.goHome();
      });
    },
    goHome() {
      console.log("go> home");
      this.$router.push({ name: "home" });
    }
  }
};
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


