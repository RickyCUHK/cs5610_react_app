import { useContext, useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Article from "./components/Article";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Info from "./components/InfoPage";
import { SmallScreenContext } from "./contexts/SmallScreen";
import { LoggedInUserContext } from "./contexts/LoggedInUser";

const App = () => {
  const { setIsSmallScreen } = useContext(SmallScreenContext);
  const { setLoggedInUser } = useContext(LoggedInUserContext);

  useLayoutEffect(() => {
    const previouslyLoggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser"),
    );
    setLoggedInUser(previouslyLoggedInUser);

    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/articles/:article_id" element={<Article />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/info" element={<Info />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
