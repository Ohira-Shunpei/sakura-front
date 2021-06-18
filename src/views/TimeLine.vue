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
              v-for="message in messages"
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
                                :src="message.avator"
                                style="object-fit: cover;"
                                >
                            </v-avatar> 
                        </v-col> -->
                        <v-col cols = '8'>
                            {{ message.time }}
                        </v-col>
                        <v-col cols='2'>
                             <v-btn
                                icon
                                @click="dialog = true"
                            >
                            <v-icon> mdi-book </v-icon>
                            </v-btn>
                            <v-dialog
                                :retain-focus="false"
                                v-model="dialog"
                                persistent
                                max-width="600px"
                                >
                                <v-card>
                                    <v-card-title>
                                    <span class="headline">コメントする</span>
                                    </v-card-title>
                                    <v-card-text>
                                    <v-container>
                                      
                                        <v-textarea
                                        required
                                        v-model='message.comment'
                                        ></v-textarea>
                                       
                                    </v-container>
                               
                                    </v-card-text>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="dialog = false"
                                    >
                                        Close
                                    </v-btn>
                                    <v-btn
                                        icon
                                        v-on:click="saveComment(), dialog = false"
                                    >
                                        <v-icon> mdi-check</v-icon>
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                           
                        </v-col>
                    </v-card-title>
                    <v-card-text style="white-space:pre-wrap">
                        {{ message.title }}
                    </v-card-text>
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
    
    }),
    methods: {
        saveComment(){
            console.log('aaaaa')
           
            console.log(this.messages)
        },
        lookComment(){
            console.log(this.messages)
        },
        showMessage(){
          this.$router.push({name: 'MessageContent'})
        }
    },
    mounted() {
    axios()
      .get('/users/' + localStorage.getItem('id') + '/messages',{
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
        },
      },
      )
      .then(response => (
        this.messages = response.data,
        console.log(this.messages),
        console.log(this.messages.length),
        this.messages.forEach(message =>
          console.log((message.time),
          japaneseTime = new Date(message.time * 1000),
          message.time = japaneseTime.getFullYear()
          + '/' + ('0' + (japaneseTime.getMonth() + 1)).slice(-2)
          + '/' + ('0' + japaneseTime.getDate()).slice(-2)
          + ' ' + ('0' + japaneseTime.getHours()).slice(-2)
          + ':' + ('0' + japaneseTime.getMinutes()).slice(-2)
         
        )
        )
      ))
    }
  }
</script>
