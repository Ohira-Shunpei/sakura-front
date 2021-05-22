<template>
  <v-container fluid fill-height class="about">

    <v-row>
    <AppBackgroundHolder :head="head"/>
    </v-row>
      <v-row>
        <v-combobox
          v-model='select'
          item-text='name'
          item-value="id"
          :items="adress"
          label="宛先"
          >
        </v-combobox>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model.number="year"
            label="年"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model.number="month"
            label="月"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model.number="day"
            label="日"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model.number="hour"
            label="時"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model.number="minute"
            label="分"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-text-field
          v-model="title"
          label="タイトル"
        ></v-text-field>
      </v-row>

      <v-row>
          <v-container fluid>
            <v-textarea
              v-model='body'
              counter
              label="メッセージ"
              height="300"
              :value="value"
            ></v-textarea>
          </v-container>
      </v-row>
   
      <v-row>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text v-on:click="sendMessage">送信する</v-btn>
        <!-- <span v-if="suceess">送信成功</span> -->
      </v-card-actions> 
      <!-- /送信ボタン -->
      </v-row>

      <v-row>
        {{message}}
      </v-row>
  </v-container>
</template>


<script>
import AppBackgroundHolder from '../components/AppBackgroundHolder.vue'
import axios from '@/api/index'
import { mapState } from 'vuex'


export default {
  data () {
    return {
      head: 'メッセージ送信',
      // rules: [v => v.length <= 25 || 'Max 25 characters'],
      value: 'Hello',
      item_minutes: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      adress: [],
      select: [],
      to: [],
      body: [],
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
      time: [],
      title: [],
      message: {},
      user: ''
    }
  },
  components: {
    AppBackgroundHolder,
  },
  computed: {
    ...mapState(['user_token']),
  },
  mounted() {
    axios()
      .get('/users',{
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      },
      console.log(this.user_token)
      )
      .then(response => (this.adress = response.data , console.log(response)))
  },
  methods: {
      sendMessage(){
      this.message.to = this.select.name
      this.adress.forEach(person => {
      if (person.email == localStorage.getItem("uid")) {
        this.message.from = person.name
      }
    });
      this.message.title = this.title
      this.message.body = this.body
      var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute)
      this.message.time = date.getTime()
      console.log(new Date())
      axios().post('/messages', this.message, {
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      }
      )
      this.$store.commit('setMessage', {
          status: true,
          message: 'メッセージを送信しました'
        })
      
      this.$router.push({name: 'Home'})
      return this.message
    },
  },
}
</script>