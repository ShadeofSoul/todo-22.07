import emojilist from "./../emojiList.json";

function contains(key, value, emoji) {
  if (emoji[key].toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    return true;
  else return false;
}

export const filterEmoji = (searchText, maxResults) => {
  const filteredResults = emojilist.filter(
    (emoji) =>
      contains("title", searchText, emoji) ||
      contains("keywords", searchText, emoji)
  );
  return filteredResults.slice(0, maxResults);
};
