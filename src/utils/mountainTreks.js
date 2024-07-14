// main events images imports
import devakundWaterfallsImg from "../assets/mountainTreks/devekundWaterfalls.webp";
import dudhsagarWaterfallsImg from "../assets/mountainTreks/dudhsagarWaterfalls.jpg";
import hariharFort from "../assets/mountainTreks/hariharFort.jpg";
import harischandragadImg from "../assets/mountainTreks/harischandragad.jpg";
import kalusbaiImg from "../assets/mountainTreks/kalsubai.jpg";
import rajmachiFortImg from "../assets/mountainTreks/rajmachiFort.jpg";

// andharbanDevakund waterfalls trek image imports
import andharbanOne from "../assets/mountainTreks/andharban_devakund_waterfall/andharban1.jpg";
import andharbanTwo from "../assets/mountainTreks/andharban_devakund_waterfall/andharban2.jpg";
import andharbanThree from "../assets/mountainTreks/andharban_devakund_waterfall/andharban3.webp";
import andharbanFour from "../assets/mountainTreks/andharban_devakund_waterfall/andharban4.webp";
import devakundOne from "../assets/mountainTreks/andharban_devakund_waterfall/devakund1.jpg";
import devakundTwo from "../assets/mountainTreks/andharban_devakund_waterfall/devakund2.jpg";
import devakundThree from "../assets/mountainTreks/andharban_devakund_waterfall/devakund3.webp";

// dudhsagar waterfalls image import

import dudhsagarOne from "../assets/mountainTreks/dudhsagarWaterfalls/dudhsagarWaterfalls1.jpg";
import dudhsagarTwo from "../assets/mountainTreks/dudhsagarWaterfalls/dudhsagarWaterfalls2.jpg";
import dudhsagarThree from "../assets/mountainTreks/dudhsagarWaterfalls/dudhsagarWaterfalls3.jpg";
import dudhsagarFour from "../assets/mountainTreks/dudhsagarWaterfalls/dudhsagarWaterfalls4.webp";
import dudhsagarFive from "../assets/mountainTreks/dudhsagarWaterfalls/dudhsagarWaterfalls5.jpg";

// harishchandragad trek images
import harishchandragadOne from "../assets/mountainTreks/hairshchandragad/harishchandragad1.webp";
import harishchandragadTwo from "../assets/mountainTreks/hairshchandragad/harishchandragad2.webp";
import harishchandragadThree from "../assets/mountainTreks/hairshchandragad/harishchandragad3.jpg";
import harishchandragadFour from "../assets/mountainTreks/hairshchandragad/harishchandragad4.jpg";
import harishchandragadFive from "../assets/mountainTreks/hairshchandragad/harishchandragad5.jpg";
import harishchandragadSix from "../assets/mountainTreks/hairshchandragad/harishchandragad6.webp";

// kalsubai trek images
import kalsubaiOne from "../assets/mountainTreks/kalsubai/kalsubai1.webp";
import kalsubaiTwo from "../assets/mountainTreks/kalsubai/kalsubai2.webp";
import kalsubaiThree from "../assets/mountainTreks/kalsubai/kalsubai3.jpg";
import kalsubaiFour from "../assets/mountainTreks/kalsubai/kalsubai4.jpg";
import kalsubaiFive from "../assets/mountainTreks/kalsubai/kalsubai5.jpg";
import kalsubaiSix from "../assets/mountainTreks/kalsubai/kalsubai6.jpg";

// rajmachi fort trek images
import rajmachiOne from "../assets/mountainTreks/rajmachi/rajmachi1.jpg";
import rajmachiTwo from "../assets/mountainTreks/rajmachi/rajmachi2.webp";
import rajmachiThree from "../assets/mountainTreks/rajmachi/rajmachi3.webp";
import rajmachiFour from "../assets/mountainTreks/rajmachi/rajmachi4.jpg";
import rajmachiFive from "../assets/mountainTreks/rajmachi/rajmachi5.jpg";
import rajmachiSix from "../assets/mountainTreks/rajmachi/rajmachi6.webp";

