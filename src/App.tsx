import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Home from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}