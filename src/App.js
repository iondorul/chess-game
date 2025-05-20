import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameSelect from "./components/UI/GameSelect/GameSelect";
import Level from "./components/UI/Level/Level";
import FriendPlay from "./views/FriendPlay";
import GameScene from "./views/GameScene";
import MatchPlay from "./views/MatchPlay";
import Orientation from "./components/UI/Orientation/Orientation";
import Connect from "./components/UI/Connect/Connect";
import Ranking from "./components/UI/Ranking/Ranking";
import AddUserModal from "./components/UI/AddUser/AddUserModal";

function App() {
  const [orientation, setOrientation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    window.addEventListener("resize", function () {
      setOrientation(window.innerHeight > window.innerWidth);
    });
    setOrientation(window.innerHeight > window.innerWidth);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h2 style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: '#ffffff',
          zIndex: 10
        }}>
          Welcome, {username || "Guest"}!
        </h2>

        <button 
          onClick={() => setIsModalOpen(true)} 
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '8px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 10
          }}>
          Add User
        </button>

        <AddUserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={(name) => setUsername(name)}
        />

        <Routes>
          <Route path="/" element={<GameSelect />} />
          <Route path="/matchPlay" element={<MatchPlay />} />
          <Route path="/friendPlay/*" element={<FriendPlay />} />
          <Route path="/machinePlay" element={<Level />} />
          <Route path="/gameScene" element={<GameScene />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
        <Orientation show={orientation}></Orientation>
      </div>
    </BrowserRouter>
  );
}

export default App;
