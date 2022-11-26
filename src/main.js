// App entrypoint:
import App from './App.svelte'
import 'animate.css';

const app = new App({
  target: document.getElementById('app'),
  props: { name: 'Russell' } // Passes into App.svelte
})

export default app
