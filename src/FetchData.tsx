import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const FetchingData: React.FC = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products?limit=6');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Fetching Data...</p>
      ) : (
        <>
          {data?.map((product) => (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FetchingData;
