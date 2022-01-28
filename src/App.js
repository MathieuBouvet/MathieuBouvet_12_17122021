import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/user/12" />} />
          <Route path="/user/:userId" element={<UserDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
