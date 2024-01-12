import { Nav } from "../Components/Nav";
import { Button, Form, InputNumber, Modal, Input } from "antd";
import { useState, useEffect } from "react";
import FormItem from "antd/es/form/FormItem";
import { LockOutlined } from "@ant-design/icons";
import axios from 'axios'

export const Payment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nominal, setNominal] = useState()
    const [userPassword, setUserPassword] = useState()
    const [inputedPassword, setInputtedPassword] = useState()
    const [PasswordFalse, setPasswordFalse] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetch = await axios.get(`http://localhost:3000/donatur/1`)
                const response = await fetch.data
                setUserPassword(response.data.Password)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    },[])

    const handleOk = (values) => {
        setLoading(true);
        const fetchDonate = async () => {
            try {
                const response = await axios.post("http://localhost:3000/donasi/1", { Nominal: nominal })
                console.log(response.data)
                setTimeout(() => {
                    setLoading(false);
                    window.location = "/"
                }, 2000);              
            } catch (error) {
                console.log(error)
            }
        }
        console.log(values)
        if (inputedPassword == userPassword) {
            fetchDonate()
        } else {
            setPasswordFalse(true)
            setLoading(false);
        }
        

    };

    const handleCancel = () => {
        setPasswordFalse(false)
        setIsModalOpen(false);   
    };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        setNominal(values.nominal)
        setIsModalOpen(true);
    };

    console.log(inputedPassword)

    return (
        <>
            <Nav />
            <div className="flex w-full justify-center">
                <div className="flex flex-col gap-7 p-5 mt-7 border rounded-md shadow">
                    <h1 className="font-semibold text-lg text-center mb-3">How much do you want to donate?</h1>
                    <Form
                        name="normal_login"
                        className="w-full"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="nominal"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the nominals",
                                },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                prefix="Rp"
                                placeholder="Nominals in Rupiah"
                                className="py-2 pl-4 w-80 rounded-lg"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                color="blue.primary"
                                block
                                htmlType="submit"
                                
                                className="mt-3 bg-blue-500 text-white bg-[#4096FF] hover:text-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 text-center"
                            >
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                    <Modal
                        title="Input your password to confirm"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Return
                            </Button>,
                            <Button key="submit" type="primary" className="bg-blue-500" loading={loading} onClick={handleOk}>
                                Confirm
                            </Button>,
                        ]}
                    >
                        <Form>
                            <FormItem
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "",
                                    },
                                ]}
                            >
                                <Input
                                prefix={<LockOutlined className="" />}
                                type="password"
                                placeholder="Password"
                                onChange={e => setInputtedPassword(e.target.value)}
                                className="py-2 pl-4 rounded-lg"
                                />  
                                <div className="ml-1 text-[#ff4d4f]" style={{ display: PasswordFalse ? "block" : "none" }} >Incorrect Password!</div>
                            </FormItem>
                        </Form>
                    </Modal>
                </div>
            </div>
        </>

    )
}