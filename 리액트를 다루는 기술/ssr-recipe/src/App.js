import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

const App = () => {
  return (
    <div>
      <p>Hello World</p>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" Component={RedPage} />
        <Route path="/blue" Component={BluePage} />
      </Routes>
    </div>
  );
};

export default App;
