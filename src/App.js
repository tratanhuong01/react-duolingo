import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { QuestionProvider } from "./contexts/QuestionContext/QuestionContext";
import routes from "./routes/routes";

function App() {
  //
  //
  return (
    <QuestionProvider>
      <Router>
        <div className="w-full h-screen ">
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route key={index} element={route.element} path={route.path} />
              )
            })}
          </Routes>
        </div>
      </Router>
    </QuestionProvider>
  );
}

export default App;
