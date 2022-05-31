import "./styles.css";
import { render } from "react-dom";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { Provider } from "./Context.js";

function App() {
  return (
    <Provider>
      <Navbar />
      <Main />
      <Footer />
    </Provider>
  );
}

render(<App />, document.querySelector("#root"));
