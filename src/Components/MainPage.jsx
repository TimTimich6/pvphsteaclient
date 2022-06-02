import CreatePost from "./CreatePost";
import cl from "./MainPage.module.css";
import PostStream from "./PostStream";

const MainPage = (props) => {
  return (
    <div className={cl.total}>
      <div className={cl.howto}>
        <h1>How does this work?</h1>
        <p>
          Anynomously post any slander regardless PVPHS or PV area in general. It can be trash talk, leaks, disses. Posts will be deleted
          automatically after 24 hours.{" "}
        </p>
      </div>
      <CreatePost />
      <PostStream />
    </div>
  );
};

export default MainPage;
