<template>
    <v-container fluid fill-height class='bg'>
        <v-col>
            <v-card
               class="mx-auto"
                max-width="400"
            >
                <v-img
                src="~@/assets/icon/cat.jpg"
                height="300px"
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
<!--                 
                <v-card-text>
                    <v-row align="center" justify="center">
                        <div>
                            趣味 : BTS
                            <br>
                            好きな食べ物：焼肉，寿司
                        </div>
                    </v-row>
                </v-card-text> -->
            </v-card>
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

        <v-col>
            <v-card 
                class="mx-auto"
                max-width="400"
            >
            <v-card-title font-italic>
                プロフィール
            </v-card-title>
            <v-row
                align-content="center"
            >   
                <v-col>
                <!-- v-list:リスト表示、v-forでdataのobject(profiles)数分要素繰り返し描画  -->
                <v-list>
                    <v-list-item
                        v-for="(profile, index) in profiles"
                        :key="index"
                    >
                        <v-list-item-content>
                        <!-- profileの中身（content）を表示。<v-icon>mdi-check</v-icon>でチェックアイコン表示  -->
                            <v-list-item-title><v-icon>mdi-minus</v-icon> {{ profile.content }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-col>
            </v-row>

            </v-card> 
        </v-col>
    </v-container>
</template>

<script>
// import axios from '@/api/index'
// import { mapState } from 'vuex'

export default {
    data: () => ({
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
      comment: '卒業まであとわずか．\n２月にイタリアへの卒業旅行，ちゃんと行けるかなー'
    }),
 
    // methods: {
    // saveComment(comment){
    //     console.log(comment)
    //     this.$store.commit('editComment', comment)
    // }
//   }
}
</script>

<style>
  .top {
    background-image: url("~@/assets/back/sakura.jpg");
    /* max-width:100%; */
  }
</style>