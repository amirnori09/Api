import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Timer from "../component/Timer";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

toast.success({
  style: {
    color: "white",
    backgroundColor: "#28a745",
  },
});

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State to track loading state
  const [loading, setLoading] = useState(false);

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    onSubmit(); // Call the onSubmit function to verify the OTP
  };

  const [otp, setOtp] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value.length > 6) return;
    setOtp(value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (data) => {
    if (showPage1) {
      const phoneNumber = Number(data.phone_number);
      setLoading(true);
      axios
        .post("http://194.33.105.22/api/user/register_login", {
          phone_number: phoneNumber,
        })
        .then(function (response) {
          setPhoneNumber(phoneNumber);
          setShowPage1(false);
          const message = `کد تایید برای شماره ${phoneNumber} پیامک شد`;
          toast.success(message);
        })
        .catch(function (error) {
          if (error.response) {
          Cookies.set('login', 'false')
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            toast.error(error.response.data.message); // Display the error message from the response
          } else if (error.request) {
            // The request was made but no response was received
            toast.error("خطا در برقراری ارتباط با سرور");
          } else {
            // Something happened in setting up the request that triggered an Error
            toast.error("خطای ناشناخته رخ داده است");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const otpNumber = Number(otp);
      setLoading(true);
      axios
        .post("http://194.33.105.22/api/user/check_otp_user", {
          phone_number: phoneNumber,
          otp: otpNumber,
        })
        .then(function (response) {
          const message = response.data.message;
          toast.success(message);
          Cookies.set('login2' , 'true')
          navigate("/");
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            toast.error(error.response.data.message);
             // Display the error message from the response
          } else if (error.request) {
            // The request was made but no response was received
            toast.error("خطا در برقراری ارتباط با سرور");
          } else {
            // Something happened in setting up the request that triggered an Error
            toast.error("خطای ناشناخته رخ داده است");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const [showPage1, setShowPage1] = useState(true);

  return (
    <div className="h-screen flex justify-center items-center">
      {showPage1 ? (
        <div className="flex flex-col border rounded-lg items-center p-6 space-y-6 shadow-2xl">
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
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
            <div>
              <button
                type="submit"
                className="rounded-md p-2.5 text-sm bg-[#EF4056] text-[#ffffff] w-full relative"
                disabled={loading} // Disable the button when loading
              >
                {loading ? ( // Check if loading is true
                  <div className=" flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ffffff]"></div>
                  </div>
                ) : (
                  "ورود" // Show "ورود" text when not loading
                )}
              </button>
            </div>
          </form>
          <p className="text-xs pb-2  text-slate-800">
            ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌خصوصیاست
          </p>
        </div>
      ) : (
        // <OtpCode /> // Show the OtpInput component when showPage1 is false
        <form
          className="flex flex-col border rounded-lg items-center p-6 space-y-6 shadow-2xl"
          onSubmit={handleOtpSubmit}
        >
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
            <p className="text-xs text-slate-600">
              کد تایید برای شماره {phoneNumber} ارسال شد
            </p>
          </div>
          <div className="w-full">
            <input
              type="text"
              value={otp}
              onChange={handleChange}
              maxLength={6}
              className="input input-error w-full bg-white focus:outline-none text-slate-500 text-sm text-center"
            />
          </div>
          <button
            type="submit"
            className="rounded-md p-2.5 text-sm bg-[#EF4056] text-[#ffffff] w-full relative"
            disabled={loading} // Disable the button when loading
          >
            {loading ? ( // Check if loading is true
              <div className=" flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ffffff]"></div>
              </div>
            ) : (
              "تایید کد" // Show "تایید کد" text when not loading
            )}
          </button>

          <Timer />
          <p className="text-xs pb-2  text-slate-600">
            ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌خصوصیاست
          </p>
        </form>
      )}
      <Toaster
        position="bottom-center"
        richColors
        toastOptions={{
          style: {
            fontFamily: "Vazir",
          },
        }}
      />
    </div>
  );
};

export default Login;
