import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/aut-context";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
