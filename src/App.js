import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Detail from './pages/detail'
import Profile from './pages/profile'
import AdminComplain from './pages/adminComplain'
import UserComplain from './pages/userComplain'
import Category from './pages/category'
import EditCategory from './pages/editCategory'
import Product from './pages/product'
import EditProduct from './pages/editProduct'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin_complain" element={<AdminComplain />} />
      <Route path="/user_complain" element={<UserComplain />} />
      <Route path="/category" element={<Category />} />
      <Route path="/edit-category" element={<EditCategory />} />
      <Route path="/product" element={<Product />} />
      <Route path="/edit-product" element={<EditProduct />} />


    </Routes>
  )
}
