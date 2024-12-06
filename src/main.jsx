import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from './contexts/ThemeContext';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>,
)