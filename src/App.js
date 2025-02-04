import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Reset/Reset.css";
import "./Vars/Vars.css";
import MainContent from "./MainContent/MainContent";

function App() {
  return (
    <div>
      <div class="main-container">
        <Header />
        <MainContent />
      </div>
      <Sidebar />
      <Footer />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
      />
    </div>
  );
}

export default App;
