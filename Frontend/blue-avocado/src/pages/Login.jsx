import React from "react";
import '../index.css'
import { Button, Form, Image, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { UserContext } from "../Context";
import { NavLink } from "react-router-dom";
import { Nav } from "../Components/Nav";

const Login = () => {
    const [userData, setUserData] = useState({})
    const [userState, handleStateChange] = UserContext()

    const onFinish = (values) => {
        setUserData(values)
        handleStateChange(values.username)

    };

    console.log(userData)
    console.log(userState)

    return (
        <>
            <div className="grid place-content-center donGrad h-svh">
                <div className="h-96 md:w-96 flex flex-col items-center bg-white  border border-gray-200 p-4 rounded-md shadow-md">
                    <div className="mt-8 mb-8">
                        <h1 className="font-bold text-blue-500 text-xl">Donasila</h1>
                    </div>

                    <Form
                        name="normal_login"
                        className="w-full"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Username!",
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="" />}
                                placeholder="Username"
                                className="py-2 pl-4 rounded-lg"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="" />}
                                type="password"
                                placeholder="Password"
                                className="py-2 pl-4 rounded-lg"
                            />
                        </Form.Item>

                        <Form.Item>
                                <Button
                                    type="primary"
                                    color="blue.primary"
                                    block
                                    htmlType="submit"
                                    className="mt-10 bg-blue-500 text-white bg-[#4096FF] hover:text-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 text-center"
                                >
                                    <NavLink to="/" className="flex w-full justify-center" >Log in</NavLink>
                                </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex flex-row justify-center gap-1 mt-4">
                        <p className="text-sm">Don't have an account? </p>
                        <Button type="link" href="/register" className="p-0 leading-tight">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
