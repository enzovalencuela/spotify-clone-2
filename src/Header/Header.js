import React, { useState } from "react";
import "./Header.css";
import "../Reset/Reset.css";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import imgSearch from "../assets/icons/search.png";

const Header = () => {
  return (
    <nav class="header__navigation">
      <div class="navigation">
        <button class="arrow-left">
          <img src={smallRight} alt="" />
        </button>
        <button class="arrow-right">
          <img src={smallLeft} alt="" />
        </button>
      </div>
      <div class="header__search">
        <img src={imgSearch} alt="" />
        <input
          id="search-input"
          maxlength="800"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          placeholder="O que você quer ouvir?"
          value=""
        />
      </div>
      <div class="header__login">
        <button class="subscribe">Inscreva-se</button>
        <button class="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
