import { useState, type CSSProperties } from "react";
import "./index.css";

// Import local assets
import welcomeGif from "./assets/welcome/welcome.gif";
import firstGif from "./assets/first/4f5ca534-1055-49d8-9561-1d3208d31117.webp";
import thankYouImg from "./assets/thankyou/searchmemes.in_i1egkbicckzed9vteEFv.png";

// Import NO hover assets
import noGif1 from "./assets/no/giphy.gif";
import noGif2 from "./assets/no/giphy (1).gif";
import noGif3 from "./assets/no/giphy (2).gif";
import noGif4 from "./assets/no/giphy (4).gif";
import noImg1 from "./assets/no/searchmemes.in_UtSi73nCGrDEvcUdCPR1.png";
import noImg2 from "./assets/no/searchmemes.in_l6AsUGdJpo7w5IoWmutT.png";
import noImg3 from "./assets/no/searchmemes.in_leudA7LteQIjlVUlsaXs.png";
import noImg4 from "./assets/no/1a40b461-b844-4596-9f27-81cac96ba99f.webp";
import noImg5 from "./assets/no/d.gif";

// Import YES hover assets
import yesGif1 from "./assets/yes/giphy (3).gif";
import yesImg1 from "./assets/yes/searchmemes.in_PbP7SvNckhZp8lnBMYNA.png";
import yesImg2 from "./assets/yes/searchmemes.in_SVEznbFoYFUvja0j2lh1.png";
import yesImg3 from "./assets/yes/yes1.gif";


const isMobile: boolean = /Android|iPhone|iPad|iPod/i.test(
  navigator.userAgent
);

function App() {
  const [noStyle, setNoStyle] = useState<CSSProperties>({});
  const [yesClicked, setYesClicked] = useState<boolean>(false);
  const [showMain, setShowMain] = useState<boolean>(false);
  const [hoverText, setHoverText] = useState<string>("");
  const [defaultGif, setDefaultGif] = useState<string>(firstGif);

  const funnyTexts = [
    "Are you sure? 🤔",
    "Think again! 💭",
    "Really?! 😱",
    "Don't be mean 😢",
    "Come on... 🥺",
    "Please say yes 🙏",
    "I'll be sad 😭",
    "Just click YES 💘",
    "Why are you doing this? 😤",
    "You're breaking my heart 💔",
    "Hey hey mentalu! ",
    "khaali, sathoo nako karo!!",
    "Diwaneee!!"
  ];

  const hoverGifs = [
    noGif1, noGif2, noGif3, noGif4, noImg1, noImg2, noImg3, noImg4, noImg5
  ];

  const yesHoverGifs = [
    yesGif1, yesImg1, yesImg2, yesImg3
  ];

  // Show main content after loader
  setTimeout(() => setShowMain(true), 3000);

  const handleNoHover = (): void => {
    // Always set new text and GIF on hover
    setHoverText(funnyTexts[Math.floor(Math.random() * funnyTexts.length)]);
    
    // Set new GIF immediately
    const randomGif = hoverGifs[Math.floor(Math.random() * hoverGifs.length)];
    setDefaultGif(randomGif);

    // Generate completely random position each time
    const randomLeft = Math.random() * 85;
    const randomTop = Math.random() * 85;
    const randomRotation = Math.random() * 15 - 7.5;
    const randomScale = 0.9 + Math.random() * 0.2;

    setNoStyle({
      position: "absolute",
      left: `${randomLeft}%`,
      top: `${randomTop}%`,
      transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
    });
  };

  const handleNoClick = (): void => {
    // For mobile, trigger hover behavior on click
    handleNoHover();
  };

  const handleYesHover = (): void => {
    // Always set new text and GIF on hover
    setHoverText("Yes please! 💕");
    
    // Set new GIF immediately
    const randomGif = yesHoverGifs[Math.floor(Math.random() * yesHoverGifs.length)];
    setDefaultGif(randomGif);
  };

  // Remove resetHover function to maintain last state



  return (
    <div className="container">
      {!showMain ? (
        <div className="loader">
          <img src={welcomeGif} alt="Loading..." className="loader-gif" />
          <p>You are accused of being too cute... 💝</p>
        </div>
      ) : !yesClicked ? (
        <>
          <h1>My Love, Will you be my Valentine? 💖</h1>

          {/* Default GIF that maintains last state */}
          <img 
            src={defaultGif} 
            className="constant-gif" 
            alt="Valentine" 
          />

          {/* Hover text */}
          {hoverText && <div className="hover-text">{hoverText}</div>}

          {/* Buttons at the bottom */}
          <div className="buttons">
            <button 
              className="yes" 
              onClick={() => setYesClicked(true)}
              onMouseEnter={!isMobile ? handleYesHover : undefined}
              onTouchStart={isMobile ? handleYesHover : undefined}
            >
              YES 💘
            </button>
          </div>

          <button
            className="no"
            style={noStyle}
            onMouseEnter={!isMobile ? handleNoHover : undefined}
            onTouchStart={isMobile ? handleNoHover : undefined}
            onClick={isMobile ? handleNoClick : undefined}
          >
            NO 😤
          </button>
        </>
      ) : (
        <div className="success">
          <h1>YAYYY 🥰💞</h1>
          <img src={thankYouImg} className="success-gif" alt="Success" />
          <p>You're officially my Valentine, Thanks doli. 😌</p>
        </div>
      )}
    </div>
  );
}

export default App;
