// App entrypoint:
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: { name: 'Russell' } // Passes into App.svelte
})

export default app
