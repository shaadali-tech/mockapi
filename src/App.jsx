import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setdata(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Here is the list of data</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
