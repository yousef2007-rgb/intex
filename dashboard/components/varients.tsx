"use client";
import React, { FC, useState } from "react";
import { Varient } from "@/types/productsTypes";
import AddIcon from "@/public/assets/icons/addIcon";
import { trashIcon as TrashIcon } from "@/public/assets/icons/trashIcon";
import { media as VarientsMedia } from "./varientsMedia";
import { Product } from "@/types/productsTypes";

const Varients = ({
  formData,
  setFormData,
}: {
  formData: Product;
  setFormData: any;
}) => {
  const [currentVarient, setCurrentVarient] = useState<Varient>({
    title: "",
    discription: "",
    title_ar: "",
    discription_ar: "",
    imageUrl: "",
    imagesUrls: [],
  });
  const [varientsFormVisability, setVarientsFormVisability] = useState(false);
  const handleVarientInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(value);
    setCurrentVarient({ ...currentVarient, [name]: value });
  };

  const handleExistingVarientInputChange = (index: number) => (e: any) => {
    const { name, value } = e.target;
    const coppy = formData.varients?.slice();
    if (formData.varients != undefined) {
      coppy?.splice(index, 1, { ...formData.varients[index], [name]: value });
    }

    setFormData({ ...formData, varients: formData.varients ? coppy : [] });
  };

  const handleDeleteVarient = (index: number) => (e: any) => {
    const coppy = formData.varients?.slice();
    if (formData.varients != undefined) {
      coppy?.splice(index, 1);
    }

    setFormData({ ...formData, varients: formData.varients ? coppy : [] });
  };

  const handleVarientSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      varients: formData.varients
        ? [...formData.varients, currentVarient]
        : [currentVarient],
    });
    setCurrentVarient({
      title: "",
      discription: "",
      title_ar: "",
      discription_ar: "",
      imageUrl: "",
      imagesUrls: [],
    });
    setVarientsFormVisability(false);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    setCurrentVarient({
      title: "",
      discription: "",
      title_ar: "",
      discription_ar: "",
      imageUrl: "",
      imagesUrls: [],
    });
    setVarientsFormVisability(false);
  };

  console.log(currentVarient);
  return (
    <div className="bg-white p-5 my-5 rounded-md shadow-md">
      <div className="flex w-full items-center justify-center">
        <h1 className=" text-gray-700 font-semibold h-fit">Varients</h1>{" "}
        <button
          className="ml-auto"
          onClick={(e: any) => {
            e.preventDefault();
            setVarientsFormVisability(true);
          }}
        >
          <AddIcon />
        </button>
      </div>
      {varientsFormVisability ? (
        <div className=" mx-auto [&>*]:outline-none w-full p-5 flex flex-col">
          <div className=" bg-gray-100 p-5 rounded-md shadow-md w-full ">
            <h1 className="mb-5 text-gray-700 font-semibold">
              Product Details
            </h1>
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={currentVarient.title}
              onChange={handleVarientInputChange}
              required
              maxLength={100}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label
              htmlFor="discription"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="discription"
              name="discription"
              onChange={handleVarientInputChange}
              required
              maxLength={920}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label
              htmlFor="title_ar"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title (Arabic)
            </label>
            <input
              type="text"
              id="title_ar"
              name="title_ar"
              value={currentVarient.title_ar}
              onChange={handleVarientInputChange}
              required
              maxLength={100}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label
              htmlFor="discription_ar"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description (Arabic)
            </label>
            <textarea
              id="discription_ar"
              name="discription_ar"
              onChange={handleVarientInputChange}
              required
              maxLength={920}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <VarientsMedia
              setVarient={setCurrentVarient}
              setFormData={setFormData}
              formData={formData}
              varientData={currentVarient}
            />

            <button
              onClick={handleVarientSubmit}
              className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>

            <button
              onClick={handleCancel}
              className="mx-2 bg-gray-300 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded"
            >
              cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        {formData.varients?.map((varient, index) => (
          <div
            key={index}
            className=" bg-gray-100 p-5 rounded-md shadow-md w-full my-5"
          >
            <div className="flex w-full items-center">
              <h1 className="mb-5 text-gray-700 font-semibold">
                Product Details
              </h1>
              <button
                className="ml-auto uppercase text-red-500"
                onClick={handleDeleteVarient(index)}
              >
                <TrashIcon />
              </button>
            </div>
            <label
              htmlFor={`title`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id={`title`}
              name={`title`}
              value={varient.title}
              onChange={handleExistingVarientInputChange(index)}
              maxLength={100}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label
              htmlFor={`discription`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id={`discription`}
              name={`discription`}
              value={varient.discription}
              onChange={handleExistingVarientInputChange(index)}
              maxLength={920}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label
              htmlFor={`title_ar`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title (Arabic)
            </label>
            <input
              type="text"
              id={`title_ar`}
              name={`title_ar`}
              value={varient.title_ar}
              onChange={handleExistingVarientInputChange(index)}
              maxLength={100}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label
              htmlFor={`disciption_ar`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description (Arabic)
            </label>
            <textarea
              id={`disciption_ar`}
              name={`disciption_ar`}
              value={varient.discription_ar}
              onChange={handleExistingVarientInputChange(index)}
              maxLength={920}
              className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />
            {/*
                        <div className='flex items- flex-col'>
                            <img className="max-w-[150px] rounded-md" src={`${process.env.URL}/${varient.imageUrl}`} />
                            <button className='bg-blue-500 max-w-[150px] rounded-md my-2 text-white font-semibold capitalize h-fit p-2'>change image</button>
                        </div>
                        */}

            <VarientsMedia
              index={index}
              setVarient={setCurrentVarient}
              setFormData={setFormData}
              formData={formData}
              defaultImage={`${process.env.URL}/${varient.imageUrl}`}
              varientData={currentVarient}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Varients;
