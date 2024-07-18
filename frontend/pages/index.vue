<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/users');
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
};
</script>
