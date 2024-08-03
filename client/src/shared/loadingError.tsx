import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => (
  <div className="loading-container">
    <ProgressSpinner />
    <p>{message}</p>
  </div>
);

interface ErrorProps {
  message?: string;
}

export const Error: React.FC<ErrorProps> = ({
  message = "An error occurred",
}) => (
  <div className="error-container">
    <Message severity="error" text={message} />
  </div>
);
