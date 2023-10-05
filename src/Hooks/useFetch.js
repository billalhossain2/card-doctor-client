import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(url)
  .then(res => res.json())
  .then(data => setData(data))
  .catch(error => console.log(error.message))
  }, [])
  return data;
}

export default useFetch