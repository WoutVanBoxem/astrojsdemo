<template>
  <div class="counter-card">
    <button class="counter-button" @click="subtract">-</button>
    <pre class="counter-value">{{ count }}</pre>
    <button class="counter-button" @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    subtract() {
      this.count--;
    },
  },
};
</script>
