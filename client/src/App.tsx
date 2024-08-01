import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import React from "react";
import { LocationList } from "./components/LocationList";
import UserLocationWrapper from "./components/UserLocationWrapper";
import { UserLocationProvider } from "./contexts/UserLocationContext";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Kuyua Dashboard</h1>
      <UserLocationProvider>
        <UserLocationWrapper />
        <LocationList />
      </UserLocationProvider>
    </div>
  );
};

export default App;
