import React from "react";
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";


const App: React.FC = () => {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <TodosPage />
      </div>
    </>
  );
};

export default App;
