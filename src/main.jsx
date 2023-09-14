import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <GoogleOAuthProvider clientId="670840733329-0r9ssc0isc1c2ta0tla3r64qa4tdq4bl.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </Provider>

  </React.StrictMode>,
)
