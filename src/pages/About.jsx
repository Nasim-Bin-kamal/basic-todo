import useTodos from "../hooks/useTodos";

const About = () => {
  const [todos] = useTodos([]);
  console.log(todos);
  return (
    <div>
      <h2>THis is about</h2>
      {todos.map((todo, i) => (
        <p key={i}>
          {i}--
          {todo.title}
        </p>
      ))}
    </div>
  );
};

export default About;
