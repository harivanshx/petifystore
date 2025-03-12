import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/api/signup', values);
      toast.success(response.data.message || 'Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error(
        error.response?.data?.message || 'Signup failed! Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <ToastContainer />
        <h2 className="text-2xl mb-6 text-center">Create an Account</h2>
        <Form
          layout="vertical"
          onFinish={handleSignup}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter a username!' }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter a password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading} 
              block
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </Form.Item>
        </Form>
        <p className='text-sm text-center'>Already have an account? <a href="/login" className='text-blue-600'>Login</a></p>
      </div>
    </div>
  );
};

export default Signup;

// Let me know if you want me to refine this or add more fields! 🚀
