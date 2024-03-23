import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListenerProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSetectedTab] = useState("Home");

  return (
    <PostListenerProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSetectedTab={setSetectedTab} />
        <div className="content">
          <Header />
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </PostListenerProvider>
  );
}

export default App;
