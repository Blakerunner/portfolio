// Projects
import covidroyaleBanner from "./images/covidroyale-banner.png"
import mimidBanner from "./images/mimid-banner.png"

// Works
import pedBanner from "./images/ped-banner.png"
import aiforaiBanner from "./images/aiforai-banner.png"
import setutechBanner from "./images/setutech-banner.png"

// About
import blakePortrait1 from "./images/blake-portrait1.png"
import blakePortrait2 from "./images/blake-portrait2.png"
import blakeTechnician1 from "./images/blake-technician1.png"
import blakeCE1 from "./images/blake-ce1.png"

// Icons
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import emailIcon from "./images/email.svg"
import cvIcon from "./images/cv.svg"
import resumeIcon from "./images/resume.svg"
import serverIcon from "./images/server.svg"
import viewIcon from "./images/view.svg"

import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

export default {
  //   Header Details ---------------------
  name: "Blake Michalzik",
  headerTagline: ["Software Engineer", "Solutions Architect", "Soldier"],
  //   Header Paragraph
  headerParagraph: "",

  //Contact Email
  contactEmail: "bmichalzik@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  works: [
    {
      title: "Pacific Eye Doctors",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: pedBanner,
      links: [
        { url: "https://www.eyedoctorsmapleridge.ca/", icon: viewIcon },
        {
          url: "https://www.linkedin.com/company/pacific-eye-doctors/",
          icon: linkedinIcon,
        },
      ],
    },
    {
      title: "Setu Technologies Inc",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: setutechBanner,
      links: [{ url: "https://setutech.ca/", icon: viewIcon }],
    },
    {
      title: "AI for Ai",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: aiforaiBanner,
      links: [
        { url: "https://aiforai.net/", icon: viewIcon },
        {
          url: "https://www.linkedin.com/company/ai-for-ai/",
          icon: linkedinIcon,
        },
      ],
    },
    {
      title: "ADF Aviation",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: blakeTechnician1,
      links: [
        {
          url: "https://army.defencejobs.gov.au/jobs/avionics-technician",
          icon: viewIcon,
        },
      ],
    },
    {
      title: "ADF Royal Australian Engineers",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageSrc: blakeCE1,
      links: [
        {
          url: "https://army.defencejobs.gov.au/jobs/combat-engineer",
          icon: viewIcon,
        },
      ],
    },
  ],

  // End Work Section -----------------------

  // Projects Section ------------------------
  projects: [
    {
      title: "Covid Royale",
      para:
        "Early Covid-19 and Pub G was still interesting. Covid Royale was a 16-bit attempt at a game that was fun and informative",
      imageSrc: covidroyaleBanner,
      links: [
        { url: "https://covid-royale.blakerunner.com", icon: serverIcon },
        {
          url:
            "https://github.com/Blakerunner/COMP-2800-TEAM-DTC-11-Covid-Royale",
          icon: githubIcon,
        },
      ],
    },
    {
      title: "Mimid",
      para:
        "Lightweight Chrome extension for Text-to-Speak highlighted text using AWS Polly",
      imageSrc: mimidBanner,
      links: [
        {
          url: "https://github.com/Blakerunner/mimid",
          icon: githubIcon,
        },
      ],
    },
  ],

  // End Project Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage: blakePortrait1,

  //   End About Section ---------------------

  //   Skills Section ---------------
  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's solve together",
  social: [
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/blakemichazik/",
    },
    { img: githubIcon, url: "https://github.com/Blakerunner" },
  ],

  // End Contact Section ---------------
}
