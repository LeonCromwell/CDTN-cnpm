import React from "react";
import Header from "./components/Header/Header";
import Contents from "./components/Contents/Contents";
import { ViewProvider } from "./context/viewContext/viewContext";

function App() {
  return (
    <ViewProvider>
      <div className="App">
        <Header />
        <Contents />
      </div>
    </ViewProvider>
  );
}

export default App;
