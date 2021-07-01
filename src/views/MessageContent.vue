<template>
  <v-container>
     <v-row class='mt-5'>
        
      </v-row>

    <v-row justify="center" class='m'>
      <v-col cols="2">
        <v-avatar size='100'>
            <img src="~@/assets/icon/cat.jpg">
        </v-avatar>
      </v-col>
      <v-col cols="5">
        <div class='text-h4'>
            {{message.title}}
        </div>
        <v-row>
            {{message.created_at}}
        </v-row>
        </v-col>
    </v-row>
     <v-img
        v-bind:src="railsURL + message.image_url"
        width="180" height="180"
    >
    </v-img>
    <v-row>
        <v-container fluid>
            {{message.body}}
        </v-container>
    </v-row>
  </v-container>
</template>

<script>
import axios from '@/api/index'
var japaneseTime = ''
var japaneseTime2 = ''

export default {
    // props: {
    //     message_id: String
    // },
    data: () => ({
      message_id: '',
      message: {},
      uploadedImage: '',
      railsURL: "http://localhost:3000"
    }),
    created(){
        this.message_id = this.$route.params.message_id
    },
    mounted() {
        console.log(this.message_id)
    axios()
      .get('/users/' + localStorage.getItem('id') + '/messages/' + this.message_id,
      {
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
        },
      },
      )
      .then(response => (
            this.message = response.data,
            japaneseTime = new Date(this.message.time * 1000),
            this.message.time = japaneseTime.getFullYear()
                + '/' + ('0' + (japaneseTime.getMonth() + 1)).slice(-2)
                + '/' + ('0' + japaneseTime.getDate()).slice(-2)
                + ' ' + ('0' + japaneseTime.getHours()).slice(-2)
                + ':' + ('0' + japaneseTime.getMinutes()).slice(-2),
            japaneseTime2 = new Date(this.message.created_time * 1000),
            this.message.created_time = japaneseTime2.getFullYear()
                + '/' + ('0' + (japaneseTime2.getMonth() + 1)).slice(-2)
                + '/' + ('0' + japaneseTime2.getDate()).slice(-2)
                + ' ' + ('0' + japaneseTime2.getHours()).slice(-2)
                + ':' + ('0' + japaneseTime2.getMinutes()).slice(-2),
            console.log(this.message)
    ))
  }
}
</script>