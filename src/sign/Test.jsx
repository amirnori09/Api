import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import OtpCode from "./OtpCode"; // Import the OtpInput component
import Timer from "../component/Timer";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [otp, setOtp] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value.length > 6) return;
    setOtp(value);
  };

//   const onSubmit = (data) => {
//     axios
//       .post("http://194.33.105.22/api/user/register_login", data)
//       .then(function (data) {
//         console.log(data);
//         // Show the OtpCode component when the form is submitted successfully
//         setShowPage1(false);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

// main axios
// const onSubmit = (data) => {
//   axios
//     .post("http://194.33.105.22/api/user/register_login", data)
//     .then(function () {
//       // Extract the phone number from the submitted data
//       const phone_number = data.phone_number; // Replace "phoneNumber" with the actual field name in the submitted data

//       // Display the received data in the message
//       const message = `کد تایید برای شماره ${phone_number} پیامک شد `;
//       console.log(message);

//       // Show the OtpCode component when the form is submitted successfully
//       setShowPage1(false);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
// main axios



  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = (data) => {
    axios
      .post("http://194.33.105.22/api/user/register_login", data)
      .then(function () {
        // Extract the phone number from the submitted data
        const phone_number = data.phone_number; // Replace "phoneNumber" with the actual field name in the submitted data
        setPhoneNumber(phone_number); // Store the phone number in the component's state

        // Display the received data in the message
        const message = `کد تایید برای شماره ${phone_number} پیامک شد `;
        console.log(message);

        // Show the OtpCode component when the form is submitted successfully
        setShowPage1(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  const [showPage1, setShowPage1] = useState(true);

  return (
    <>
      {showPage1 ? (
        <div className="flex flex-col border rounded-lg items-center p-6 space-y-6">
          <div className=" p-4">
            <img
              src="https://www.digikala.com/statics/img/svg/logo.svg"
              width={150}
              height={401}
              alt=""
            />
          </div>
          <div className="self-start space-y-4">
            <h1 className="text-slate-900 text-lg font-semibold ">
              ورود | ثبت‌نام
            </h1>
            <p className="text-slate-900 text-xs">سلام!</p>
            <p className="text-slate-900 text-xs">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 ">
            <div className="space-y-3">
              <input
                {...register("phone_number", {
                  required: "لطفا این قسمت را خالی نگذارید",
                  pattern: {
                    value: /^09[0-9]{9}$/,
                    message: "شماره موبایل نادرست است",
                  },
                })}
                className="input input-error bg-white focus:outline-none w-full"
              />
              {errors.phone_number && (
                <p className="text-xs text-red-500">
                  {errors.phone_number.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="rounded-md p-2.5 text-sm bg-[#EF4056] text-[#ffffff] w-full"
            >
              ورود
            </button>
          </form>

          <p className="text-xs pb-2  text-slate-800">
            ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌خصوصیاست
          </p>
        </div>
      ) : (
        // <OtpCode /> // Show the OtpInput component when showPage1 is false
        <form className="flex flex-col border rounded-lg items-center p-6 space-y-6">
          <div className=" p-4">
            <img
              src="https://www.digikala.com/statics/img/svg/logo.svg"
              width={150}
              height={401}
              alt=""
            />
          </div>
          <div className="self-start space-y-4">
            <h1 className="text-slate-900 text-lg font-semibold ">
              کد تایید را وارد کنید
            </h1>
            <p className="text-xs text-slate-600">کد تایید برای شماره : {phoneNumber}</p>
          </div>
          <div className="w-full">
            <input
              type="text"
              value={otp}
              onChange={handleChange}
              maxLength={6}
              className="input input-info w-full bg-white focus:outline-none text-slate-500 text-sm text-center"
            />
          </div>
          <Timer />
          <p className="text-xs pb-2  text-slate-800">
            ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌خصوصیاست
          </p>
        </form>
      )}
    </>
  );
};

export default SignIn;
