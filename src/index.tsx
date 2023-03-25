import ReactDOM from 'react-dom/client'
import App from './app'

const domNode = document.getElementById('root') as Element
const root = ReactDOM.createRoot(domNode)
root.render(<App />)
