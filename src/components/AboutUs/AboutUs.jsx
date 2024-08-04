import styles from "./AboutUs.module.css";
import { aboutInfo } from "../../utils/Aboutus";
import MissionVission from "./MissionVission";
import Founder from "./Founder";
import Team from "./Team";
import { Accordion } from "react-bootstrap";

// image imports
import saiteja from "../../assets/sai.png";
import rajendra from "../../assets/rajendra.jpeg";
import lakshmi from "../../assets/lakshmi.jpg";

const team = [
  {
    img: saiteja,
    no: "0",
    title: "M. Sai Teja (Founder)",
    points: [
      `He received his BMC (Basic Mountaineering Course) from IHCAE (Indian Himalayan Centre for Adventure and Ecotourism).`,
      `He has experience leading snow treks and treks in Maharashtra.`,
      `Saiteja is skilled in rescue operations, indicating he has expertise in handling emergencies in mountainous terrain.`,
      `He is also an expert in providing training for Everest and the Seven Summits, suggesting he has knowledge and experience in preparing climbers for these challenging expeditions.`,
    ],
    info: `It sounds like Saiteja has a diverse skill set that makes him well-equipped for various aspects of mountaineering, from leading treks to training others and performing rescue operations.`,
  },
  {
    img: rajendra,
    no: "1",
    title: "R. Rajendra Kumae (Senior Advisor Board)",
    points: [
      `Basic and Advanced Mountaineering courses from JIM&WS`,
      `Member 1st Mountaineering Expedition from Telangana State to Stock Kangri`,
      `Deputy Leader Mt. Bhagirathi -II Expedition.`,
      `Member Clean Himalayas campaign.`,
    ],
  },
  {
    img: lakshmi,
    no: "2",
    title: "Lakshmi (Social Media Handler)",
    points: [
      `He received his BMC (Basic Mountaineering Course) from IHCAE (Indian Himalayan Centre for Adventure and Ecotourism).`,
      `He has experience leading snow treks and treks in Maharashtra.`,
      `Saiteja is skilled in rescue operations, indicating he has expertise in handling emergencies in mountainous terrain.`,
      `He is also an expert in providing training for Everest and the Seven Summits, suggesting he has knowledge and experience in preparing climbers for these challenging expeditions.`,
    ],
    info: `It sounds like Saiteja has a diverse skill set that makes him well-equipped for various aspects of mountaineering, from leading treks to training others and performing rescue operations.`,
  },
];

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <p className="mainHeading">ABOUT US</p>
      <div id={styles.infoContainer}>
        {aboutInfo.map(({ title = "", description }) => {
          return (
            <div className={styles.info} key={title}>
              {title && (
                <span className={styles.infoTitle}>{title + ": "}</span>
              )}

              {<span className={styles.infoDescription}>{description}</span>}
            </div>
          );
        })}
      </div>
      <MissionVission />

      <div>
        <p className={styles.heading}>OUR TEAM</p>
        <Accordion defaultActiveKey="0">
          {team.map((team) => (
            <Team key={team.title} {...team} />
          ))}
        </Accordion>
      </div>
      <div id={styles.founderContainer}>
        <img src="" alt="" />
        <Founder />
      </div>
    </section>
  );
}
