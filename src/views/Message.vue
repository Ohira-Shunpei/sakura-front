<template>
    <v-card fluid>
       <v-card-title>
           From {{message.from}}
       </v-card-title>
       <v-card-title>
           送信時間：{{year}}年 {{month}}月 {{day}}日 {{hour}}時 {{minute}}分
       </v-card-title>
       <v-card-title>
           タイトル : {{message.title}}
       </v-card-title>
       内容
       <v-card-text flat>
            {{message.body}}
       </v-card-text>
    </v-card>
</template>

<script>

export default {
    data() {
    return {
        message: {},
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: ''
    }
    },
    mounted() {
        this.message = this.$route.params.content
        var s = Date.parse(this.message.created_at)
        var date = new Date(s)
        this.year = date.getFullYear()
        this.month = date.getMonth()
        this.day = date.getDate()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
    }
}
</script>