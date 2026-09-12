// pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/Alert";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await api.post("/auth/admin/login", form);
      login(res.data.user, res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Invalid email or password.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-slate-200">
        <h1 className="text-2xl font-bold text-brand-700 mb-1">Admin Login</h1>
        <p className="text-slate-500 text-sm mb-6">College Attendance Management System</p>

        {message && <div className="mb-4"><Alert type={message.type} message={message.text} /></div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required
            className="border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <input
            name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required
            className="border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button
            type="submit" disabled={loading}
            className="bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-5">
          <Link to="/register" className="text-slate-400">First time here? Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
