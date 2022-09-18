<script>
  export let value
  export let handleClick
</script>

<style>
  .square {
    width: 100px;
    height: 100px;
    color: white;
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    background-color: #666;
    border: 2px solid black;
    margin: 2px;
    padding: 5px;
  }

  .X {
    background-color: rgb(48, 187, 78);
  }

  .O {
    background-color: rgb(48, 170, 187);
  }

  .square:hover {
    border: 4px solid rgb(252, 255, 0);
  }
</style>

<button id={value} class="square {value}" on:click={handleClick}>{value || ""}</button>
