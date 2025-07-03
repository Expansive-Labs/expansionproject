"use client";
import ViewCounter from "../viewCounter/page";
import Link from "next/link";

/// FOOTER ///
const Footer = ({ count }) => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-[#f6f3ed] determination-mono-font">
      <div className="container mx-auto px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Band Info Column */}
          <div className="text-center md:text-left">
            <h3 className="text-[#50fd9a] mb-4 font-bold kallisto-lined-font">Expansion Project</h3>
            <p className="text-sm text-[#717171] mb-2">Philadelphia Jazz Fusion Trio</p>
            <p className="text-sm text-[#717171]">Funk • Jazz • Progressive • Rock</p>
            <p className="text-sm text-[#717171]">Music • Live Band • Live Music</p>
            <p className="text-sm text-[#717171] mt-2">Philadelphia, PA</p>
          </div>
          
          {/* Quick Links Column */}
          <div className="text-center">
            <h3 className="text-[#50fd9a] mb-4 font-bold kallisto-lined-font">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">Home</Link>
              <Link href="/blog" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">Blog & News</Link>
              <Link href="/#tour" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">Tour Dates</Link>
              <Link href="/#contact" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">Contact</Link>
            </nav>
          </div>
          
          {/* Music/Streaming Column */}
          <div className="text-center md:text-right">
            <h3 className="text-[#50fd9a] mb-4 font-bold kallisto-lined-font">Listen Now</h3>
            <nav className="flex flex-col space-y-2">
              <a href="https://open.spotify.com/track/1tcowxHN97dVXOnBXCRTqD?si=62dc4255abcc4e9c" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">Spotify</a>
              <a href="https://music.apple.com/us/artist/expansion-project/1353151967" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">Apple Music</a>
              <a href="https://youtu.be/CADFoemU5Jo?si=nYUN67vgXTfek4Ps" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">YouTube</a>
              <a href="https://www.bandsintown.com/a/15563537-expansion-project" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717171] hover:text-[#50fd9a] transition-colors">Bandsintown</a>
            </nav>
          </div>
        </div>
        
        <hr className="border-[#33353F] mb-6" />
        
        <div className="text-center">
          {/* EXPANSIVE LABS */}
          <div style={{ position: "relative", top: "-10px", margin: "10px 0" }}>
            <h4
              style={{
                fontFamily: "Press Start 2P",
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
                <span className="">EXPANSIVE LABS</span>
              </a>
            </h4>
          </div>
          <span className="text-muted"></span>
          <p className="mt-1 text-slate-500">
            Visitor count:{" "}
            <span className="text-[#50fd9a]">{<ViewCounter />}</span>
          </p>
          <p className="text-slate-600">© 2025 Expansion Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
