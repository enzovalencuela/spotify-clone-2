import React, { useState, useEffect } from "react";
import "../Reset/Reset.css";
import "./MainContent.css";
import card1 from "../assets/playlist/1.jpeg";
import card2 from "../assets/playlist/2.png";
import card3 from "../assets/playlist/3.jpeg";
import card4 from "../assets/playlist/4.jpeg";
import card5 from "../assets/playlist/5.jpeg";
import card6 from "../assets/playlist/6.jpeg";
import card7 from "../assets/playlist/7.jpeg";
import card8 from "../assets/playlist/8.jpeg";
import card9 from "../assets/playlist/9.jpeg";
import card10 from "../assets/playlist/10.jpeg";
import card11 from "../assets/playlist/11.jpeg";
import card12 from "../assets/playlist/12.jpeg";
import card13 from "../assets/playlist/13.jpeg";
import card14 from "../assets/playlist/14.jpeg";
import card15 from "../assets/playlist/15.jpeg";

const MainContent = ({ searchResults }) => {
  const showArtist = searchResults && searchResults.length > 0;
  const [greeting, setGreeting] = useState(""); // Criando o estado

  const updateGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("☀️ Bom dia!"); // Usando setGreeting ao invés de manipular DOM
    } else if (hour >= 12 && hour < 18) {
      setGreeting("🌅 Boa tarde!");
    } else {
      setGreeting("🌙 Boa noite!");
    }
  };

  useEffect(() => {
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div class="playlist-container">
      <div id="result-playlists">
        <div class="playlist">
          <h1 id="greeting"></h1>
          <h2 class="session">Navegar por todas as seções</h2>
        </div>

        <div class="offer__scroll-container">
          <div class="offer__list">
            <section class="offer__list-item">
              <a href="" class="cards">
                <div class="cards card1">
                  <img src={card1} alt="" />
                  <span>Boas festas</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card2">
                  <img src={card2} alt="" />
                  <span>Feitos para você</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card3">
                  <img src={card3} alt="" />
                  <span>Lançamentos</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card4">
                  <img src={card4} alt="" />
                  <span>Creators</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card5">
                  <img src={card5} alt="" />
                  <span>Para treinar</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card6">
                  <img src={card6} alt="" />
                  <span>Podcasts</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card7">
                  <img src={card7} alt="" />
                  <span>Sertanejo</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card8">
                  <img src={card8} alt="" />
                  <span>Samba e pagode</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card9">
                  <img src={card9} alt="" />
                  <span>Funk</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card10">
                  <img src={card10} alt="" />
                  <span>MPB</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card11">
                  <img src={card11} alt="" />
                  <span>Rock</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card12">
                  <img src={card12} alt="" />
                  <span>Hip Hop</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card13">
                  <img src={card13} alt="" />
                  <span>Indie</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card14">
                  <img src={card14} alt="" />
                  <span>Relax</span>
                </div>
              </a>

              <a href="" class="cards">
                <div class="cards card15">
                  <img src={card15} alt="" />
                  <span>Música Latina</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>

      <div id="result-artist" class="hidden">
        <div class="grid-container">
          <div class="artist-card" id="">
            <div class="card-img">
              <img id="artist-img" class="artist-img" />
              <div class="play">
                <span class="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div class="card-text">
              <a title="Foo Fighters" class="vst" href=""></a>
              <span class="artist-name" id="artist-name"></span>
              <span class="artist-categorie">Artista</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
