import { useEffect } from "react";
import useSWR from "swr";
import counter from "../api/views/counter";

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

function ViewCounter({ slug }) {
  //   const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const { data } = useSWR(`/api/views/${counter}`, fetcher);
  const views = new Number(data?.total);
  console.log("views", data);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();
  }, [slug]);

  return (
    <span className="text-[#50fd9a]">
      {data ? `${views.toLocaleString()} views` : " (still loading)"}
    </span>
  );
}

export default ViewCounter;
