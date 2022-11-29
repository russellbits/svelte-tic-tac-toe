<script>
  import SvgIcon from './SvgIcon.svelte'
  // Why doesn't this work?
  import { USER_ICON_PATH, BELL_ICON_PATH } from '../assets/appIcons.js'
  import { DEVELOPER, FRAMEWORK, GAMETYPE } from '../assets/vars.js';
  const developer = DEVELOPER
  const framework = FRAMEWORK
  const gameType = GAMETYPE
  const userIcon = USER_ICON_PATH
  const bellIcon = BELL_ICON_PATH

  // console.log(developer)

</script>

<style>
h1 {
  font-family: 'Roboto Slab', serif;
  font-size: 2em;
  border-bottom: 1px solid white;
}

p#instructions {
  font-family: 'Noto Serif', serif;
  font-size: 1em;
  text-align: left;
  text-indent: 0;
  width: 100%;
  color: #ddd;
}
</style>

<SvgIcon d={userIcon} fill={`white`} />
<SvgIcon d={bellIcon} fill={`white`} />

<h1 class="animate__animated animate__bounce">{gameType}</h1>

<p id="instructions">This is {developer}'s {framework} version of this classic game. The first opponent is X. Choose a square and the first of two players to create a line of tokens wins!</p>
