<template>
  <div class="register wrap">
    <h2 class="page-title">Register</h2>
    <form action>
      <div class="form-field">
        <input type="text" placeholder="아이디를 입력하세요." v-model="id" id="id" v-validate="'required'">
      </div>
      <div class="form-field">
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          v-model="pw"
          id="pw"
          v-validate="'required'"
        >
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
      this.checkForm();
      this.$store
        .dispatch("join", { userId: this.id, pw: this.pw })
        .then(res => {
          this.goHome();
        });
    },
    onLogin() {
      this.checkForm();
      this.$store
        .dispatch("login", { userId: this.id, pw: this.pw })
        .then(res => {
          this.goHome();
        });
    },
    goHome() {
      this.$router.push({ name: "home" });
    },
    checkForm() {
      if (this.id === null || this.id.length <= 0) {
        alert("아이디 입력해주세요.");
        return;
      }
      if (this.pw === null || this.pw.length <= 0) {
        alert("패스워드를 입력해주세요.");
        return;
      }
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


