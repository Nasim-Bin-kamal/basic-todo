import axios from "axios";
import { useEffect, useState } from "react";
import ShowPost from "../components/ShowPost";

const Contact = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <h2>THis is contact</h2>
      <ShowPost posts={posts} />
    </div>
  );
};

export default Contact;
