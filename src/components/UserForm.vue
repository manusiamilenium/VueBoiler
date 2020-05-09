<template>
  <div id="user-form">
    <form @submit.prevent="handleSubmit"> 
      <label>User name</label>
      <input v-model="employee.name" type="text" />
      <label>User Email</label>
      <input v-model="employee.email" type="text" />
      <button>Add User</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'user-form',
    data() {
      return {
        employee: {
          name: '',
          email: '',
        },
      }
    },
    methods: {
    handleSubmit() {
      alert('testing handleSubmit')
    },
  },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
</style>