import { useEffect } from "react";
import useSWR from "swr";
import ViewCounter from "../viewCounter/page";
import counter from "../api/views/counter";
import { setDoc } from "firebase/firestore";

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

async function visitCounter() {
  const count = {
    counter: counter + 1,
  };
  // await setDoc(visitorRef(), count, { merge: true });
}

/// FOOTER ///
const Footer = () => {
  useEffect(() => {
    visitCounter();
  }, []);

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-[#f6f3ed] determination-mono-font">
      <div className="text-center p-12 justify-center">
        {/* EXPANSIVE LABS */}
        <div
          style={{
            position: "relative",
            top: "-8px",
            margin: "-16px 0",
          }}
        >
          <p className="mt-1 text-slate-600">
            Visitor count
            <span className="text-[#50fd9a]">
              {<ViewCounter slug={visitCounter} />}
            </span>
          </p>
          <h1
            style={{
              fontFamily: "Press Start 2P",
              fontSize: "10px",
              color: "#717171",
            }}
          >
            This webpage is powered by:
            <a
              href="https://github.com/Expansive-Labs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#09846d",
                textDecoration: "none",
                letterSpacing: "2px",
              }}
            >
              {" "}
              <p className="">EXPANSIVE LABS</p>
            </a>
            <p className="text-slate-600">All rights reserved</p>
          </h1>
        </div>
        <span className="text-muted"></span>
        {/* <p className="text-slate-600">All rights reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
