import React from 'react'

const Login = () => {
  return <div><div className="flex flex-col ">
    <h1 className=" text-primarycolor font-bold text-2xl bg-custom-gray ">
          ¡Entra y encuentra a tu amigo ideal hoy!
        </h1>
      <div className="justify-center items-center">
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
        <p>¿Olvidaste tu contraseña?</p>
        <button> Iniciar con google </button>
        <button>Registrarse</button>
      </div>
    </div>

    <div></div>
    </div>
}

export default Login