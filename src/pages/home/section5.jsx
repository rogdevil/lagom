import './section5.css';
import React from 'react';
import { Star, Bell, Users, Clock } from 'lucide-react';
import Logo from '../../assets/images/logo-1.jpg';

const SectionFive = () => {
  return (
    <div className="section5-wrapper">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="hero-chip w-fit">
            <p>Task Management</p>
          </div>

          <h1 className="text-5xl font-bold mb-[40px] text-[#111111] leading-tight">
            All Your Tasks,
            <br />
            Organized Effortlessly
          </h1>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold">Timeline View</h3>
              <p className="text-gray-600">Visualize tasks and deadlines at a glance.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold">Project Management</h3>
              <p className="text-gray-600">Manage projects with priorities and due dates.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-gray-600">Connect through task comments and updates.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold">Notifications</h3>
              <p className="text-gray-600">Stay updated with alerts for key changes.</p>
            </div>
          </div>
        </div>

        {/* App Interface Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
