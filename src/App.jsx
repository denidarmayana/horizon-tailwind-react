import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";

const App = () => {
  const username = localStorage.getItem("username");
  if(!username){
      window.location.href = '/auth/sign-in'
      return;
  }else{
    return (
      <Routes>
          <Route path="auth/*" element={<AuthLayout />} />
          <Route path="admin/*" element={<AdminLayout />} />
          <Route path="rtl/*" element={<RtlLayout />} />
          <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    );
  }
  
};

export default App;