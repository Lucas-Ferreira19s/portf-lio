import carrosMbl from "../assets/projetosImg/carrosMbl.png";
import dac from "../assets/projetosImg/dac.jpg";
import calcGogeta from "../assets/projetosImg/calcGogeta.jpg";
import imc from "../assets/projetosImg/imc.png";
import memoria from "../assets/projetosImg/memoria.png";
import miniShop from "../assets/projetosImg/miniShop.jpg";

export const Projetos = [
  {
    title: "Carros",
    img: carrosMbl,
    icon: "ri-car-fill",
    descricao:
      "Um site de carros com diferentes marcas e ilustrações feito com javascript, animações de scroll",
    Tecnologias: [
      ["Css", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
      ["Html", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["Javascript", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["ScrollReveal", "https://scrollrevealjs.org"],
      ["Remix Icon", "https://remixicon.com"],
    ],
    link: "https://web-site-car.vercel.app",
    github: "https://github.com/Lucas-Ferreira19s/web-site-car",
  },

  {
    title: "Dashboard-time",
    img: dac,
    descricao:
      "Dashboard de gerenciamento de tempo simples feito com javascript e uso de Json. Desingn pego do FrontendMentor",
    icon: "ri-timer-fill",
    Tecnologias: [
      ["Css", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
      ["Html", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["Javascript", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["Json", "https://www.w3schools.com/js/js_json_intro.asp"],
    ],
    link: "https://dashboard-time.vercel.app",
    github: "https://github.com/Lucas-Ferreira19s/dashboard",
  },

  {
    title: "Calculadora de gorjeta",
    img: calcGogeta,
    descricao:
      "Calculadora capaz de calcular gorjetas, baseado no número de pessoas. Desingn pego do FrontendMentor",
    icon: "ri-money-dollar-circle-fill",
    Tecnologias: [
      ["Css", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
      ["Html", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["Javascript", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
    ],
    link: "https://calculadora-de-gojetas.vercel.app",
    github: "https://github.com/Lucas-Ferreira19s/tip-calculator",
  },
  {
    title: "Calculadora de Imc",
    img: imc,
    descricao:
      "Calculadora de Imc com Cards. Projeto feito em aula do curso B7Web.",
    icon: "ri-calculator-fill",
    Tecnologias: [
      ["ReactJs", "https://pt-br.reactjs.org"],
      ["Typescript", "https://www.typescriptlang.org"],
      ["Css", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
    ],
    link: "https://caculadora-imc.vercel.app",
    github: "https://github.com/Lucas-Ferreira19s/react-calc-imc",
  },
  {
    title: "Jogo da Memória",
    img: memoria,
    descricao:
      "Mini Jogo da memória feito com figuras e com cronômetro. Projeto feito em aula do curso B7Web.",
    icon: "ri-gamepad-fill",
    Tecnologias: [
      ["ReactJs", "https://pt-br.reactjs.org"],
      ["Typescript", "https://www.typescriptlang.org"],
      ["Css", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
    ],
    link: "https://memoria-jogo-react.vercel.app",
    github: "https://github.com/Lucas-Ferreira19s/react-memoria",
  },
  {
    title: "Mini shop",
    img: miniShop,
    descricao:
      "Site e-commerce que simula a compra de um tênis. Desingn pego do FrontendMentor",
    icon: "ri-shopping-bag-3-fill",
    Tecnologias: [
      ["ReactJs", "https://pt-br.reactjs.org"],
      ["Styled-Components", "https://styled-components.com"],
    ],
    link: "https://mini-shop-tenis.vercel.app",
    github: "https://github.com/Lucas-Ferreira19s/mini-shop",
  },
];

const tech = [
  { title: "Html", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { title: "Css", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { title: "Styled-Components", link: "https://styled-components.com" },
  { title: "Javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "Json", link: "https://www.w3schools.com/js/js_json_intro.asp" },
  { title: "Typescript", link: "https://www.typescriptlang.org" },
  { title: "ReactJs", link: "https://pt-br.reactjs.org" },
  { title: "ScrollReveal", link: "https://scrollrevealjs.org" },
  { title: "Remix Icon", link: "https://remixicon.com" },
];