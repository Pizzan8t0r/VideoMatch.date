import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Brianna Hayes",
    isOnline: true,
    match: "78",
    description:
      "Tennis player. Athlete. Overall superstar.",
    message:
      "You really prefer The Flash over Superman? pfffttt... come on!",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Susie Helms",
    match: "93",
    description:
      "Beach bum. Hiker. Volleyball is life!",
    isOnline: false,
    message: "Yeah I grew up listening to The Scorions and other kinds of metal",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Jasmine Anderson",
    match: "45",
    description:
      "Pin collector. Museum junkie. I enjoy a good book.",
    isOnline: false,
    message:
      "LOL wow. And I thought my jokes were bad!",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "Rachel Bullard",
    match: "88",
    description:
      "Traveller. Foodie. I like to explore the city from time to time.",
    isOnline: true,
    message: "Bugs frighten me. Icky creepy crawlies ahhhh!",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "Stephanie Marcus",
    match: "76",
    description:
      "Softball. Painting. Lets draw in the beach or at the park",
    isOnline: false,
    message: "I am not a night owl, I prefer to do something during the day tbh.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Wendy Ellington",
    match: "95",
    description:
      "Avid gemstone collector. Puppy lover. Lets read our horiscopes together",
    isOnline: true,
    message:
      "I reealllyy wanna get me a rock tumbler, i just dont know which brand to buy",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "Joyce Turner",
    match: "67",
    description:
      "Coffee addict. Librarian. I go to car shows from time to time.",
    isOnline: true,
    message:
      "What are your thoughts on Basketball?",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "Melissa Dawson",
    match: "85",
    description:
      "Travelling, Ballet, Live Music, Amusment Parks ",
    age: "27",
    location: "Los Angeles, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Sushi, Coffee addict, Jamba Juice",
    info3: "Art galleries, Museums, Wine tasting ",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "I like to go to country clubs too! Let's meet up sometime.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "Lauren Davenport",
    match: "74",
    description:
      "Busy-body. Nurse. I'm a videogame historian.",
      age: "27",
    location: "Long Beach, CA",
    info1: 'Straight, Single, 4"8',
    info2: "Shopping freak, Rock collector, Enjoys chatting",
    info3: "Museums, Travel, Art Galleries",
    info4: "Last seen: 20h ago",
    isOnline: true,
    message:
      "Yeah i had a gameboy growing up, man how the times have changed..",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "Mariah Leyva",
    match: "98",
    description:
      "Photographer. Actress. Kitten enthusiast.",
    isOnline: false,
    message:
      "I hate ketchup on my fries, the thought of soggy fries grosses me out lol",
    image: IMAGE_10,
  },
];

export default data;
