<template>
  <v-container fluid fill-height class="login">
  <v-row>
    <v-container>
      <img src="../assets/img/sakura-card.png" width="300" height="300">
    </v-container>
  </v-row>

  <v-form recontainerf="checkForm">
    <v-row>
      <v-icon>
        mdi-account
      </v-icon>
      <v-col>
        <v-text-field
        v-model="lastname"
        label="性"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
        v-model="firstname"
        label="名"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-icon>
        mdi-email
      </v-icon>
      <v-col>
        <v-text-field
        v-model="email"
        label="メールアドレス"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>    
      <v-icon>
        mdi-key
      </v-icon>
      <v-col>
        <v-text-field
        v-model="password"
        label="パスワード"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn class="mr-4" @click="signUp">新規登録</v-btn>
        <v-btn class="mr-4" @click="signIn">ログイン</v-btn>
      </v-col>
    </v-row>
  </v-form>
  </v-container>
</template>


<script>
import axios from '@/api/index'

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      name: "",
      email: "",
      password: "",
      title: "",
      content: "",
      tasks: [],
      comment: "",
      posts: [],
      user: {},
    };
  },
  methods: {
    async signUp() {
      this.name =this.lastname + " " +this.firstname
      console.log(this.name)
      await axios()
        .post("/auth", {
          email: this.email,
          password: this.password,
          name: this.name
        })
        .then((response) => {
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          localStorage.setItem("id", response.data.data["id"]);
          this.user = {
            uid: response.headers["uid"],
            "access-token": response.headers["access-token"],
            client: response.headers["client"],
            id: response.data.data["id"],
          },
        
          console.log(this.user),
          this.$store.dispatch('userLogin', this.user)
          this.$store.commit('setMessage', {
          status: false,
        })
        }
        );
      this.id = localStorage.getItem('id')
      console.log(this.id)
      await axios().put('/users/' + this.id, {
        email: this.email,
        password: this.password,
        name: this.name
      },
      {
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      }
      )
      if (this.email == localStorage.getItem("uid")){
            this.$router.push({name: 'Home'})
      }
    },
    signIn() {
      console.log(this.email);
      console.log(this.password);
      axios()
        .post("/auth/sign_in", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          this.user = {
            uid: response.headers["uid"],
            "access-token": response.headers["access-token"],
            client: response.headers["client"],
          },
          this.$store.dispatch('userLogin', this.user)
          this.$store.commit('setMessage', {
          status: false,
        })
          if (this.email == response.headers["uid"]){
            this.$router.push({name: 'Home'})
          }
        });    
    },
    
  },
};
</script>

<style  lang="scss" scoped>
.login {
  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
  text-transform: uppercase;
  display: block;
  font-size: 92px;
  color: #f1ebe5;
  text-shadow: 0 8px 9px #c4b59d, 0px -2px 1px #fff;
  font-weight: bold;
  letter-spacing: -4px;
  text-align: center;
  position: absolute;
  padding: 300px 300px;
  top: 20%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 20px;
}
</style>
