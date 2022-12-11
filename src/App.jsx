import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import './style.css';

const App = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  let link = `https://sheetdb.io/api/v1/9ciparuiuzsu4`;
  const [personagem, setPersonagem] = useState("");
  useEffect(() => {
    api();
    // setInterval(() => {
    //   window.reload();
    // }, 1000);
  }, [])

  const api = useCallback(async () => {
    await axios
      .get(link)
      .then((res) => {
        setPersonagem(res.data);
        console.log(res.data);

      })
      .catch(() => {
        console.log("first")
      });
  }, []);

  return (
    <div className="embla" ref={emblaRef}>
        <div className="embla__container" >
      {personagem && personagem.map((item, index) => (

            <iframe
              className="embla__slide" key={index}
              src={`https://drive.google.com/file/d/${item.Fotos.split("=")[1]}/preview`} />

      ))}
        </div>
    </div>
  )
}
export default App;