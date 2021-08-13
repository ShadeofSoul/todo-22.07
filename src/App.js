import { useState } from "react";
import "./App.css";
import { filterEmoji } from "./helper";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput/index";
import EmojiList from "./components/EmojiList/index";

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20));

  function handleSearchChange(value) {
    setFilteredEmoji(filterEmoji(value, 20));
  }
  return (
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiList emojiData={filteredEmoji} />
    </div>
  );
}

export default App;
