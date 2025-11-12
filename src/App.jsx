import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  
  return (
    <>
      {!user ? (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}
