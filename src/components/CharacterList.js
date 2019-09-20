import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ chara, setChara ] = useState()

  // Useeffect / axios
  useEffect(() => {
   const Hook = () => {
   axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(e =>{
      setChara(e.data.results)
    })
    }
    Hook()
  }, []);

  if (!chara) {
    return <p>Requesting Data</p>
      // if have time add loading animation
  }

  return (
    <>
      {chara.map(data => 
      <CharacterCard  key={data.name} data={data} />
      )}
    </>
  );
}
