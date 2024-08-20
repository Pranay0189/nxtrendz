import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ProductItemDetails from './components/ProductItemDetails'
import Header from './components/Header' // Import the Header component if needed

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header /> {/* Render the Header component */}
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductItemDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </BrowserRouter>
)

export default App
