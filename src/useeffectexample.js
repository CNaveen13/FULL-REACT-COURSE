import React, { useState, useEffect } from "react";

const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=76ddfd554b524cbe9b114244925b7708";

const Final = () => {
  const [userdata, setuserdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [iserror, setiserror] = useState({ status: false, msg: "" });

  const fetchUserData = async (apiurl) => {
    setloading(true);
    setiserror({ status: false, msg: "" });
    try {
      const response = await fetch(apiurl);
      const data = await response.json();

      if (response.ok && data.articles) {
        setuserdata(data.articles);
      } else {
        throw new Error("Failed to fetch articles");
      }

      setloading(false);
    } catch (error) {
      setloading(false);
      setiserror({
        status: true,
        msg: error.message || "Something went wrong, please try again!",
      });
    }
  };

  useEffect(() => {
    fetchUserData(URL);
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (iserror?.status) {
    return (
      <div>
        <h2 style={{ color: "red" }}>{iserror?.msg}</h2>
      </div>
    );
  }

  if (!userdata.length) {
    return (
      <div>
        <h2>No articles available</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Learn useEffect</h1>
      <ul>
        {userdata.map((article, index) => {
          const { title, description } = article;
          return (
            <li key={index}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Final;