// main details of all the treks
const mountainTreks = [
  {
    heading: "mountain treks",
    gridData: [
      {
        title: "devakund waterfalls",
        img: devakundWaterfallsImg,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed
                tempora fugit corrupti, at illum vero tenetur accusamus magni
                deleniti, nobis necessitatibus. Assumenda quo corrupti animi fugiat,
                at harum soluta!`,
        eventId: "devakundWaterfalls",
        book: false,
      },
      {
        title: "Dudhsagar & Tambdi Surla Waterfall",
        img: dudhsagarWaterfallsImg,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed
                tempora fugit corrupti, at illum vero tenetur accusamus magni
                deleniti, nobis necessitatibus. Assumenda quo corrupti animi fugiat,
                at harum soluta!`,
        eventId: "dudhsagarWaterfalls",
        book: false,
      },
      {
        title:
          "Harihar Fort, Trimbakeshwar Temple & Brahmagiri Hill Godavari Origin",
        img: hariharFort,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed
                tempora fugit corrupti, at illum vero tenetur accusamus magni
                deleniti, nobis necessitatibus. Assumenda quo corrupti animi fugiat,
                at harum soluta!`,
        book: false,
      },
      {
        title: "Harishchandragad ",
        img: harischandragadImg,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed
                tempora fugit corrupti, at illum vero tenetur accusamus magni
                deleniti, nobis necessitatibus. Assumenda quo corrupti animi fugiat,
                at harum soluta!`,
        eventId: "harishchandragad",
        book: false,
      },
      {
        title: "Kalsubai - Trek to the Highest peak of Maharashtra (1646mts)",
        img: kalusbaiImg,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed
                tempora fugit corrupti, at illum vero tenetur accusamus magni
                deleniti, nobis necessitatibus. Assumenda quo corrupti animi fugiat,
                at harum soluta!`,
        eventId: "kalsubai",
        book: false,
      },
      {
        title: "Rajmachi Fort Trek",
        img: rajmachiFortImg,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed
                tempora fugit corrupti, at illum vero tenetur accusamus magni
                deleniti, nobis necessitatibus. Assumenda quo corrupti animi fugiat,
                at harum soluta!`,
        eventId: "rajmachi",
        book: false,
      },
    ],
  },
];

// anadarban and devakund waterfall trek
export const devakundWaterfalls = {
  eventId: "devakundWaterfalls",
  title: "Andharban & Devkund Waterfalls",
  price: "4899",
  images: [
    {
      img: andharbanOne,
      title: "andharban one",
    },
    {
      img: andharbanTwo,
      title: "andharban two",
    },
    {
      img: andharbanThree,
      title: "andharban three",
    },
    {
      img: andharbanFour,
      title: "andharban four",
    },
    {
      img: devakundOne,
      title: "devakund one",
    },
    {
      img: devakundTwo,
      title: "devakund two",
    },
    {
      img: devakundThree,
      title: "devakund three",
    },
  ],
  inclusions: [
    `To & FroTransportation (Non-A/C Train)`,
    `stay`,
    `Local Transport`,
    `Life Jacket`,
    `Saturday Lunch & Dinner`,
    ` Sunday Breakfast`,
    `First Aid Kit`,
    `Entries & Permits`,
    `Organizer`,
  ],
  itinerary: [
    {
      day: "Day One",
      details: [
        ` 08.00 PM: Will start in train from Hyderabad. Train halts at Nampally, Begumpet and Lingampally`,
      ],
      text: "End of Day One",
    },
    {
      day: "Day Two",
      details: [
        `09:30 AM: Reach Pune, Get into private vehicle`,
        `12.30 PM: Reach base village & Lunch`,
        `01:00 PM: Start Waterfall trek`,
        `08:00 PM: Dinner`,
        `09.00 PM:Wewillhave all the fun we can have`,
      ],
      text: "End of Day Two",
    },
    {
      day: "Day Three",
      details: [
        `05:00 AM: WakeUpCall`,
        `06:00 AM:Trek to Devkund Waterfall`,
        `08.30 AM: Reach Devkund. Take a dip in fall`,
        `11:30 AM: Start to pune reach Pune`,
        `06:00 PM: Start to Hyderabad by train`,
      ],
      text: "End of Day Three",
    },
    {
      day: "Day Four",
      details: [` 06:00 AM:Reach Hyderabad`],
      text: "End of Day Four",
    },
  ],
};

