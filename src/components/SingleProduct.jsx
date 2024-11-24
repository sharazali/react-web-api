import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { additemscart } from '../store/cart';

function SingleProduct() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getData = async () => {
    setLoading(true);
    let apiCall = await fetch('https://fakestoreapi.com/products');
    let prodsData = await apiCall.json();
    setLoading(false);
    setData(prodsData);
  };

  useEffect(() => {
    getData();
  }, []);

  const additemscart = (cartpod)=>{
      dispatch()
  }

  const { id } = useParams();

  const filteredData = data?.filter((currElem) => {
    return currElem?.id === parseInt(id);
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!filteredData || filteredData.length === 0) {
    return <div>Product not found</div>;
  }

  return (
   <>
    <div>
      <h2>{filteredData[0].title}</h2>
      <p>{filteredData[0].description}</p>
      <p>Price: ${filteredData[0].price}</p>
    </div>
    <Link onClick={()=>additemscart(filteredData[0])} > Add to cart</Link>
   </>
  );
}

export default SingleProduct;
