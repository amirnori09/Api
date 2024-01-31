import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="space-y-3">
          <input
            {...register("phone_number", {
              required: "لطفا این قسمت را خالی نگذارید",
              pattern: {
                value:  /^09[0-9]{9}$/,
                message: "شماره موبایل نادرست است",
              },
            })}
            className="input input-error bg-white focus:outline-none w-full"
          />
                {errors.phone_number && <p className="text-xs text-red-500">{errors.phone_number.message}</p>}
        </div>
        <button
          type="submit"
          className="rounded-md p-2.5 text-sm bg-[#EF4056] text-[#ffffff] w-full"
        >
          ورود
        </button>
      </form>
    </>
  );
};

export default SignIn;
