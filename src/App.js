import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import RecruitStatus from "./RecruitStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/project' element={<RecruitStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
