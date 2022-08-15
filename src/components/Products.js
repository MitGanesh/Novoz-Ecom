import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ cat, filter, sort }) => {

  const [product, setProduct] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : 'http://localhost:5000/api/products');

        // console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFiltered(
      product.filter(item =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );

  }, [product, cat, filter])

  useEffect(() => {
    if (sort === 'desc') {
      setFiltered((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );

    } else if (sort === 'asc') {
      setFiltered((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFiltered((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [sort])

  return (
    <Container>
      {
        cat ? filtered.map((item) => (
          <Product key={item._id} item={item} />
        )) : [...product].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 8).map((item) => (
          <Product key={item._id} item={item} />
        ))
      }
    </Container>
  )
}

export default Products