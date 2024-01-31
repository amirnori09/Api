import SignIn from "./signIn";


const Login = () => {

  return (
    <div className="flex flex-col border rounded-lg items-center p-6 space-y-6">
      <div className=" p-4">
        <img src="https://www.digikala.com/statics/img/svg/logo.svg" width={150} height={401} alt="" />
      </div>
      <div className="self-start space-y-4">
        <h1 className="text-slate-900 text-lg  ">ورود | ثبت‌نام</h1>
        <p className="text-slate-900 text-xs">سلام!</p>
        <p className="text-slate-900 text-xs">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
      </div>
      <SignIn />
      <p className="text-xs pb-2  text-slate-800">
        ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌خصوصیاست
      </p>
    </div>
  );
};

export default Login;
