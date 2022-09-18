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
h1 {
  font-family: 'Roboto Slab', serif;
  font-size: 2em;
  border-bottom: 1px solid white;
}
</style>

<main>
  <!-- Attempted to get this from ./main.js <p>{name} is available as a prop.</p> -->
  <h1>{gameType}</h1>

  <GameInstructions />

  <div>
    <Board />
  </div>
</main>
