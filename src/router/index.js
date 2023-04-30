import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { MainPage, HomePage, WishlistPage, ContactPage, AboutPage } from "../pages";
import { AdminCategoriesPage, AdminHomePage, AdminProductsPage, AdminReportsPage } from "../pages/admin-module";
import { AppLayout } from "../layout";
import { AdminLayout } from "../layout/admin-layout";

// Page Imports
export const Router = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/main' element={<MainPage/>}/>
                <Route path="/shop" element={<AppLayout/> }>
                    <Route path="home" element={<HomePage/> }/>
                    <Route path="wishlist" element={<WishlistPage/> }/>
                    <Route path="about" element={<AboutPage/> }/>
                    <Route path="contact" element={<ContactPage/> }/>
                </Route>
                <Route path="/admin" element={<AdminLayout/> }>
                    <Route path="home" element={<AdminHomePage/>}/>
                    <Route path="manage-products" element={<AdminProductsPage/>}/>
                    <Route path="manage-category" element={<AdminCategoriesPage/> }/>
                    <Route path="reports" element={<AdminReportsPage/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}