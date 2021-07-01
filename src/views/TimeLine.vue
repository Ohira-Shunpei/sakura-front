<template>
    <v-container >
       <v-row justify="space-around">
        <v-card-text>
          <div class="font-weight-bold">
            2021
          </div>

          <v-timeline
            align-top
            :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-timeline-item
              v-for="(message) in messages"
              :key="message.time"
              :color="message.color"
              small
            >
                <!-- <v-card @click='showMessage'> -->
                  <v-card>
                    <div>
                    <v-card-title class="title">
                        <!-- <v-col cols='2'>
                            <v-avatar> 
                                <img
                                :src="users[index].avatar + railsURL"
                                style="object-fit: cover;"
                                >
                            </v-avatar> 
                        </v-col> -->
                            {{ message.time }}
                    </v-card-title>
                    <v-card-text style="white-space:pre-wrap">
                        {{ message.title }}
                    </v-card-text>
                    <v-card-actions>
                      <v-btn @click='showContent(message)'>
                        開く
                      </v-btn>
                      <v-btn @click='deleteMessage(message)'>
                        削除
                      </v-btn>
                    </v-card-actions>
                        <v-divider/>
                    </div>
                </v-card>
              
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      
    </v-row>
    <v-btn
        icon
        v-on:click="lookComment(), dialog = false"
    >
        <v-icon> mdi-star</v-icon>
    </v-btn>
    </v-container>
</template>


<script>
var japaneseTime = ''

import axios from '@/api/index'

  export default {
    data: () => ({
      messages: [
       
      ],
      dialog: false,
      railsURL: "http://localhost:3000",
      users: []
    
    }),
    methods: {
        saveComment(){
            console.log('aaaaa')
           
            console.log(this.messages)
        },
        lookComment(){
            console.log(this.messages)
        },
        showContent(m){
          console.log(m.id)
          this.$router.push({
            name: 'MessageContent',
            params: {message_id: m.id}
          })
        },
        deleteMessage(m){
          axios().
          delete('/messages/' + m.id,
          {
              headers: {
                  'access-token': localStorage.getItem('access-token'),
                  uid: localStorage.getItem('uid'),
                  client: localStorage.getItem('client'),
              },
          },
          ).then(response => {
            console.log(response) 
            this.$router.go({path: this.$router.currentRoute.path, force: true})
          }).catch(e => {
            console.log(e)
          })
        }
    },
    async mounted() {
    await axios()
      .get('/users/' + localStorage.getItem('id') + '/messages',{
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
        },
      },
      )
      .then(response => (
        console.log(response),
        this.messages = response.data.messages,
        this.messages.forEach(message =>
          console.log((message.time),
          japaneseTime = new Date(message.time * 1000),
          message.time = japaneseTime.getFullYear()
          + '/' + ('0' + (japaneseTime.getMonth() + 1)).slice(-2)
          + '/' + ('0' + japaneseTime.getDate()).slice(-2)
          + ' ' + ('0' + japaneseTime.getHours()).slice(-2)
          + ':' + ('0' + japaneseTime.getMinutes()).slice(-2)
        )
        ),
        this.users = response.data.users,
        console.log(this.users)
      ));
    
    await axios()
      .get('users',{
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
        },
      }).then(response=> (
        console.log(response)
      ))    
    }
  }
</script>