// dudhsagar waterfalls data

export const dudhsagarWaterfalls = {
  eventId: "dudhsagarWaterfalls",
  title: "Dudhsagar & Tambdi Surla Waterfall",
  price: "7299",
  images: [
    {
      img: dudhsagarOne,
      title: "dudhsagar waterfalls one",
    },
    {
      img: dudhsagarTwo,
      title: "dudhsagar waterfalls Two",
    },
    {
      img: dudhsagarThree,
      title: "dudhsagar waterfalls three",
    },
    {
      img: dudhsagarFour,
      title: "dudhsagar waterfalls four",
    },
    {
      img: dudhsagarFive,
      title: "dudhsagar waterfalls five",
    },
  ],
  inclusions: [
    `Transportation from Hyderabad & back`,
    `Local Transportation`,
    `Forest Permits/Camping Charges, if any (upto the amount charged for Indian nationals)`,
    `Accommodation on Sharing Basis (Homestay/Camping)`,
    `Food 1 Breakfast, 1 Lunch, 1 Dinner`,
    `Trek Organiser`,
    `First Aid Support`,
    `Organizer Reimbursement`,
  ],
  itinerary: [
    {
      day: "Day One",
      details: [` 03.30 PM: Leave from Hyderabad by Train`],
      text: "End of Day One",
    },
    {
      day: "Day Two",
      details: [
        `Reach Base City.. Get into pvt vehicle`,
        `Have Breakfast on the way and Start Trek to falls`,
        `11.00 AM: Reach base and have Lunch`,
        `Reach Stay by evening`,
      ],
      text: "End of Day Two",
    },
    {
      day: "Day Three",
      details: [
        `5.00 AM: Wakeup call.. Fresh up`,
        `Start to Dudhsagar falls`,
        `Breakfast & Lunch On the way`,
        `10.00 AM: Reach Falls `,
        `Will go to the bottom of falls.. we don't visit Bridge as that is restricted by govt `,
        `Spend Some Time at falls`,
        `Reach Back to stay`,
        `Have Lunch`,
        `08:00 PM: Reach Back to Base city`,
        `Catch bus/train back to Hyderabad`,
      ],
      text: "End of Day Three",
    },
    {
      day: "Day Four",
      details: [` 09:00 PM:Reach Hyderabad`],
      text: "End of Day Four",
    },
  ],
};

export const harishchandragad = {
  eventId: "harishchandragad",
  title: "Harishchandragad Waterfall",
  price: "4599",
  images: [
    {
      img: harishchandragadOne,
      title: "hairsh chandragad trek one",
    },
    {
      img: harishchandragadTwo,
      title: "hairsh chandragad trek two",
    },
    {
      img: harishchandragadThree,
      title: "hairsh chandragad trek three",
    },
    {
      img: harishchandragadFour,
      title: "hairsh chandragad trek four",
    },
    {
      img: harishchandragadFive,
      title: "hairsh chandragad trek five",
    },
    {
      img: harishchandragadSix,
      title: "hairsh chandragad trek six",
    },
  ],
  inclusions: [
    `To & Fro Transportation (Non-A/C Train)`,
    `Stay`,
    `Saturday Lunch and Dinner`,
    `Sunday Breakfast and Lunch`,
    `First Aid Kit`,
    `Local Travel`,
    `Organizer`,
  ],
  itinerary: [
    {
      day: "Day One",
      details: [`6:00 PM: Start from Hyderabad to Manmad`],
      text: "End of Day One",
    },
    {
      day: "Day Two",
      details: [
        `9:00 AM: Reach Manmad, Start to a base village by Private bus`,
        `12:00 PM: Reach base village and Start trek`,
        `02:00 PM: Reach Top, Temple Visit and Kokankada`,
      ],
      text: "End of Day Two",
    },
    {
      day: "Day Three",
      details: [
        `7:00 AM: wake up call`,
        `10:00 AM: Start trek back`,
        `01:30: Start to Manmad`,
        `08:00 PM: Reach Manmad & Board Train`,
      ],
      text: "End of Day Three",
    },
    {
      day: "Day Four",
      details: [`09:00 AM: Reach Hyderabad`],
      text: "End of Day Four",
    },
  ],
};

