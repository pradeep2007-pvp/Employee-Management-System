import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import LoginForm from "./components/LoginForm";
import Layout from "./pages/Layout";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payslips from "./pages/Payslips";
import Settings from "./pages/Settings";
import PrintPayslips from "./pages/PrintPayslips";

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Admin Login */}
        <Route
          path="/login/admin"
          element={
            <LoginForm
              role="admin"
              title="Admin Portal"
              subtitle="Sign in to manage the Organization"
            />
          }
        />

        {/* Employee Login */}
        <Route
          path="/login/employee"
          element={
            <LoginForm
              role="employee"
              title="Employee Portal"
              subtitle="Sign in to access your account"
            />
          }
        />

        {/* Admin Pages */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Employee Pages with Sidebar */}
        <Route
          path="/employee"
          element={
            <div className="flex min-h-screen bg-slate-50">
              <Sidebar />

              <main className="flex-1 min-w-0">
                <Routes>
                  <Route
                    path="dashboard"
                    element={<Dashboard />}
                  />

                  <Route
                    path="attendance"
                    element={<Attendance />}
                  />

                  <Route
                    path="leave"
                    element={<Leave />}
                  />

                  <Route
                    path="payslips"
                    element={<Payslips />}
                  />

                  <Route
                    path="settings"
                    element={<Settings />}
                  />
                </Routes>
              </main>
            </div>
          }
        />

        {/* Print Payslip */}
        <Route
          path="/print/payslips/:id"
          element={<PrintPayslips />}
        />

        {/* Default */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </>
  );
};

export default App;