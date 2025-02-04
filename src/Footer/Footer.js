import React, { useEffect } from "react";
import "../Footer/Footer.css";
import "../Reset/Reset.css";

const Footer = () => {
  useEffect(() => {
    const footerButton = document.querySelector("#footer__button");

    const handleMouseMove = (e) => {
      const rect = footerButton.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      footerButton.style.background = `radial-gradient(circle at ${x}% ${y}%, #11a645, #1ed760)`;
      footerButton.style.boxShadow = "0 0 15px rgba(26, 111, 56, 0.8)";
    };

    const handleMouseLeave = () => {
      footerButton.style.background = "white";
      footerButton.style.boxShadow = "none";
    };

    if (footerButton) {
      footerButton.addEventListener("mousemove", handleMouseMove);
      footerButton.addEventListener("mouseleave", handleMouseLeave);
    }

    // Limpeza dos event listeners ao desmontar o componente
    return () => {
      if (footerButton) {
        footerButton.removeEventListener("mousemove", handleMouseMove);
        footerButton.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // O array vazio garante que o efeito só execute uma vez após a montagem

  return (
    <footer class="disclaimer-premium">
      <div class="text">
        <p class="disclaimer-premium__title">Testar o Premium de graça</p>
        <p class="disclaimer-premium__subtitle">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div class="button">
        <button type="button">Inscreva-se grátis</button>
      </div>
    </footer>
  );
};

export default Footer;
