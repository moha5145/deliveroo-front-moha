import "./reset.css";
import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Head from "./components/Head";
import MainSection from "./components/MainSection";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showBasket, setShowBasket] = useState(false);
  const [counter, setCounter] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-back-clone.onrender.com/");

      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header showBasket={showBasket} setShowBasket={setShowBasket} counter={counter} setCounter={setCounter} />
      {isLoading ? <p>Loading ... </p> : <Head data={data} />}

      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <MainSection data={data} showBasket={showBasket} setShowBasket={setShowBasket} counter={counter} setCounter={setCounter} />
      )}
    </div>
  );
}

export default App;