export const kalsubai = {
  eventId: "kalsubai",
  title: "Kalsubai Peak Trek, Highest Peak Of the Sahyadris",
  price: "4299",
  images: [
    {
      img: kalsubaiOne,
      title: "kalsubai trek one",
    },
    {
      img: kalsubaiTwo,
      title: "kalsubai trek two",
    },
    {
      img: kalsubaiThree,
      title: "kalsubai trek three",
    },
    {
      img: kalsubaiFour,
      title: "kalsubai trek four",
    },
    {
      img: kalsubaiFive,
      title: "kalsubai trek five",
    },
    {
      img: kalsubaiSix,
      title: "kalsubai trek six",
    },
  ],
  inclusions: [
    `To & Fro Transportation (Non-A/C Train)`,
    `Stay`,
    `Saturday Lunch and Dinner`,
    `Sunday Breakfast and Lunch`,
    `First Aid Kit`,
    `Local Travel`,
    `Organizer`,
    `Entries & Permits`,
  ],
  itinerary: [
    {
      day: "Day One",
      details: [`6:00 PM: Start from Hyderabad to Manmad`],
      text: "End of Day One",
    },
    {
      day: "Day Two",
      details: [
        `9:00 AM: Reach Manmad, Start to a base village by Private bus`,
        `11:00 AM: Visit Waterfall`,
        `04:00 PM: Reach Base Village & Rest`,
      ],
      text: "End of Day Two",
    },
    {
      day: "Day Three",
      details: [
        `04:00 AM: Wakeup call and Start Trek`,
        `02:30 PM : Back to Base village`,
        `03:00 PM : Start Back to Manmad`,
        `08:00 PM : Catch the Train for Hyderabad`,
      ],
      text: "End of Day Three",
    },
    {
      day: "Day Four",
      details: [`09:30 AM : Reach Hyderabad`],
      text: "End of Day Four",
    },
  ],
};

export const rajmachi = {
  eventId: "rajmachi",
  title: "Rajmachi Fort Trek",
  price: "4500",
  images: [
    {
      img: rajmachiOne,
      title: "rajmachi fort trek one",
    },
    {
      img: rajmachiTwo,
      title: "rajmachi fort trek two",
    },
    {
      img: rajmachiThree,
      title: "rajmachi fort trek three",
    },
    {
      img: rajmachiFour,
      title: "rajmachi fort trek four",
    },
    {
      img: rajmachiFive,
      title: "rajmachi fort trek five",
    },
    {
      img: rajmachiSix,
      title: "rajmachi fort trek six",
    },
  ],
  inclusions: [
    `Travel - Non AC Sleeper Train and Local Transportation`,
    `Stay - Home stay with washroom.`,
    `Food - 1 Dinner & 1 Breakfast with tea`,
    `Certified trek leader`,
    `First Aid Kit with basic medication`,
    `All entries and taxes`,
  ],
  exclusions: [
    `Any other food expenses in transit`,
    `Any misc. expenses not mentioned above.`,
  ],
  itinerary: [
    {
      day: "Day One",
      details: [`07:00 PM:  Start from Hyderabad by train, overnight journey`],
      text: "End of Day One",
    },
    {
      day: "Day Two",
      details: [
        `10:00 AM: Arrive Lonavala and Board Jeep to base village`,
        `11:00 AM: Reach trek start point`,
        ` 12:00 PM: Have lunch.`,
        `01:30 PM: Start trek to Kondana Cave Falls`,
        `06:00 PM: Reach home stay & get fresh up.`,
        `07:30 PM: Have Dinner`,
        `08:30 PM: Campfire and Fun activities`,
      ],
      text: "End of Day Two",
    },
    {
      day: "Day Three",
      details: [
        `04:30 AM: Wakeup call`,
        `05:00 AM : Start hike to Rajmachi fort`,
        `12:00 PM: Start back to Lonavala`,
        `01:30 PM: Stop for Lunch`,
        `03:00 PM:  Arrive Lonavala and board train to Hyderabad`,
      ],
      text: "End of Day Three",
    },
    {
      day: "Day Four",
      details: [`06:30 AM: Reach Hyderabad`],
      text: "End of Day Four",
    },
  ],
};

export default mountainTreks;
