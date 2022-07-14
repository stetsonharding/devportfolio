import ImageShop from "../assets/recentProjects/imageShop.webp";
import ufoSightings from "../assets/recentProjects/ufoSightings.webp";
import ValleyLawnPros from "../assets/recentProjects/valleyLawnPros.webp";
import MusicalSweatpants from "../assets/recentProjects/MusicalSweatpants.webp";

export const RecentProjectData = [
  {
    id: 1,
    Imgsrc: ufoSightings,
    Imgalt: "UFO Sightings Project.",
    description:
      "Get information on real UFO sightings and their coordinates to view on Google Maps. These are reported sightings around the USA. Made with React.js and Firebase for backend.",
    href: "https://stetsonharding.github.io/ufoSightings/#/",
  },
  {
    id: 2,
    Imgsrc: MusicalSweatpants,
    Imgalt: "Musical Sweatpants Project.",
    description:
      "Application that allows the user to shop for an album cover to print on sweatpants. Search, Add to cart, remove, and checkout!",
    href: "https://stetsonharding.github.io/musical-sweatpants/",
  },
  {
    id: 3,
    Imgsrc: ImageShop,
    Imgalt: "Image Shop Project.",
    description:
      "Fetched unsplash API to shop for images. Allowing user to search, add/remove and favorite images for later use. Completed with a mocked checkout workflow.",
    href: "https://stetsonharding.github.io/imageShopApp/#/",
  },
  {
    id: 4,
    Imgsrc: ValleyLawnPros,
    Imgalt: "Valley Lawn Pros Website.",
    description:
      "Website I built for a local landscaping company with React.js and bootstrap, hosted with Microsoft Azure.",
    href: "https://valleylawnpros.net/",
  },
];
