<template>
  <h1>Vue App</h1>
  <p>Count is {{ count }}</p>
  <button v-on:click="increase">Increase</button>
  <span style="padding: 8px;"></span>
  <button v-on:click="decrease">Decrease</button>
</template>

<style scoped>

</style>

<style scoped>
</style>

<script>
export default {
  data() {
    console.log('Source map test');
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    }
  }
}
</script>
