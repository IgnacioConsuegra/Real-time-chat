import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Mail, MessageSquare } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { AuthImagePattern } from "../components/AuthImagePattern.jsx";
import toast from "react-hot-toast";

export const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { forgotPassword, passwordEmailSent } = useAuthStore();
  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    return true;
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    const success = validateForm();
    if (success === true) forgotPassword(formData);
  };
  if (passwordEmailSent) {
    return <Navigate to="/" />;
  }
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">
                Get your username or password
              </h1>
              <p className="text-base-content/60">Just give us your email.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40 z-40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already know your username and password?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};
