<script>
  // Pick up prop from main.js
  export let name
  const gameType = 'Tic Tac Toe'
  // Internal static prop
  const intro = `${name}'s Svelte ${gameType}`
  // Import Component
  import GameInstructions from './lib/GameInstructions.svelte'
  import Board from './lib/Board.svelte'
</script>

<style>
:root {
  color: rgba(255, 255, 255, 1);
  font-family: sans-serif;
  font-size: 16px;
  background-color: rgb(30, 30, 30);
  text-align: center;
}

body {
  color: white;
  background-color: black;
  display: flex;
  height: 100vh;
}

main {
  width: 300px;
  margin: 0 auto;
}

h1 {
  font-family: 'Roboto Slab', serif;
  font-size: 2em;
  border-bottom: 1px solid white;
}
</style>

<main>
  <!-- Attempted to get this from ./main.js <p>{name} is available as a prop.</p> -->
  <h1 class="animate__animated animate__bounce">{gameType}</h1>

  <GameInstructions />

  <div>
    <Board />
  </div>
</main>
