import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";
import Marketing from "./pages/Marketing";

import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>

      {/* Default Route */}

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Public Routes */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
    path="/forgot-password"
    element={<ForgotPassword />}
/>

      {/* Protected Routes */}

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/marketing" element={<Marketing />} />
        
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Unknown Routes */}

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}