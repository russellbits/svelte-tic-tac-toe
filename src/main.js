import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  // props: { name: 'world' } <-- when does this get used?
})

export default app
