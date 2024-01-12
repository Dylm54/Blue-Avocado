import { Nav } from "../Components/Nav";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { UserContext } from "../Context";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
    const [userState, handleStateChange] = UserContext()
    const [totalDonasi, setTotalDonasi] = useState()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetch = await axios.get(`http://localhost:3000/donatur/1`)
                const response = await fetch.data
                setTotalDonasi(response.data.TotalDonasi)
                console.log(response.data.TotalDonasi)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    },[])

    console.log(userState)

    return (
        <div>
            <Nav />
            <div className="flex w-full px-7 pt-7 justify-between">
                <div className="flex flex-col gap-7 p-5 border rounded-md shadow min-w-60">
                    <div className="flex flex-row items-center gap-3">
                        <Avatar size="large" icon={<UserOutlined />} />
                        <p className="font-semibold">GDSC</p>
                    </div>
                    <a href="/payment">
                        <Button type="primary" className="bg-blue-500 h-10 w-full text-md font-semibold">Donate</Button>
                    </a>
                </div>
                <div className="flex flex-col gap-5 p-5 border rounded-md shadow">
                    <p className="font-semibold">Pool</p>
                    <div className="h-3 rounded-full w-96" style={{ backgroundColor: totalDonasi != "0" ? "#3B82F6" : "#F0F0F0" }}></div>
                    <div className="flex w-full">
                        <p>Rp{totalDonasi}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}