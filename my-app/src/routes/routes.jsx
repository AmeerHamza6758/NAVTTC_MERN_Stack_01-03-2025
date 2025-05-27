import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import StudentForm from '../components/StudentForm'
import CompoB from '../components/CompoB'
import CompA from '../components/CompA'
import Sales from '../pages/sales/Sales'
import Products from '../components/Products'
const RoutesFile = () => {
    return (
        <>
            <Routes>
                <Route index element={<StudentForm />} />
                <Route element={<CompoB />} path='contact_us'></Route>
                <Route element={<Sales />} path='sales'></Route>
                <Route element={<Products />} path='products'></Route>
                {/* <Route element={ } path=''></Route> */}
            </Routes>
        </>
    )
}

export default RoutesFile