"use client";
import { useEffect, useState } from "react";
import { get, ref, set } from "firebase/database";
import { database } from "../firebaseConfig";

const ViewCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterRef = ref(database, "views");
    get(counterRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCount(snapshot.val());
          set(counterRef, snapshot.val() + 1);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <span className="text-[#50fd9a]">
      {count !== undefined ? `${count}` : "(loading...)"}
    </span>
  );
};

export default ViewCounter;
