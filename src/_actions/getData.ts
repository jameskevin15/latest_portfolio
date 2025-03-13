import { openDb } from "@/mongodb/lib/db";

export const getData = async () => {
  const db = await openDb("mydb", "testimonials");
  const data =  db.getList({});
  return data;
};
