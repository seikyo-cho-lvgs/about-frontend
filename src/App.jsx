import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <div className="profile">
    <Header />
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="Avatar"
        width="200"
        height="200"
      />
      <p>Web designer</p>
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
