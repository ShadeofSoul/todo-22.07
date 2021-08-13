import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className='component-header'>
      <img
        src='//cdn.jsdelivr.net/emojione/assets/png/1f638.png'
        width='32'
        height='32'
        alt='cat'
      />
      Emoji Search
      <img
        src='//cdn.jsdelivr.net/emojione/assets/png/1f638.png'
        width='32'
        height='32'
        alt='cat'
      />
    </header>
  );
};

export default Header;
