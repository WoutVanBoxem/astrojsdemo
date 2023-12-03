<script>
  let count = 0;
  const add = () => count++;
  const subtract = () => count--;
</script>

<div class="counter-card">
  <button class="counter-button" on:click={subtract}>-</button>
  <pre class="counter-value">{count}</pre>
  <button class="counter-button" on:click={add}>+</button>
</div>
