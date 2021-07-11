<template>
    <v-container fluid fill-height class='bg'>
        <v-layout wrap class='justify-center align-center'>
            <v-flex xs12 sm9 md6>
            <v-card
                height = "550"
                rounded="xl"
            >
                <v-container>
                    <v-row justify="center">
                        <v-avatar size='100'>
                            <v-img
                            v-bind:src="railsURL + profile.avatar"
                            >
                            </v-img>
                        </v-avatar>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-list two-line>
                                <template v-for="(item, key, index) in items">
                                    <v-list-item :key = key>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{key}}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                {{item}}
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-divider
                                        v-if="index < 1"
                                        :key="item"
                                    ></v-divider>
                                </template>
                            </v-list>
                        </v-col>
                    </v-row>
                    <v-row class='test2'>
                        <v-btn>
                            編集
                        </v-btn>
                    </v-row>
                  
                </v-container>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from '@/api/index'
// import { mapState } from 'vuex'
const year_start = 1930
const year_end = 2030
const ageRange = new Array(year_end - year_start + 1).fill(null).map((_, i) => i + year_start)
const month_start = 1
const month_end = 12
const monthRange = new Array(month_end - month_start + 1).fill(null).map((_, i) => i + month_start)
const daysRange = [...Array(31)].map((_, i) => i)


export default {
    data: () => ({

      profile:{
          birthdate : '',
          avatar : '',
          name: null
      },
      year: '',
      yearrange: ageRange,
      month: '',
      monthrange: monthRange,
      day: '',
      daysrange: daysRange,
      dialog: false,
      dialog_avatar: false,
      comment: '卒業まであとわずか．\n２月にイタリアへの卒業旅行，ちゃんと行けるかなー',
      post: {},
      uploadedImage: '',
      items: {},
    //   railsURL: 'https://13.114.43.226'
      railsURL: "http://localhost:3000"
    }),

    async mounted() {
    await axios()
      .get('/profile/' + localStorage.getItem('id'),
      {
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
        },
      },
      )
      .then(response => (
            this.profile.name = response.data.name, 
            this.profile.avatar = response.data.avatar_url, 
            this.profile.birthdate = response.data.birthdate,
            console.log(this.profile),
            this.items['Name'] = response.data.name,
            this.items['Date of birth'] = response.data.birthdate,
            console.log(this.items)
    )
    );
  },
  methods: {
      registerBirthdate(){
        // var date = new Date(this.year, this.month - 1, this.day)
        // this.profile.birthdate = date.getTime() / 1000
        axios()
        .put('/update_birthdate/',
        {
            id: localStorage.getItem('id'),
            year: this.year,
            month: this.month,
            day: this.day
        },
        {
            headers: {
                'access-token': localStorage.getItem('access-token'),
                uid: localStorage.getItem('uid'),
                client: localStorage.getItem('client'),
            },
        },
        )
        .then(response => (
            console.log(response),
            // this.$router.go({path: this.$router.currentRoute.path, force: true})
            this.$router.push({name: 'Home'})  
        ))
      },
    onFileChange(e) {
        e.preventDefault();
        let files = e.target.files;
        this.uploadedImage = files[0];
        this.profile.avatar = this.uploadedImage
        console.log(files)
        console.log(this.uploadedImage)
     },
    postItem() {
        let formData = new FormData();
        formData.append('avatar', this.uploadedImage);
        formData.append('id', localStorage.getItem('id'));
        console.log(formData)
        axios().
        put('/update_avatar',
        formData,
        {
            headers: {
                'access-token': localStorage.getItem('access-token'),
                uid: localStorage.getItem('uid'),
                client: localStorage.getItem('client'),
            },
        },
        ).then(response => {
          this.uploadedImage = ''
          this.$refs.file.value = ''
          this.profile.avatar = response.data.avatar,
          console.log(response) ,
        //   this.$router.go({path: this.$router.currentRoute.path, force: true})
            this.$router.push({name: 'Home'})  
        }).catch(e => {
          console.log(e)
        })
      }
    }
}
</script>

<style>
  .rounded-card{
    border-radius:50px;
}
.test2{

position: absolute;
bottom: 20px;
margin: 0px;
padding: 0px;
right: 20px;
}
</style>