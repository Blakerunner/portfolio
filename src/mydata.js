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
import youtubeIcon from "./images/youtube.svg"

import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import unicorn from "./images/unicorn.svg"

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
      company: "Pacific Eye Doctors",
      position: "Solutions Architect",
      period: "Jun 2020 - Present",
      roleList: [
        "Research, develop and implement technical solutions for Pacific Eye Doctors.",
        "Ideated, Pitched, Implemented, Maintain, and update Pacific Eye Doctors' internal Information Portal for business standard operation practices, significantly improving new hire training times and creating a reliable reference source.",
        "Consult for business solutions involving SaaS, PaaS, and IaaS.",
      ],
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
      company: "Setu Technologies Inc",
      position: "Developer",
      period: "Sep 2021 - Dec 2021",
      roleList: [
        "Headed a team of 5 developers in Ideating, Designing, Developing, and Deploying a Web Application in 12 Weeks.",
        "Created a Web Application that provided a UI for Clients to view large amounts of time-series data from sensors monitoring business assets.",
        "Met MVP requirements in 8 weeks, allowing for additional data security implementation and administrative features.",
        "Personally responsible for Node RESTful API handling all server and database implementation.",
        "Maintained Cloud services and implemented CI/CD. Allowing for product uptime while fortnightly versions rolled out from a 2-week Sprint cycle.",
      ],
      imageSrc: setutechBanner,
      links: [{ url: "https://setutech.ca/", icon: viewIcon }],
    },
    {
      company: "AI for Ai",
      position: "Developer",
      period: "Apr 2021 – May 2021",
      roleList: [
        "Headed a team of 4 in Ideating, Designing, Developing, and Deploying an Application in 5 weeks.",
        "Created a Web application that provided a secure method for clients to view specific industry asset information as a dashboard with integrated ML predictive asset degradation rates.",
        "Provided a highly secure environment utilizing HTTPS, JWT, Azure ID to ensure the Power BI dashboard is only accessible by a specified user.",
        "Managed a large cloud network to integrate ML containers, MySQL database, Web Application Server, and Power Bi.",
      ],
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
      company: "ADF Aviation",
      position: "Avionics Technician",
      period: "Jan 2015 – Aug 2018",
      roleList: [
        "Delivered day and night shift maintenance, with limited resources and time while ensuring the airworthiness of $32M Black Hawk helicopters.",
        "Carried out servicing, overhauls, and repairs to aircraft electrical systems and equipment.",
        "Identified and investigated defects, either providing on-the-spot repairs or recommended remedial follow-up actions.",
        "Improved the reliability of shift handovers by creating a paired handover methodology.",
        "Integrated with members of flight crew during test flights, providing expertise in diagnosing and rectifying aircraft faults.",
      ],
      imageSrc: blakeTechnician1,
      links: [
        {
          url: "https://army.defencejobs.gov.au/jobs/avionics-technician",
          icon: viewIcon,
        },
      ],
    },
    {
      company: "ADF Royal Australian Engineers",
      position: "Airborne Combat Engineer",
      period: "Apr 2008 – Jan 2015",
      roleList: [
        "Immediately qualified and selected for the specialist, 21st Troop Airborne Engineers.",
        "Responsible for 12 personnel, a heavy leadership role providing guidance, knowledge, mentorship, and command.",
        "Developed a personal trust, in Laying, arming, neutralizing, disarm and removing mines, booby traps, and improvised explosives.",
        "Led reconnaissance team to allow safe passage ahead for 200+ servicemen and $100M+ worth of equipment.",
        "Developed personal readiness to deploy within 48 hours to anywhere in the world.",
      ],
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
      blurb:
        "Early Covid-19 and Pub G was still interesting. Covid Royale was a 16-bit attempt at a game that was fun and informative.",
      featureList: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
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
      blurb:
        "Lightweight Chrome extension for Text-to-Speak highlighted text using AWS Polly",
      featureList: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
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
    "Hello, I'm Blake and I'm excited to be part of the wildly fascinating computer-based timeline. I'm a recent CS graduate and looking forward to many, many years of those eureka moments when a (code) plan comes together. I believe creative problem solving and engineering holds a special type of mind-stretching joy for most people, but for me, it's my Ikigai.",
  aboutParaTwo:
    "I still vividly remember at the age of 4 my first experience with computers. Perched on my father’s knees and wrapped in a towel, from my recent thunderstorm adventures, I was shouting 'Go! Go! Go!'. I was rapidly pressing a spacebar to shoot while father was masterfully navigating our player character through the game level. I was the arms, he was the legs. Years later I learned we were playing Doom 1993.",
  aboutParaThree:
    "Maybe it was the Doom, but years later I joined on to the Australian Defence Force for a decade. I was young and restless and wanted to see what I was capable of. Turns out, I'm capable of anything I aim for. Joining as a Combat Engineer in an Airborne unit, I wanted to be at the front. I learned a lot, how to work as a team, how to take the initiative, fix something before its a problem, completely shift gears because priorities changed and something needs a fix yesterday ... heck yeah let’s go.",
  aboutParaFour:
    "Sometime after a particularly ridiculous night-time fast-roping drop from a helicopter into a forest with a chainsaw strapped to my leg, I thought 'Hey I should work on these…",
  aboutParaFive:
    "Avionics Technician was an excellent fit for me, technically complex troubleshooting on aircraft electrical systems was great for me to learn to be particularly methodical and bugfix. There was something missing though, I still really wanted to build things, and I felt that I wasn't contributing enough to humanity. I already knew Tech was the answer. It had always been there with me, even 4 year old me knew it.",
  aboutParaSix:
    "Graduating in 2022, I've got computer science knowledge under my belt and I'm looking for development opportunities. Along with my tenacity, professionalism, and attention to detail, I believe I'll make an excellent team member at your company.",
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
    { img: youtubeIcon, url: "https://youtube.com/c/Blakerunner" },
  ],

  // End Contact Section ---------------
}
