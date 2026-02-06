import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Images/netflixlogo.png';
import Search from '../Images/searchicon.png';
import Notification from '../Images/notifications.png';
import Accountat from '../Images/accountat.png';
import Dropdown from '../Images/dropdown.png';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <div className={`header_outer_continer ${scrolled ? 'header_black' : ''}`}>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li><img src={logo} alt="Netflix Logo" width="100" /></li>
                        {['Netflix','Home', 'TV Shows', 'Movies', 'Latest', 'My List', 'Browse by Languages'].map((item) => (
                            <li 
                                key={item}
                                className={activeLink === item ? 'active' : ''}
                                onClick={() => handleLinkClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header_right">
                    <img src={Search} alt="Search Icon" width="25" />
                    <img src={Notification} alt="Notification Icon" width="25" />
                    <div className="account-dropdown">
                        <img src={Accountat} alt="Account Icon" width="25" />
                        <img src={Dropdown} alt="Dropdown Icon" width="20" />
                    </div>
                </div>
            </div>
        </div>
    );
}