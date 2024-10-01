import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Current username:", username);
    if (!username) {
      toast.error("Username tidak boleh kosong!", {
        position: "top-right",
      });
      return;
    }

    if (!password) {
      toast.error("Password tidak boleh kosong!", {
        position: "top-right",
      });
      return;
    }
    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "SebaraKey2024",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();

      if (data.code === 200) {
        toast.success(data.message, {
          position: "top-right",
        });
        localStorage.setItem("username",username);
        setTimeout(()=>{
          window.location.href = '/admin/default'
        },2000)
      } else {
        toast.error(data.message, {
          position: "top-right",
        });
        console.log("Login failed:", data.message);
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
      });
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Masuk
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Silahkan masukan Username dan Password
        </p>
        
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Username*"
          placeholder="sebara0001"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="******"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          onClick={handleLogin}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Masuk
        </button>
        <div className="mb-6 mt-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> atau </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-red-600 hover:cursor-pointer dark:bg-red-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 text-white">
            Masuk Dengan Google
          </h5>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
