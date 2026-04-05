import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import MainLayout from "./components/layout/MainLayout";

// PUBLIC PAGES
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import Category from "./pages/shop/Category";
import SubCategory from "./pages/shop/SubCategory";
import ProductDetails from "./pages/shop/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout.jsx";
import Wishlist from "./pages/Wishlist";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import HomeDecor from "./pages/HomeDecor";
import NotFound from "./pages/NotFound";

// AUTH PAGES
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import ResetPasswordPage from "./pages/auth/ResetPassword";
import OTPVerifyPage from "./pages/auth/OTPVerify";

// PROFILE PAGES
import Profile from "./pages/profile/Profile";
import Address from "./pages/profile/Address";
import Orders from "./pages/profile/Orders";
import OrderId from "./pages/profile/OrderId";

// ADMIN PAGES
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/products/Products";
import AddProduct from "./pages/admin/products/AddProduct";
import EditProduct from "./pages/admin/products/EditProduct";
import Categories from "./pages/admin/Categories";
import Users from "./pages/admin/Users";
import OrdersAdmin from "./pages/admin/orders/Orders";
import OrderDetails from "./pages/admin/orders/OrderDetails";

// ORDER SUCCESS
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Category />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/subcategory/:id" element={<SubCategory />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/homedecor" element={<HomeDecor />} />

          {/* PROFILE */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/address" element={<Address />} />
          <Route path="/profile/orders" element={<Orders />} />
          <Route path="/profile/orders/:id" element={<OrderId />} />

          {/* ORDER SUCCESS */}
          <Route path="/order-success" element={<OrderSuccess />} />
        </Route>

        {/* AUTH (NO LAYOUT) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/otp-verify" element={<OTPVerifyPage />} />

        {/* ADMIN */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<OrdersAdmin />} />
        <Route path="/admin/orders/:id" element={<OrderDetails />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}