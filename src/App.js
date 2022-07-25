import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import PropertyList from "./components/PropertyList";
import NoPage from "./components/NoPage";
import PropertyDetail from "./components/PropertyDetail";
import AddRentalHouse from "./components/AddRentalHouse";
import DeleteRentalHouse from "./components/DeleteRentalHouse";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<PropertyList />}></Route>
        <Route path="/PropertyDetail/:id" element={<PropertyDetail />} />
        <Route path="Sign" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="AddRentalHouse" element={<AddRentalHouse />} />
        <Route
          path="DeleteRentalHouse/:ts61n4i"
          element={<DeleteRentalHouse />}
        />

        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
