import ImageShop from "../assets/recentProjects/imageShop.webp";
import ufoSightings from "../assets/recentProjects/ufoSightings.webp";
import ValleyLawnPros from "../assets/recentProjects/valleyLawnPros.webp";
// import noteDrop from "../assets/recentProjects/noteDrop.webp";
import pokidex from "../assets/recentProjects/pokidex.webp";

export const RecentProjectData = [
  {
    id: 1,
    Imgsrc: ufoSightings,
    Imgalt: "UFO Sightings Website Layout.",
    description:
      "Information on UFO sightings and their coordinates based on users state selection in the USA.",
    href: "https://stetsonharding.github.io/ufoSightings/#/",
  },
  {
    id: 2,
    Imgsrc: ImageShop,
    Imgalt: "Image Shop Website Layout.",
    description:
      "Shop for images. Allowing user to search, add/remove and favorite images for later use. Completed with a mocked checkout workflow.",
    href: "https://stetsonharding.github.io/imageShopApp/#/",
  },
  {
    id: 3,
    Imgsrc: ValleyLawnPros,
    Imgalt: "Valley Lawn Pros Website Layout.",
    description: "Website I built for a local landscaping company.",
    href: "https://valleylawnpros.net/",
  },
  // {
  //   id: 4,
  //   Imgsrc: noteDrop,
  //   Imgalt: "Note Drop Website Layout.",
  //   description: "CRUD application for taking/removing notes.",
  //   href: "https://stetsonharding.github.io/todo-drop/",
  // },
  {
    id: 4,
    Imgsrc: pokidex,
    Imgalt: "Pokidex website Layout.",
    description:
      "Get details, Look up, search, and filter your favorite pokemons.",
    href: "",
  },
];
