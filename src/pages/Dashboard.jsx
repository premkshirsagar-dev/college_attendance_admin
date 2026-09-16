// pages/Dashboard.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar title="Admin Dashboard" />
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-800">Administrator Panel</h2>
          <p className="text-slate-500 text-sm mt-1">
            Manage teacher accounts for the College Attendance Management System.
          </p>
        </div>

      <Link to="/students" className="block bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-brand-400 hover:shadow-md transition">
            <h3 className="font-semibold text-brand-700">Manage Students</h3>
            <p className="text-sm text-slate-500 mt-1">Add, edit, search, or remove student accounts.</p>
          </Link>

          <Link to="/teachers" className="block bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-brand-400 hover:shadow-md transition">
            <h3 className="font-semibold text-brand-700">Manage Teachers</h3>
            <p className="text-sm text-slate-500 mt-1">Add, edit, search, or remove teacher accounts.</p>
          </Link>

          <Link to="/attendance/take" className="block bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-brand-400 hover:shadow-md transition">
            <h3 className="font-semibold text-brand-700">Take Attendance</h3>
            <p className="text-sm text-slate-500 mt-1">Mark today's (or any date's) attendance by class.</p>
          </Link>

          <Link to="/attendance/records" className="block bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-brand-400 hover:shadow-md transition">
            <h3 className="font-semibold text-brand-700">Attendance Records</h3>
            <p className="text-sm text-slate-500 mt-1">Browse & filter historical attendance, view rankings.</p>
          </Link>

          <Link to="/admins" className="block bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-brand-400 hover:shadow-md transition">
            <h3 className="font-semibold text-brand-700">Manage Admins</h3>
            <p className="text-sm text-slate-500 mt-1">Add or remove other administrator accounts.</p>
          </Link>
          <h3 className="font-semibold text-brand-700">Manage Teachers</h3>
          <p className="text-sm text-slate-500 mt-1">Add, edit, search, or remove teacher accounts.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
