<template>
  <v-container>
      <v-row class="mt-15">
        <v-col cols=3>
          <v-icon x-large>
            mdi-email
          </v-icon>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              メッセージを送りましょう
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-15">
        <v-col >
          <v-icon x-large>
            mdi-bell
          </v-icon>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              1/21 おじいちゃんの誕生日
              <br>
              2/2 しおりちゃんの節句
            </v-card-text>
          </v-card>
        </v-col>
        <v-col >
          <v-btn icon @click='showFriend'>
            <v-icon x-large>
              mdi-heart
            </v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              メモリー
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

       <v-row class="mt-15">
        <v-col >
          <v-icon x-large>
            mdi-account
          </v-icon>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              プロフィール
            </v-card-text>
          </v-card>
        </v-col>
        <v-col >
          <v-icon x-large>
            mdi-account-plus
          </v-icon>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              家族を招待
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row class="mt-15">
        <v-col >
          <v-icon x-large>
            mdi-cog
          </v-icon>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              設定
            </v-card-text>
          </v-card>
        </v-col>
        <v-col >
          <v-icon x-large>
            mdi-star
          </v-icon>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              みんなのSAKURAの使い方
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    showFriend(){
      this.$router.push({name: 'ShowRequest'})
    }
  }
}
</script>
