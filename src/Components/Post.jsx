import cl from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={cl.post}>
      <div className={cl.topPart}>
        <img className={cl.pfp} src="./default-avatar.png" alt="" />
        <h3 className={cl.username}>anon{props.id.substring(0, 8)}</h3>
        <p className={cl.time}>Deletes on {new Date(props.time).toString().substring(0, 24)}</p>
      </div>
      <p className={cl.text}>{props.children}</p>
    </div>
  );
};

export default Post;
