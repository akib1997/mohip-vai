import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import Modal from "./Modal";

export default function Card() {
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await Axios.get("http://localhost:3000/charities");
    setData(res.data);
  };

  const Card = styled.div`
    max-width: 45%;
    box-shadow: 1px 4px 6px -1px rgba(0, 0, 0, 0.24);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 3rem;
    position: relative;

    @media (max-width: 768px) {
      max-width: 95%;
    }
  `;
  const CardImage = styled.img`
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    width: 100%;
  `;

  const CardLink = styled.button`
    border: 2px solid royalblue;
    color: royalblue;
    padding: 0.4rem;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
  `;

  const CardTitle = styled.h2`
    font-size: 1.5rem;
  `;

  const CardContent = styled.div`
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <>
      {data.map((item) => (
        <Card key={item.id}>
          <Modal modal={modalState} chabi={item.id} mainData={item} />

          <CardImage src={`./images/${item.image}`} alt={item.name} />
          <CardContent>
            <CardTitle> {item.name} </CardTitle>
            <CardLink onClick={toggleModalState}>Donate</CardLink>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
