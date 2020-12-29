import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Online Course</h1>
           
        <nav class="p-3 mb-2 bg-success text-white">
          <a href="/course">Your Course</a>
          <a href="/blog">Blog</a>
        </nav>

        <h4>Grab Your Course</h4>

        </div>

    );
};

export default Header;