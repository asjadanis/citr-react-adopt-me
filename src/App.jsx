import React from "react";
import { createRoot } from "react-dom/client";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Roma",
      animal: "Dog",
      breed: "German-Shepherd",
    }),
    React.createElement(Pet, {
      name: "Chotti",
      animal: "Cat",
      breed: "Persian",
    }),
    React.createElement(Pet, {
      name: "Bella",
      animal: "Cat",
      breed: "Persian",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
