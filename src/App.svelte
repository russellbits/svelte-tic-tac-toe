<script>
  // Import Components
  import AppMenu from './lib/AppMenu.svelte'
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
</style>

<main>
  <!-- Attempted to get this from ./main.js <p>{name} is available as a prop.</p> -->
  <AppMenu />

  <div>
    <Board />
  </div>
</main>
