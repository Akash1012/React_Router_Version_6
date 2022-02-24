import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const calling = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    if (Object.keys(data).length > 1) {
      navigate("order-summary");
    }
  };

  return (
    <>
      <div>Home Page</div>
      <button onClick={() => calling()}>Place order</button>
    </>
  );
};
