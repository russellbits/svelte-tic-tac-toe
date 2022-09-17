<script>
  import Square from "./Square.svelte";
  let squares = new Array(9).fill(null);
  let xIsNext = true;
  // Note the dollar sign makes status a reactive assignment!
  $: status = "Next Player: " + (xIsNext ? "X" : "O")

  function handleClick(i) {
    if(!squares[i]) {
      squares[i] = xIsNext ? "X" : "O"
      xIsNext = !xIsNext
    }
  }
</script>

<style>
  .board {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
  }
  h3 {
    color: red;
  }
</style>

<h3>{status}</h3>

<div class="board">
  {#each squares as square, i}
    <Square value={i} handleClick{() => handleClick(i)} />
  {/each}
</div>
