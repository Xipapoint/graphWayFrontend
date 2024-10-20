import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store/store.ts'
import { StrictMode } from 'react'

const store = setupStore()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
