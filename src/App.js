import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import RecruitStatus from './components/RecruitStatus/RecruitStatus';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/project" element={<RecruitStatus />} />
    </Routes>
  );
}

export default App;
