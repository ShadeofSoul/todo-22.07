import React from "react";
import EmojiItem from "../EmojiItem/index";

const EmojiList = ({ emojiData }) => {
  return (
    <div>
      {emojiData.map((emoji) => (
        <EmojiItem
          key={emoji.title}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      ))}
    </div>
  );
};

export default EmojiList;
