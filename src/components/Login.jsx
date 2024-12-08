import Header from "./Header";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigateTo = useNavigate();
  const { setLoggedInUser } = useContext(LoggedInUserContext);
  const [password] = useState("password");

  const defaultUser = {
    username: "cooljmessy",
    name: "Ricky Huang",
    avatar_url:
      "https://avatars.githubusercontent.com/u/101099288?s=96&v=4",
    email: "huang.riq@northeastern.edu",
    phone: "123-456-7890"
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoggedInUser(defaultUser);
    localStorage.setItem("loggedInUser", JSON.stringify(defaultUser));
    navigateTo(-1);
  };

  return (
    <>
      <Header />
      <div className="mt-40 flex h-screen justify-center">
        <div className="w-2/3 md:w-1/3">
          <form onSubmit={handleLogin}>
            <fieldset className="rounded border px-4 pb-8 pt-4">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="mb-4 block w-full rounded border p-1"
                name="username"
                id="username"
                value={defaultUser.username}
                readOnly={true}
              />
              <label htmlFor="password">Password:</label>
              <input
                className="block w-full rounded border p-1"
                type="password"
                name="password"
                id="password"
                value={password}
                readOnly={true}
              />
              <button
                title="Login"
                className="mb-2 mt-8 w-full rounded border bg-brand-primary px-4 py-2 text-white hover:bg-brand-secondary"
                type="submit"
              >
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
