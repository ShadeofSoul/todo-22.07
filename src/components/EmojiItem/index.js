import React from "react";
import "./emojiItem.css";

const EmojiItem = ({ title, symbol }) => {
  const hex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${hex}.png`;

  return (
    <div className='component-emoji-result-row'>
      <img src={src} alt={title} />
      <span className='title'>{title}</span>
    </div>
  );
};

export default EmojiItem;
