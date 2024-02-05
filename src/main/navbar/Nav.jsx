import Cookies from "js-cookie";
import ButtonLogin from "../../component/ButtonLogin";
import SignOut from "../../sign/SignOut"
const Nav = () => {
  const isntLoggedIn = Cookies.get("login") === "false";
  const isLoggedIn = Cookies.get("login2") === "true"; // Assuming you set 'login' cookie to 'true' when the user logs in
  return (
    <div className="flex flex-col p-3 border rounded shadow-md m-3">
      <div className="navbar w-full h-full">
        <div className="navbar-start">
          <img
            src="https://www.digikala.com/statics/img/svg/logo.svg"
            width={150}
            height={40}
            alt=""
          />
        </div>
        <div className="navbar-end">
          {isLoggedIn && !isntLoggedIn ? (
          <SignOut />
          ) : (
            <div className="flex gap-2 items-center">
              <p className="text-xs text-slate-600">
                {" "}
                وارد حساب کاربری خود شوید
              </p>
              <ButtonLogin />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
