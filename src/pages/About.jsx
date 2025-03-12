import React from "react";
import Navbar from "../Components/Global/Navbar";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-blue-600">About Us</h1>
          <p className="text-gray-700 text-lg mb-4">
            Welcome to our platform! We are a passionate team of developers,
            designers, and innovators dedicated to creating impactful digital
            experiences. Our goal is to leverage cutting-edge technology to
            solve real-world problems and deliver high-quality solutions for our
            users.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to empower individuals and businesses through
            technology. Whether it's web development, mobile apps, or AI-driven
            tools, we aim to push boundaries and continuously evolve to meet the
            demands of a rapidly changing digital landscape.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Expertise in modern technologies</li>
            <li>Client-centered approach</li>
            <li>Agile and iterative development process</li>
            <li>Commitment to quality and innovation</li>
          </ul>
          <p className="text-gray-700">
            Thank you for being a part of our journey. We’re excited to
            collaborate and build something extraordinary together!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
