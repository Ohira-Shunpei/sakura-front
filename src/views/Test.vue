<template>
  <div
    id="profile-form"
    class="container w-50 text-center"
  >
    <div class="h3 mb-3">
      プロフィール
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <div class="form-group text-left">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
        >
          <label for="name">ユーザー名</label>
          <input
            id="name"
            v-model="user.name"
            name="ユーザー名"
            type="text"
            class="form-control"
            placeholder="username"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group text-left">
        <!-- eslint-disable vue/no-unused-vars -->
        <ValidationProvider
          v-slot="{ errors }"
          ref="provider"
          name="プロフィール画像"
          rules="image"
        >
          <!-- eslint-enable vue/no-unused-vars -->
          <label
            for="avatar"
            class="d-block"
          >プロフィール画像</label>
          <img
            :src="user.avatar_url"
            class="my-3"
            width="150px"
          >
          <input
            id="avatar"
            type="file"
            accept="image/png,image/jpeg"
            class="form-control-file"
            @change="handleChange"
          >
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click="handleSubmit(update)"
      >
        更新
      </button>
    </ValidationObserver>
  </div>
</template>

<script>


export default {
  name: 'ProfileIndex',
  data() {
    return {
      user: {
        name: "",
        avatar_url: ""
      },
      uploadAvatar: ""
    }
  },
  
  created() {
    this.user = Object.assign({}, this.authUser)
  },
  // methods: {
  //   // ...mapActions('users', ['updateUser']),
  //   // 選択された画像をdataに保存する
  //   async handleChange(event) {
  //     const { valid } = await this.$refs.provider.validate(event)
  //     if (valid) this.uploadAvatar = event.target.files[0]
  //   },
  //   // textなどの単純なデータと違い画像などのバイナリーファイルは
  //   // FormDataを使わなければサーバーに送ることができない。
  //   update() {
  //     const formData = new FormData()
  //     formData.append("user[name]", this.user.name)
  //     if (this.uploadAvatar) formData.append("user[avatar]", this.uploadAvatar)

  //     try {
  //       this.updateUser(formData)
  //       // this.$router.push({ name: "TaskIndex" })
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // }
}
</script>