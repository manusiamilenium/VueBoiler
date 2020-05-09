<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <user-form />
    <user-table :employees="employees" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import UserTable from './components/UserTable' 
import UserForm from './components/UserForm'
export default {
  name: 'App',
  components: {
    UserTable,
    UserForm
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: 'Richard Hendricks',
          email: 'richard@piedpiper.com',
        },
        {
          id: 2,
          name: 'Bertram Gilfoyle',
          email: 'gilfoyle@piedpiper.com',
        },
        {
          id: 3,
          name: 'Dinesh Chugtai',
          email: 'dinesh@piedpiper.com',
        },
      ],
    }
  },

}
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>
