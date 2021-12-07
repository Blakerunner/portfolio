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
        'Won Most Creative App & Best Teamwork Award against 61 other teams.',
        "Ideated, Designed, Developed and Deployed a Web-based multiplayer game in 5 weeks.",
        "Specifically, server and game client interaction utilized Phaser 3 OOP game library, integration a 16-bit mapping method allowing for customized in-game maps.",
        'Designed and implemented a modular map randomization method so no two games were the same, extending game re-playability substantially.',
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
        "Ideated, Designed and Developed a working chrome application utilizing AWS services to provide an advanced screen reader utility extension.",
        "Optimized extension to reduce resource cost of AWS services by frontloading processing within the browser rather than serverless resources.",
        "Managed a group of 4 peers in task allocation, expected delivery times and quality of work.",
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
  aboutParas: [
    "Hello, I’m Blake Michalzik.",
    "Soon to be grad with a Diploma in Computer Systems Technology from BCIT (Dec 2021).",
    "I’m an Australian/Canadian, with a passion for creation and problem solving for anything that can be solved with tech for your business. With 10 years of Australian Military experience, I’ve learned a lot about how to deal with problems with deadlines, how to prioritize solutions and how to do that as a team.",
    "Being around computers all my life and coming from a career where creative problem solving is a requirement, a natural progression has led me into computer engineering.",
    "The intense learning conditions in BCIT’s programs have really ignited my vision of what I can do within the tech industry. I’ve thoroughly enjoyed every minute of being a programmer and I look forward to applying what I’ve learned to business solutions.",
    "I am still drawn to the concept of providing service. My goal is to leverage technology in a way to benefits humanity, and I am very excited to be on this path.",
    "In my free time, you can find me in the gym listening to podcasts, in the kitchen whipping up a feast, watching mind-bending films or in a local forest enjoying the fresh air checking out what type of mushroom this one is up ahead.",
    "I excel in group working environments with my experiences in the military called for professionalism always and the objective comes first. I am excellent at cutting down the issue and finding the core problem that needs to be solved. I have the tenacity that if I don’t know now how to do something, I find the questions that need to be asked, and then find answers to them.",
  ],
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
