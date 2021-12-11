import React from 'react'
import './Navbar.scss'

function Navbar({menuActual, menuItems}){
    return (
        <div className='main-navbar'>
            <ul>
                {
                    menuItems.map((item) => {
                        return <li className='main-navbar__item'>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar
