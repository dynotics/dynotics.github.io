import popImg from "~/assets/showcase/popordrop.png";
import vanishImg from "~/assets/showcase/thevanishingenigma.png";
import curupiraImg from "~/assets/showcase/curupira.jpg";
import nunImg from "~/assets/showcase/nunofyourbusiness.png";
import piusImg from "~/assets/showcase/pius.png";

import piusIcon from "~/assets/icons/piusicon.jpg";
import curupiraIcon from "~/assets/icons/curupiraicon.png";
import nunIcon from "~/assets/icons/nunicon.jpg";

export const projects = [
  {
    slug: "pop-or-drop",
    title: "Pop or Drop",
    description: 
      "You run a soda pop shop, racing to serve quirky customers. Something strange lurks just below, watching and waiting.",
    image: popImg,
    gameplayLink: "https://dynotics.itch.io/pop-or-drop",
    credits: [
      { name: "Dylan Chin", role: "Lead Programmer" },
      { name: "Lisyari Vargas", role: "Programmer" },
      { name: "Richard Nguyen", role: "Artist" },
      { name: "Darcy Gutierrez", role: "Artist" },
      { name: "Darlyn Gutierrez", role: "Music Producer" },
      { name: "Leo Lui", role: "Technical Artist" }
    ]
  },
  {
    slug: "the-vanishing-enigma",
    title: "The Vanishing Enigma",
    description:
      "An adventure puzzle game where the player gets trapped in a computer while looking for a friend who disappeared, and has to traverse through the Rat Kingdom, collecting clues and defeating the Rat King to save their friend.",
    image: vanishImg,
    gameplayLink: "https://aidain21.itch.io/aristorats-game",
    footageLink: "https://www.youtube.com/watch?v=huBx2PuQffs",
    credits: [
      { name: "Aidan Ainsley", role: "Programmer" },
      { name: "Amanda Li", role: "Project Lead & Game Designer" },
      { name: "Christopher Vidals", role: "Music Producer" },
      { name: "Djuensie Cherfils", role: "Programming Lead & Creative Director" },
      { name: "Dylan Chin", role: "Art Lead" },
      { name: "Eason Wang", role: "Programmer" },
      { name: "Jenny Zeng", role: "Narrative" },
      { name: "Karen Zheng", role: "Artist" },
      { name: "Raven Grusky", role: "Artist" }
    ]
  },
  {
    slug: "curupira",
    title: "Curupira",
    description:
      "A 3D adventure where you gather resources, solve puzzles shaped by nature, and face guardian spirits—all while racing to save the macaw tribe from a spreading wildfire.",
    image: curupiraImg,
    icon: curupiraIcon,
    footageLink: "https://www.youtube.com/watch?v=_SDDF8wmwuI&list=PL2mM2AI1SfH6qeHyRx_oihC_tMo4uF89o",
    credits: [
      { name: "Dylan Chin", role: "Lead Artist + Programmer" },
      { name: "Samson Wu", role: "Lead Programmer" },
      { name: "Amanda Li", role: "Project Manager + Narrative" },
      { name: "Jenny Zeng", role: "Lead Sound Design + Programmer" },
    ],
  },
  {
    slug: "nun-of-your-business",
    title: "Nun of Your Business",
    description:
      "Oh no! You poisoned your superior, and now you've ended up in... Hell? In NOYB (2022), you wake up in an arena and have to race other nuns to Heaven's door!",
    image: nunImg,
    icon: nunIcon,
    gameplayLink: "https://aaron-noh.itch.io/nun-of-your-business",
    footageLink: "https://www.youtube.com/watch?v=X8gQevnGSmo&list=PL2mM2AI1SfH5IAdesntyCSYS8M8aUSujQ",
    credits: [
      { name: "Dylan Chin", role: "Lead Artist + Co-Lead Programmer" },
      { name: "Aaron Noh", role: "Co-Lead Programmer" },
      { name: "Diego Tlatelpa", role: "Programmer" },
      { name: "Lorraine Antunish", role: "Narrative" },
      { name: "Taryn Atienza", role: "Sound Design" },
    ],
  },
  {
    slug: "pius",
    title: "Pius",
    description:
      "Step into the mask of a plague doctor, traveling door to door to treat the sick, though not everyone welcomes your remedies. Solo project created in under a week. Showcased at UrbanArts’ Arcade Event (2022).",
    image: piusImg,
    icon: piusIcon,
    gameplayLink: "https://dynotics.itch.io/pius",
    footageLink: "https://dynotics.itch.io/pius",
    credits: [{ name: "Dylan Chin", role: "Developer" }],
  },
];
