// import React, { useState, useRef } from "react";

// const OtpCode = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Initialize state for 6 input fields
//   const inputRefs = [
//     useRef(),
//     useRef(),
//     useRef(),
//     useRef(),
//     useRef(),
//     useRef(),
//   ]; // Create refs for each input field

//   const handleOtpChange = (index, event) => {
//     const value = event.target.value;
//     if (isNaN(value)) return; // Only allow numeric input
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Auto focus to the next input field
//     if (value && index < 5) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   const handleOtpPaste = (event) => {
//     event.preventDefault();
//     const paste = event.clipboardData.getData("text/plain");
//     if (paste.length === 4 && !isNaN(paste)) {
//       setOtp(paste.split(""));
//     }
//   };

//   return (
//     <div className="flex flex-col border rounded-lg items-center p-6 space-y-6">
//       <div className=" p-4">
//         <img
//           src="https://www.digikala.com/statics/img/svg/logo.svg"
//           width={150}
//           height={401}
//           alt=""
//         />
//       </div>
//       <div className="self-start space-y-4">
//         <h1 className="text-slate-900 text-lg font-semibold ">
//           ورود | ثبت‌نام
//         </h1>
//         <p className="text-slate-900 text-xs">سلام!</p>
//         <p className="text-slate-900 text-xs">
//           لطفا شماره موبایل یا ایمیل خود را وارد کنید
//         </p>
//       </div>

//

//
//     </div>
//   );
// };

// export default OtpCode;

import React, { useState, useRef } from "react";
import Timer from "../component/Timer";

const OtpInput = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value.length > 6) return;
    setOtp(value);
  };

  return (
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
        <p className="text-slate-900 text-xs">
        کد تایید برای شماره {} پیامک شد
        </p>
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
  );
};

export default OtpInput;
