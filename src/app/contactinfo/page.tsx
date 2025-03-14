import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>James Kevin C. Jamili</h1>
      <h1>Mobile Number: 0956 147 3853 / 0993 468 2656</h1>
      <h1>Email: kevinjamili161@gmail.com</h1>
      <Link href="/">
        <button className="border py-1 px-2 rounded">Back</button>
      </Link>
    </div>
  );
};

export default page;
