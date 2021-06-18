<template>
    <v-container>
      <v-card>
        <v-list>
          <v-list-item
          v-for="(item, i) in member"
          :key=i
        >
            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click='followFeind(item.id)'>
                フォロー
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>

       <v-card>
        <v-list>
          <v-list-item
          v-for="(item, i) in friend"
          :key=i
        >
            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

       <v-card>
        <v-list>
          <v-list-item
          v-for="(item, i) in follower"
          :key=i
        >
            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
</template>

<script>
import axios from '@/api/index'

export default {
  data () {
    return {
      member: {},
      friend: {},
      follower: {},
    }
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
      )
      .then(response => (this.member = response.data , console.log(response.data)))
  },
  methods: {
      followFeind(id){
        console.log(id)
      axios().post('/users/' + id +'/relationships', {
        user_id: id
      }, 
      {
        headers: {
           'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      }
      )
      .then(response => (console.log(response)))
    },
  },
}
</script>
