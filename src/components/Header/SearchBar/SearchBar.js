import React, { useState, useContext } from "react";
import "./SearchBar.scss";
import { ViewContext } from "../../../context/viewContext";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [isSuggestionClicked, setIsSuggestionClicked] = useState(false); // Trạng thái để theo dõi việc click vào gợi ý
  const { view, setView } = useContext(ViewContext);

  const tags = [
    { id: "1-1", name: "mark" },
    { id: "1-2", name: "del" },
    { id: "1-3", name: "address" },
    { id: "1-4", name: "code" },
    { id: "1-5", name: "kbd" },
    { id: "1-6", name: "pre" },
    { id: "1-7", name: "var" },
    { id: "1-8", name: "q" },
    { id: "2-1", name: "table" },
    { id: "2-2", name: "tr" },
    { id: "2-3", name: "th" },
    { id: "2-4", name: "td" },
    { id: "3-1", name: "audio" },
    { id: "3-2", name: "img" },
    { id: "3-3", name: "iframe" },
    { id: "3-4", name: "a" },
    { id: "3-5", name: "embed" },
    { id: "3-6", name: "video" },
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      // Lọc các thẻ bắt đầu bằng ký tự nhập vào
      const filteredSuggestions = tags.filter((tag) =>
        tag.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setSuggestionsVisible(true);
    } else {
      setSuggestions([]);
      setSuggestionsVisible(false);
      setView((prev) => ({ ...prev, itemId: "" }));
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion.id.split("-")[0]);

    setIsSuggestionClicked(true); // Đánh dấu rằng một gợi ý đã được nhấp
    setInputValue(suggestion.name); // Cập nhật thanh tìm kiếm với gợi ý đã chọn
    setSuggestionsVisible(false);
    setView({
      category: "tags",
      tagId: suggestion.id.split("-")[0],
      itemId: suggestion.id,
    });
  };

  const handleSearch = () => {
    console.log("Searched:", inputValue);
    setInputValue(""); // Reset input sau khi tìm kiếm
    setSuggestionsVisible(false);
    setView((prev) => ({ ...prev, itemId: "" }));
  };

  const handleInputFocus = () => {
    if (inputValue) {
      setSuggestionsVisible(true);
    }
  };

  const handleInputBlur = () => {
    if (!isSuggestionClicked) {
      setSuggestionsVisible(false);
    }
    setIsSuggestionClicked(false); // Reset lại trạng thái sau khi xử lý xong
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm thẻ"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <button onClick={handleSearch}>
        <i className="fa fa-search"></i>
      </button>
      {suggestionsVisible && suggestions.length > 0 && (
        <div className="suggestions">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                id={`suggestion-${suggestion.id}`}
                onMouseDown={() => handleSuggestionClick(suggestion)} // Sử dụng onMouseDown để đảm bảo sự kiện diễn ra trước onBlur
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
