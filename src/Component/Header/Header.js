import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const[isopenMenu,setopenMenu] = useState(false)

    const onhandleChange = ()=>{
        setopenMenu(!isopenMenu)
    }
  return (
    <div className='main-container w-full h-full bg-[#415161] text-white py-4 px-10 font-sans'>
        <header className='flex items-center justify-between'>
            <div className='logo w-[200px]  h-[65px]'>
                <img className='w-full object-cover object-center h-full'  src='https://i.ibb.co/L0TcCgb/keska-logo-removebg-preview.png' alt='logo' />
            </div>

            <nav className='navbar'>
                <ul className={`nav-links flex items-center justify-center gap-10 ${isopenMenu ? 'show' : ''}`}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/testimonial'}>Testimonial</Link></li>
                    <li><Link to={'/product'}>Products</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
            {/* nav-links flex items-center justify-center gap-10 */}
            <div className='social-icon flex items-center justify-center gap-2 text-2xl '>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div className='responsive'>
            <ion-icon onClick={onhandleChange} className='menu' name="menu"></ion-icon>   
            <ion-icon className='close' name="close-circle-sharp"></ion-icon>
            </div>
        </header>
    </div>
  )
}

export default Header

