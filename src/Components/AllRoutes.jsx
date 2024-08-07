import React from 'react'

import Fetch from './Fetch'
import Bag from './Bag'

import { Route, Routes } from 'react-router-dom'

export const AllRoutes = () => {
  return (
   <>
   <Routes>

    <Route path= '/Fetch' element = {<Fetch/>}></Route>
    <Route path= '/Bag' element = {<Bag/>}></Route>
    

   </Routes>
   </>
  )
}
