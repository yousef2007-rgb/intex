import React from "react";
import axios from "axios";
import { Order } from "@/types/productsTypes";
import Link from "next/link";

const getOrder = async (id: string) => {
  const data = await axios.get(`${process.env.URL}/api/orders/${id}`);
  return data.data;
};

const Orders = async ({ params }: { params: { id: string } }) => {
  const order: Order = await getOrder(params.id);
  return (
    <div className="m-6">
      <div className="[&>*>span]:text-gray-700 rounded-md  shadow-md bg-white [&>*>span]:mx-2 h-fit flex flex-col border-black p-5 mb-4 font-bold ">
        <h1>
          Customer Id:<span>{order.user._id}</span>
        </h1>
        <h2>
          Customer Name:
          <span>{order.user.username}</span>
        </h2>
        <h3>
          Customer Phone:
          <span>{order.user.phone}</span>
        </h3>
        <h3>
          Customer Email:
          <span>{order.user.email}</span>
        </h3>
        <h4>
          Customer Location:
          <span>
            {order.user.location} in {order.user.city}
          </span>
        </h4>
        <div className="flex flex-col w-full my-4">
          <h1>Items:</h1>
          <div className="flex flex-wrap">
            {order.products.map((item, index) => (
              <div
                className="flex mx-2 justify-center items-center shadow-md my-2 flex-col w-fit max-w-xs rounded-md p-2"
                key={index}
              >
                <img
                  className="max-w-[100px] rounded-md my-2"
                  src={`${process.env.URL}/${item.imageUrl}`}
                />
                <div className="flex flex-col mx-4 text-center w-full">
                  <h1 className="my-2">{item.title}</h1>
                  <h1 className="text-gray-900 my-2">
                    {item.price}JOD x {item.quantity} ={" "}
                    {item.price * item.quantity}JOD
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <Link
            className="transition-all hover:text-green-500 bg-green-500 text-white hover:bg-white px-4 py-2 rounded-md my-2 capitalize border-2 border-green-500 w-full mr-2 text-center"
            href={`https://wa.me/${order.user.phone}`}
            target={"blank"}
          >
            contact on whatsapp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;
