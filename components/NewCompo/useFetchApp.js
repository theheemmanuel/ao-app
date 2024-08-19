import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default function useFetchApp() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/", {
          headers: {
            accept: "application/json",
          },
        });
        const resJon = await response.json();
        setdata(resJon);
      } catch (error) {
        Alert.alert("error", error.message);
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, []);
  
  const refetch = async () => {
    setloading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products/", {
        headers: {
          accept: "application/json",
        },
      });
      const resJon = await response.json();
      setdata(resJon);
    } catch (error) {
      Alert.alert("error", error.message);
    } finally {
      setloading(false);
    }
  };
  return { data, loading, refetch };
}
