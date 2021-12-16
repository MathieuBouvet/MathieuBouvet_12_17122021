import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";

import styles from "./app.module.scss";

const Hello = () => <div>Hello World ;)</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Hello />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
