import { getData } from "@/_actions/getData";
import React from "react";
import Image from "next/image";

const page = async () => {
  const data = await getData();
  console.log("DATA ===>>", data);
  return (
    <div>
      {data.map((datas: any) => (
        <div key={datas._id}>
      
          <h2>{datas.name}</h2>
          <h2>{datas.position}</h2>
          <h2>{datas.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default page;
