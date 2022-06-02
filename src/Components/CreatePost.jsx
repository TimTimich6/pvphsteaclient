import cl from "./CreatePost.module.css";
import RoundButton from "../Reusable/RoundButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";
import Loader from "../Reusable/Loader";

const CreatePost = (props) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setId(v4());
  }, []);

  async function submitHandle(e) {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    await axios
      .post(`${process.env.REACT_APP_URL || ""}/api/post`, { text, id })
      .then((resp) => {
        setText("");
        setFeedback(resp.data);
      })
      .catch((err) => {
        setFeedback(err.response.data);
      });
    setLoading(false);
  }
  return (
    <form className={cl.wrapper} onSubmit={(e) => submitHandle(e)}>
      <label htmlFor="text" className={cl.label}>
        Create Post
      </label>
      {feedback && <p className={cl.feedback}>Post status: {feedback}</p>}
      <textarea
        name="text"
        id="text"
        cols="40"
        rows="7"
        className={cl.input}
        placeholder="Write your slander here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
        Hello
      </textarea>
      <div className={cl.buttons}>{!loading ? <RoundButton cl={cl.button}>Post Slander</RoundButton> : <Loader />}</div>
    </form>
  );
};

export default CreatePost;
