<script>
  // Static prop
  const intro = "Russell's Svelte Tic Tac Toe"
  // Component Prop
  import Game from './lib/Game.svelte'
</script>

<main>
  <!-- Attempted to get this from ./main.js <p>{name} is available as a prop.</p> -->
  <h1>{intro} is an Svelte experiment for <Game />.</h1>
</main>

<style>
</style>
