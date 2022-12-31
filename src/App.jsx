import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name={"Roma"} animal={"Dog"} breed={"German-Shepherd"} />
      <Pet name={"Chotti"} animal={"Cat"} breed={"Persian"} />
      <Pet name={"Bella"} animal={"Cat"} breed={"Persian"} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
