<template>
  <div id="app">
  <h2>Hi</h2>
  {{ customers }}
  </div>
</template>

<script>
import BookingService from '@/services/BookingService.js'

export default {
  name: 'app',
  data() {
    return {
      customers: []
    };
  },
  components: {
  },
  mounted() {
    BookingService.getAllCustomers()
    .then(customers => this.customers = customers);
  }
}
</script>

<style>

</style>
