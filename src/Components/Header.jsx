import cl from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={cl.total}>
      <div className={cl.leftside}>
        <img src="pvphs.png" alt="" className={cl.icon} />
        <h1 className={cl.title}>PVPHS TEA</h1>
      </div>
    </div>
  );
};

export default Header;
