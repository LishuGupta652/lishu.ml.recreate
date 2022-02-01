import dwarf from "./images/project/dwarf.jpg";
import scsit from "./images/project/scsit.jpg";
import whatsapp from "./images/project/whatsapp.jpg";
import instagram from "./images/project/instagram.jpg";
import azael from "./images/project/azaelindia.jpg";
import hotel from "./images/project/dwarf02.jpg";
import payingguest from "./images/project/payingguest.jpg";
import scribble from "./images/project/scribble.jpg";
import auth from "./images/project/authpassport.jpg";
import detect from "./images/project/gitmandetect.jpg";

// Videos
import dwarfGif from "./images/project/dwarf_main.gif";
export const projectArray = [
  {
    title: "dwarf.co.in",
    link: "http://www.dwarf.co.in/",
    img: dwarf,
    desc: "Complete Responsive Design made with ReactJS, Firebase",
    route: "dwarf/#home",
    featured: true,
    src: dwarfGif,
  },
  {
    title: "scs.dauniv.ac.in",
    link: "http://www.scs.dauniv.ac.in/",
    img: scsit,
    desc: "Website made for School of computer science and IT with php and is complete responsive",
    route: "scsit/#",
    featured: true,
    src: scsit,
  },
  {
    title: "whatsapp",
    link: "https://whatsappcosmos.web.app/",
    img: whatsapp,
    desc: "Whatsapp Clone made with ReactJs and firebase as a backend.",
    route: "whatsapp/#",
    featured: true,
    src: whatsapp,
  },
  {
    title: "instagramclone",
    link: "https://instagramclonecosmos.web.app/",
    img: instagram,
    desc: "Instagram Clone made with ReactJs and Firebase as a backend.",
    route: "instagram/#",
    featured: true,
    src: instagram,
  },
  {
    title: "Hotel booking App",
    link: "https://hotelapp.lishu.ml/",
    img: hotel,
    desc: "Hotel app with ReactJs and Firebase as a backend. With login logout and Cart functionality.",
    route: "hotel/#",
    featured: false,
    src: hotel,
  },
  {
    title: "Paying Guest App",
    link: "http://www.payingguest.ml/",
    img: payingguest,
    desc: "Paying guest with ReactJs and Firebase as a backend. With login logout and Cart functionality.",
    route: "payingguest/#",
    featured: false,
    src: payingguest,
  },
  {
    title: "Scribbling Pens",
    link: "https://sp.lishu.ml/",
    img: scribble,
    desc: "Used the Content full to make a CRM system and make a website to fetch and deliver the post on the instagram pages.",
    route: "hotel/#",
    featured: false,
    src: scribble,
  },
  {
    title: "Facerecognition using ReactJS",
    link: "https://sp.lishu.ml/",
    img: detect,
    desc: "FaceRecognition project which can detect the person in the image and put canvas on the top of it using Machine Learning model and FaceJS",
    route: "detect/#",
    featured: false,
    src: detect,
  },
  {
    title: "Azael India",
    link: "#",
    img: azael,
    desc: "Made a Website for Azael India. Company based in New Delhi",
    route: "detect/#",
    featured: false,
    src: dwarfGif,
  },
];
