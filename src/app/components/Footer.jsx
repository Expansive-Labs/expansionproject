// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white determination-mono-font">
      <div className="text-center p-12 justify-center">
        {/* EXPANSIVE LABS */}
        <div style={{ position: "relative", top: "-10px", margin: "10px 0" }}>
          <h1
            style={{
              fontFamily: "Press Start 2P",
              // paddingTop: "16px",
              fontSize: "10px",
              color: "#717171",
            }}
          >
            This webpage is powered by
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
          </h1>
        </div>
        <span className="text-muted"></span>
        <p className="text-slate-700">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
