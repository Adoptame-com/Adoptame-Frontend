import React from "react";
import Login from "../../components/pages/login/login";

const page = () => {
  return (
    <main>
      <div className="flex flex-col ">
      <h1 className=" text-primarycolor font-bold text-2xl bg-custom-gray ">
            ¡Entra y encuentra a tu amigo ideal hoy!
          </h1>
        <div className="justify-center items-center">
          
          <form action="" >
            <h2 className="text-xl font-bold"> Inicia Sesión </h2>
            <p className="text-base">Email</p>
            <input
              className="rounded-custom border-black border-2 border-custom-gray-border"
              type="text"
              placeholder="adoptame"
            />
            <p className="text-base">Contraseña</p>
            <input
              className="rounded-custom border-black border-2 border-custom-gray-border"
              type="text"
              placeholder="Contraseña"
            />
            <button className="bg-secondarycolor rounded-custom w-[320px] h-[48px]">
              Ingresar
            </button>
          </form>
          <p>¿Olvidaste tu contraseña?</p>
          <button> Iniciar con google </button>
          <button>Registrarse</button>
        </div>
      </div>

      <div></div>
    </main>
  );
};

export default page;
