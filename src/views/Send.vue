<template>
 
  <v-container fluid fill-height>
    <v-card
      width="30%"
      height='100%'
    >
      <v-list dense>
        
        <v-subheader class='text-h5'>親</v-subheader>
        <v-divider/>
        <v-list-item-group
          color="primary"
          
        >
          <v-list-item
            v-for="(item, i) in family"
            :key="i"
            
          >
            <v-list-item-icon>
                <v-avatar size="30">
                    <img
                      :src="item.avatar"
                    >
                </v-avatar>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class='text-h8'> {{item.name}} ({{item.relation}})</v-list-item-title>
            </v-list-item-content> 
          </v-list-item>
          <v-divider/>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-col>
        <v-card
            class="mx-auto"
            max-width="400"
            max-height="100%"
        >
          <v-img
          src="~@/assets/icon/cat.jpg"
          height="100%"
          width="100%"
          >
              <v-card-actions>
                  <v-btn icon>
                      <v-icon>mdi-camera</v-icon>
                  </v-btn>
              </v-card-actions>
          </v-img>
          <v-card-title>
              山本 まこと
          </v-card-title>
          <v-row>
              <v-card-subtitle>
                  2002/1/3
              </v-card-subtitle>
          </v-row>
        </v-card>
      <v-container>
        <v-btn icon x-large @click='editMessage'>
          <v-icon>
            mdi-email
          </v-icon>
        </v-btn>
      </v-container>
    </v-col>

    <v-col>
      <v-card 
          class="mx-auto"
          max-width="400"
      >
          <v-card-actions>
              <v-btn icon>
                  <v-icon> mdi-plus </v-icon>
              </v-btn>
              <v-card-title font-italic>
                  イベント
              </v-card-title>
          </v-card-actions>
          <v-list>
              <v-list-item
                    v-for="(event, index) in events"
                    :key="index"
              >
                  <v-list-item-content>
                      <v-list-item-title>
                          {{event.date}}
                      </v-list-item-title>
                      <v-list-item-subtitle class="mb-2">
                          {{event.body}}
                      </v-list-item-subtitle>
                      <v-list-item-action-text>
                          <v-divider/>
                      </v-list-item-action-text>
                  </v-list-item-content>
              </v-list-item>
              
          </v-list>
      </v-card> 

      <v-card 
          class="mt-5 mx-auto"
          max-width="400"
          
      >
          <v-card-actions>
              <v-btn
                  icon
                  @click="dialog = true"
              >
              <v-icon> mdi-pen </v-icon>
              </v-btn>
              <v-dialog
                  :retain-focus="false"
                  v-model="dialog"
                  persistent
                  max-width="600px"
                  >
                  <v-card>
                      <v-card-title>
                      <span class="headline">ひとこと</span>
                      </v-card-title>
                      <v-card-text>
                      <v-container>
                          
                          <v-textarea
                          required
                          v-model='comment'
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
                          icon,
                          dialog = "false"
                      >
                          <v-icon> mdi-check</v-icon>
                      </v-btn>
                      </v-card-actions>
                  </v-card>
                  </v-dialog>
              <v-card-title font-italic>
                  ひとこと
              </v-card-title>
          </v-card-actions>
          <v-card-text style="white-space:pre-wrap">
              {{comment}}
          </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        family: [
            {name: '太郎', relation: '父', avatar: require('../assets/icon/cat.jpg')},
            {name: '花子', relation: '母', avatar: require('../assets/icon/cat.jpg'), }
        ],
      
        items: [
          { name: '太郎', relation: '父', avatar: require('../assets/back/sakura.jpg') },
          { name: '花子', relation: '母',avatar: require('../assets/back/sakura.jpg') },
          { text: 'Conversions', avatar: require('../assets/back/sakura.jpg')},
      ],
        events: [
            {
                date: "2021/11/24",
                body: "誕生日",
            },
            {
                date: "2022/2/21",
                body: "BTSのライブ",
            },
            {
                date: "2023/3/17",
                body: "専門学校卒業",
            },
        ],
       
        profiles: [
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
            { content: ''},
      ],
      dialog: false,
      comment: '卒業まであとわずか\n２月にイタリアへの卒業旅行，ちゃんと行けるかなー'
     
    }),

    methods: {
      editMessage() {
        this.$router.push({name: 'SendMessage'})
      }
      
    },
}
</script>