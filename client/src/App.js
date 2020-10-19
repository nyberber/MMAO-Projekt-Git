import React from "react";
import "./App.css";

import UserList from "./components/UserList";

function App() {
    return (
        <div className="App">
            <button onClick={UserList}>Get Users</button>
        </div>
    );
}

export default App;
