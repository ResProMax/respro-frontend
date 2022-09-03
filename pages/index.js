// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import SearchFieldArea from "../components/SearchFieldArea";
import ThumbnailCard from "../components/ThumbnailCard";

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      data: data.products,
    },
  };
};

export default function Home({ data }) {
  const [searchText, setSearchText] = useState("");
  const [activeCard, setActiveCard] = useState("");
  const searchedText = (text) => {
    setSearchText(text);
  };

  const filteredData = data.filter((i) =>
    i.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <SearchFieldArea searchedText={searchedText} />
      <div className="flex">
        <div className="w-4/12 flex justify-around flex-wrap my-3">
          {filteredData.map((card) => (
            <ThumbnailCard
              active={activeCard}
              setActive={setActiveCard}
              key={card.id}
              id={card.id}
              title={card.title}
              subTitle={card.description}
              card={card}
            />
          ))}
        </div>
        <div className="w-8/12  bg-slate-600">
          <Typography>{activeCard.title}</Typography>
        </div>
      </div>
    </div>
  );
}
