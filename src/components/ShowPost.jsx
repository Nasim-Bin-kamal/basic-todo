const ShowPost = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  );
};

export default ShowPost;
