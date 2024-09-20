import React, { createContext, useState } from "react";

// Tạo context để quản lý view
export const ViewContext = createContext();

// Provider để bọc quanh các component cần chia sẻ view
export const ViewProvider = ({ children }) => {
  const [view, setView] = useState({
    category: "main",
    tagId: null,
    itemId: "",
  });

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
