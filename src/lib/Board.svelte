<script>
  import Square from "./Square.svelte";

  let winner = null
  let squares = new Array(9).fill(null);
  let xIsNext = true;
  // Note the dollar sign makes status a reactive assignment!
  $: status = (xIsNext ? "X" : "O") + `'s turn is next.`

  function handleClick(i) {
    if(!squares[i]) {
      squares[i] = xIsNext ? "X" : "O"
      xIsNext = !xIsNext
      winner = calculateWinner(squares)
    }
  }

  function calculateWinner(squares) {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i]
      if (squares[a] && squares[a] == squares[b] && squares[a] === squares[c])
        return `${squares[a]} wins!`
    }

    const isDraw = squares.every(square => square !== null)
    return isDraw ? "It's a draw!" : null
  }
</script>

<style>
  .board {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
  }
  h3#status {
    color: #3dd;
  }
</style>

<h3 id="status">
  {#if winner}
    {winner}
  {:else}
    {status}
  {/if}
</h3>

<div class="board">
  {#each squares as square, i}
    <Square value={square} handleClick={() => handleClick(i)} />
  {/each}
</div>
