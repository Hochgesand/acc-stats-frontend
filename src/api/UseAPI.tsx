import {useEffect, useState} from "react";
import APIService from "./APIService";

export default function UseAPI(method: string, ...params: any[]){
  const [data, setData]           = useState([] as any[]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]         = useState("");

  const fetchData = async () => {
    setError("");

    try {
      setIsLoading(true);
      // @ts-ignore
      setData(await APIService[method](...params));
      console.log(data)
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData() }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return { data, isLoading, error, fetchData };
}
