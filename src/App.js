import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { loadUser } from "./app/auth/action/authAction";
import { AuthRouters } from "./app/auth/routings/AuthRouters";
import Alert from "./app/core/components/Alert";
import Footer from "./app/core/components/layouts/Footer";
import Header from "./app/core/components/layouts/Header";
import Landing from "./app/core/components/layouts/Landing";
import DashboardRouter from "./app/dashboard/routings/DashboardRouter";
import { ProfileRouters } from "./app/profile/routing/ProfileRouters";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  console.log("Testing auth form App.js");
}

function App() {
  // it should do some fundamental checks for token.
  // useEffect
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
      console.log("Testing useEffect form App.js");
    }
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Alert />
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/auth/*" element={<AuthRouters></AuthRouters>}></Route>
            <Route
              path="/dashboard/*"
              element={<DashboardRouter></DashboardRouter>}
            ></Route>
            <Route
              path="/profiles/*"
              element={<ProfileRouters></ProfileRouters>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
