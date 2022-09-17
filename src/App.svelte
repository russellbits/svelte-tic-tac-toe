<script>
  // Pick up prop from main.js
  export let name
  const gameType = 'Tic Tac Toe'
  // Internal static prop
  const intro = `${name}'s Svelte ${gameType}`
  // Import Component
  import GameInstructions from './lib/GameInstructions.svelte'
  import Board from './Board.svelte'
</script>

<style>
</style>

<main>
  <!-- Attempted to get this from ./main.js <p>{name} is available as a prop.</p> -->
  <h1>{intro} is a Svelte experiment for <GameInstructions />.</h1>

  <div>
    <Board />
  </div>
</main>
