import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, notification } from 'antd';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import './Register.scss'
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
 
  const handleSubmit = async (values) => {
    try {
      const response = await Axios.post('http://localhost:3200/api/v1/auth/register', values);
      console.log(response);
      notification.success({
        message: 'Usuario creado correctamente',
        description: 'Registro Exitoso',
        placement: 'bottomRight'
      });
      navigate("/Login");
    } catch (error) {
      console.error('Error al obtener datos:', error);
      notification.error({
        message: 'Usuario no registrado',
        description: 'Revise los datos. Todos los campos son requeridos',
        placement: 'bottomRight'
      });
    }
  };

  return (
    <div className="register-form">
      <h1 className="register-title">SignUp</h1>
      <Form onFinish={handleSubmit} name="normal_login" className="register-form">
        <Form.Item name="firstname">
          <Input prefix={<UserOutlined />} placeholder="Firstname" onChange={(e) => setData({ ...data, firstname: e.target.value })} />
        </Form.Item>
        <Form.Item name="lastname">
          <Input prefix={<UserOutlined />} placeholder="Lastname" onChange={(e) => setData({ ...data, lastname: e.target.value })} />
        </Form.Item>
        <Form.Item name="email">
          <Input prefix={<UserOutlined />} placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password prefix={<LockOutlined />} placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};