import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "constants/links";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="layout">
          <Routes>
            {routes.map((link) => {
              return (
                <Route key={link.id} path={link.url} element={link.component} />
              );
            })}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
