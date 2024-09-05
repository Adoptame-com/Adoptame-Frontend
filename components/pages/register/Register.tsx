"use client";
import React from "react";
import register from "../../../public/images/register.png";
import Image from "next/image";
import { Grandstander } from "next/font/google";

const Register = () => {
  
  return (
    <div className="flex h-screen w-full">
      <div className="w-[70%] flex items-start justify-start">
        <div className="relative h-[80%] w-[80%]">
          <Image
            src={register}
            alt="imagen"
            className="absolute z-0 rounded-br-[200px] h-full w-full object-cover"
          />
          <div className="absolute z-10 inset-0 bg-black opacity-50 rounded-br-[200px]"></div>
          <div
            className={`absolute z-10 text-white xl:ml-[19%] mt-10 text-5xl flex flex-col`}
          >
            ¿Listo para adoptar y cambiar
            <span>la vida de tu nuevo amigo?</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  flex-1">
        <div className="p-5 bg-red-500 rounded-2xl">
    holas
        </div>
      </div>
    </div>
  );
};

export default Register;
