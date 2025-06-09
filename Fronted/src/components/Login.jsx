import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:3000/user/login", userinfo);
      console.log(res.data);

      if (res.data) {
        toast.success("Login successfully")
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        document.getElementById("my_modal_3")?.close(); // Close modal after login
      }
    } catch (error) {
      if (error.response) {
        
        toast.error("Error: " + error.response.data.message);
      } else {
        console.log(error);
        alert("An error occurred.");
      }
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>
        </form>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Login</h3>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-around items-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Login
            </button>
            <p>
              Not Registered?{" "}
              <Link className="underline text-blue-500" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
