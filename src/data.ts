import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Sharon Owolabi",
  role: "Unity Game Developer",
  introduction: "I am a Computer Science graduate passionate about video games and game development.",
  description: "I build games and gameplay prototypes in Unity and C#, focusing on combat, movement, player interactions and core gameplay systems.",
  image: "/images/Profile.jpg",
  cvUri: "",
  links: { github: "", itchIO: "https://sharonomotomiwa.itch.io/", linkedIn: "https://www.linkedin.com/in/owolabi-sharon-omotomiwa/" }
};
// Add your real contact details and CV above before submitting.
export const contactEmail = "owolabisharon1@gmail.com";
export const skills = ["Unity", "C#", "Gameplay programming", "Gameplay prototyping", "Three.js", "JavaScript", "Blueprints"];
const media = (slug: string, filenames: string[]) => filenames.map(file => ({ source: `/images/games/${slug}/${file}`, type: MediaType.Image }));
export const games: Game[] = [
  {
    name: "Coffee Run",
    description: "Collaborative experience — developed with CC (Cartoon Coffee). A Unity runner with jumping, sliding and air-slamming through obstacles. Artwork by Cartoon Coffee.",
    genres: ["Runner", "2D", "Collaboration"], platforms: [Platform.Web], engine: GameEngine.Unity,
    links: [{ source: LinkImageSource.ItchIo, url: "https://sharonomotomiwa.itch.io/coffee-run" }], media: media("coffee-run", ["cc1.png", "cc2.png", "cc3.png", "cc4.gif"])
  },
  {
    name: "Top-Down Zombie Shooter",
    description: "Work in progress. A top-down zombie shooter game exploring shooting, enemy navigation and survivor rescue mechanics.",
    genres: ["Shooter", "WIP"], platforms: [Platform.Prototype], engine: GameEngine.Unity,
    links: [], media: media("zombie-survival", ["0910(3).gif", "Screenshot 2026-09-10 at 10.24.02.png", "Screenshot 2026-09-10 at 10.24.12.png"])
  },
  {
    name: "Tower Attack",
    description: "A reverse tower-defence game, originally created for a game jam and developed further. Deploy units to attack towers. The current browser build does not represent this version.",
    genres: ["Strategy", "Game jam"], platforms: [Platform.Prototype], engine: GameEngine.Unity,
    links: [], media: media("tower-attack", ["Screenshot 2026-09-10 at 18.34.16.png", "Screenshot 2026-09-10 at 18.34.40.png", "Screenshot 2026-09-10 at 18.36.03.png"])
  },
  {
    name: "Three.js Combat Prototype",
    description: "A browser-based 3D souls-like combat prototype built with Three.js. An exploration of interactive gameplay outside Unity.",
    genres: ["Combat", "Prototype"], platforms: [Platform.Web], engine: GameEngine.ThreeJS,
    links: [], source: { name: "Browser Combat Prototype", url: "https://threejs-iota-one.vercel.app/" }, media: media("threejs-combat", ["0910(1).gif", "Screenshot 2026-09-10 at 18.39.09.png", "Screenshot 2026-09-10 at 18.39.20.png"])
  },
  {
    name: "Risky Rat",
    description: "A third-person game jam project where a rat collects cookies while avoiding household hazards.",
    genres: ["Action", "Game jam"], platforms: [Platform.Web, Platform.Windows], engine: GameEngine.Unity,
    links: [{ source: LinkImageSource.ItchIo, url: "https://sharonomotomiwa.itch.io/risky-rat" }], media: media("risky-rat", ["0910(2).gif"])
  },
  {
    name: "Driving Simulator",
    description: "A basic Unity driving prototype with an urban environment and on-screen steering and pedal controls. Work in progress.",
    genres: ["Driving", "Prototype"], platforms: [Platform.Prototype], engine: GameEngine.Unity,
    links: [], media: media("driving-simulator", ["Screenshot 2026-09-10 at 19.37.48.png", "Screenshot 2026-09-10 at 19.38.22.png"])
  }
];
