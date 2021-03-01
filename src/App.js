import React from "react";
import NavBar from "./components/profile/navbar/NavBar";
import Header from "./components/profile/header/Header";
import Posts from "./components/profile/posts/Posts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Posts />
    </div>
  );
}

export default App;
