import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Online Course</h1>
        <nav>
          <a href="/course">Your Course</a>
          <a href="/blog">Blog</a>
        </nav>


        </div>

    );
};

export default Header;