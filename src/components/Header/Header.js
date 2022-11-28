import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import Logo from '../../images/logo.jpg'
import './header.css'


function Header(){
  
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick (false)

    const onMouseEnt = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeav = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    

    return (
        <>
            <nav className='navbar' >
                <img
                className="header-logo"
                src={Logo}
                alt="Cold Stone logo"
                
                />
                {/*<Link to='/' className='navbar-logo'>{/*link from tract router dom }
                    
    </Link>*/}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>{/*i is for icon */}
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'
                       onMouseEnter={onMouseEnt}/*deberia mostrar el dropdownflex-direction: */
                       onMouseLeave={onMouseLeav} >

                        <Link to='/menu' 
                               className='nav-links'
                               onClick={closeMobileMenu}>
                            Our menu < i className= 'fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>/*if dropdown is touched display dropdown component */}
                    </li>

                    <li className='nav-item'>
                        <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                            Gallery 
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/rewards' className='nav-links' onClick={closeMobileMenu}>
                            Rewards 
                        </Link>
                      
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact us' className='nav-links' onClick={closeMobileMenu}>
                            Contact us 
                        </Link>
                      
                    </li>
                </ul>

                    
            </nav>
          
        </>
    )
}

export default Header;