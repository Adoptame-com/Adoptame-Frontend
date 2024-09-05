import { UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any, any>
  label: string;
  name: string;
};

const InputText = ({ label, name, form }: props) => {

  const { register } = form;
  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="input" className="text-lg">
        {label}
      </label>
      <input
        type="text"
        placeholder="First Name"
        id={name}
        {...register(name)}
        className="py-4 px-5 rounded-2xl border-[2px] border-[#D2D2D2]"
      />
    </div>
  );
};

export default InputText;
