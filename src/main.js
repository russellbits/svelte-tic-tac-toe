// App entrypoint:
import App from './App.svelte'
import 'animate.css';

const app = new App({
  target: document.getElementById('app'),
  // props: { name: 'Russell' } Pass top-level values in into App.svelte
})

export default app
