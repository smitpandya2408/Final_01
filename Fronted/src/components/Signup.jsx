import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOpenLogin = () => {
    const dialog = document.getElementById("my_modal_3");
    if (dialog) dialog.showModal();
  };

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signupcd  successfully");
          localStorage.setItem("Users", JSON.stringify(res.data)); // ✅ Fix: stringify
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
        }
      });
  };

  return (
    <div className="fixed inset-0 flex h-screen items-center justify-center bg-opacity-40 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <form method="dialog">
          <Link
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            to="/"
          >
            ✕
          </Link>
        </form>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Signup</h3>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p> // ✅ Fix: fullname instead of name
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col items-center gap-2 mt-5">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200"
            >
              Signup
            </button>
            <p className="text-xl">
              Have an account?{" "}
              <span
                className="underline text-blue-500 cursor-pointer"
                onClick={handleOpenLogin}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>

      <Login />
    </div>
  );
}

export default Signup;
