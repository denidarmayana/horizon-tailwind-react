import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/auth/sign-in");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    // Bisa return loading spinner atau apapun selama pengecekan selesai
    return (
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
