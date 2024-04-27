import React, { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import port from '../src/images/portfolio.png'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './components/2-Dashboard/Dashboard'
import Settings from './components/3-Settings/Settings'
import Products from './components/4-Products/Products'
import Inbox from './components/5-Inbox/Inbox'
import OrderList from './components/6-OrderList/OrderList'
import Appointments from './components/7-Appointments/Appointments'
import SignIn from './components/1-Admin/SignIn';
import SignUp from './components/1-Admin/SignUp';

export default function App() {
  const [activeLi, setActiveLi] = useState('Dashboard')

  return (
    <div className='App'>
      <div className='leftSide'>
        <ul className='up'>
          <h1><span>Doctor</span>Dash</h1>
          <li className={activeLi==="Dashboard"? "active":""} onClick={()=>setActiveLi('Dashboard')}><Link to={'/'}><i className="fa-regular fa-clock"></i>Dashboard</Link></li>
          <li className={activeLi==="Appointments"? "active":""} onClick={()=>setActiveLi('Appointments')} ><Link to={'/appointments'}><i className="fa-solid fa-table-cells-large"></i>Appointments</Link></li>
          <li className={activeLi==="Products"? "active":""} onClick={()=>setActiveLi('Products')}><Link to={'/products'}><i className="fa-brands fa-product-hunt"></i>Products</Link></li>
          <li className={activeLi==='Inbox'? "active":""} onClick={()=>setActiveLi('Inbox')}><Link to={'/Inbox'}><i className="fa-regular fa-comments"></i>Inbox</Link></li>
          <li className={activeLi==="OrderList"? "active":""} onClick={()=>setActiveLi('OrderList')}><Link to={'/orderlist'}><i className="fa-solid fa-list-check"></i>Order List</Link></li>
        </ul>
        <ul className='down'>
          <li className={activeLi==="Settings"? "active":""} onClick={()=>setActiveLi('Settings')}><Link to={'/settings'}><i className="fa-solid fa-gear"></i>Settings</Link></li>
          <li className={activeLi==="Logout"? "active":""} onClick={()=>setActiveLi('Logout')}><Link to={''}><i className="fa-solid fa-power-off"></i>Logout</Link></li>
        </ul>
      </div>
      <div className='rightSide'>
        <nav>
          <div className='info'>
            <i className="fa-solid fa-bars"></i>
            <div className='ser'>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='Search' />
            </div>
          </div>
          <div className='portfolio'>
            <img src={port} alt="" />
            <div className='content'>
              <h3>Moni Roy</h3>
              <p>Admin</p>
            </div>
          </div>
        </nav>
        <main>
            <Routes>
              <Route exact path='' element={<Dashboard />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/products' element={<Products />} />
              <Route path='/inbox' element={<Inbox />} />
              <Route path='/orderlist' element={<OrderList />} />
              <Route path='/appointments' element={<Appointments />} />
            </Routes>
        </main>
      </div>
    </div>
  )
}
