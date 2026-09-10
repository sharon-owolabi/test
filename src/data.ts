import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Sharon Owolabi",
  role: "Unity Gameplay Programmer",
  introduction: "I build games and gameplay prototypes in Unity and C#, with experience in collaborative development, game jams and interactive 3D for the web.",
  description: "Unity gameplay programmer working on combat, movement and interactive systems.",
  image: "/images/Profile.jpg",
  cvUri: "",
  links: { github: "https://github.com/sharon-owolabi", itchIO: "https://sharonomotomiwa.itch.io/", linkedIn: "" }
};
// Add your real contact details and CV above before submitting.
export const contactEmail = "";
export const skills = ["Unity", "C#", "Gameplay programming", "Gameplay prototyping", "Three.js", "JavaScript", "Git"];
const media = (slug: string) => [{ source: `/images/games/${slug}/preview.svg`, type: MediaType.Image }];
export const games: Game[] = [
  {
    name: "Coffee Run",
    description: "Collaborative experience — developed with CC (Cartoon Coffee). A Unity runner with jumping, sliding and air-slamming through obstacles. Artwork by Cartoon Coffee.",
    genres: ["Runner", "Collaboration"], platforms: [Platform.Web], engine: GameEngine.Unity,
    links: [{source: LinkImageSource.ItchIo, url: "https://sharonomotomiwa.itch.io/coffee-run"}], media: media("coffee-run")
  },
  {
    name: "Top-Down Zombie Survival",
    description: "Work in progress. A top-down zombie survival game exploring shooting, enemy navigation and survivor rescue mechanics.",
    genres: ["Survival", "WIP"], platforms: [Platform.Prototype], engine: GameEngine.Unity,
    links: [], media: media("zombie-survival")
  },
  {
    name: "Tower Attack",
    description: "A reverse tower-defence game, originally created for a game jam and developed further. Deploy units to attack towers. The current version has an updated forest environment; the older browser build does not represent this version.",
    genres: ["Strategy", "Game jam"], platforms: [Platform.Prototype], engine: GameEngine.Unity,
    links: [], media: media("tower-attack")
  },
  {
    name: "Three.js Combat Prototype",
    description: "A browser-based 3D combat prototype built with Three.js. An exploration of interactive gameplay outside Unity.",
    genres: ["Combat", "Prototype"], platforms: [Platform.Web], engine: GameEngine.ThreeJS,
    links: [], source: {name: "Open browser prototype", url: "https://threejs-iota-one.vercel.app/"}, media: media("threejs-combat")
  },
  {
    name: "Risky Rat",
    description: "A third-person game jam project where a rat collects cookies while avoiding household hazards.",
    genres: ["Action", "Game jam"], platforms: [Platform.Web, Platform.Windows], engine: GameEngine.Unity,
    links: [{source: LinkImageSource.ItchIo, url: "https://sharonomotomiwa.itch.io/risky-rat"}], media: media("risky-rat")
  },
  {
    name: "Driving Simulator",
    description: "A basic Unity driving prototype with an urban environment and on-screen steering and pedal controls. Work in progress.",
    genres: ["Driving", "Prototype"], platforms: [Platform.Prototype], engine: GameEngine.Unity,
    links: [], media: media("driving-simulator")
  }
];
