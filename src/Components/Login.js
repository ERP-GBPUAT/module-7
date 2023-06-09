import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
import { Button, Checkbox, Form, Input } from 'antd';
// import backebdEndpoint from '../../endpoint';
// import isLoggedIn from '../../utils/isLoggedIn';
import "./login.css"
// import axios from 'axios';
export const Login = ({ setUserdetails,setIsLoggedIn,isLoggedIn,userdetails}) => {
    const [email, setEmail] = useState('student@gmail.com')
    const [password, setPassword] = useState('student')
    const [loading, setLoading] = useState(false)
    const [failed,setfailed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            window.localStorage.setItem("userdetails",JSON.stringify(userdetails));
            if(userdetails.level == 0){
                navigate("/student");
            }
            else if(userdetails.level == 1 || userdetails.level == 2 || userdetails.level == 3){
                navigate("/admin");
            }
        }
    }, [userdetails])
    
    const loginUser = ()=>{
        fetch("http://localhost:8080/hostelcomplaint/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then((res)=>res.json()).then((data)=>{
            console.log(data.data);
            if(data.message === "sucess"){
                setUserdetails(data.data);
                setIsLoggedIn(true);
            }
            else {
                setfailed(true);
            }
        })
    }
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src="images/hostel_poster.jpeg" alt="Login" style={{
                        paddingRight:"20px"
                    }}/>
                </div>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to the Dashboard</p>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading} onClick={()=>loginUser()}>
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};