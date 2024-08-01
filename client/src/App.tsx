import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import React from "react";
import { LocationList } from "./components/LocationList";
import UserLocationWrapper from "./components/UserLocationWrapper";
import { UserLocationProvider } from "./contexts/UserLocationContext";
import { Tooltip } from "primereact/tooltip";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <UserLocationProvider>
        <div>
          <h2>
            Explore
            <Tooltip target=".custom-target-icon" />
            <i
              className="custom-target-icon pi pi-info-circle p-text-secondary p-overlay-badge"
              data-pr-tooltip="Move the globe and see all your locations, click on a location to expand the information"
              data-pr-position="right"
              data-pr-at="right+5 top"
              data-pr-my="left center-2"
              style={{ marginLeft: "8px", cursor: "pointer" }}
            ></i>
          </h2>
          <UserLocationWrapper />
        </div>
        <LocationList />
      </UserLocationProvider>
    </div>
  );
};

export default App;
