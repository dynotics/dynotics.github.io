// showcase covers
import popImg from "~/assets/showcase/popordrop.png";
import vanishImg from "~/assets/showcase/thevanishingenigma.png";
import curupiraImg from "~/assets/showcase/curupira.jpg";
import nunImg from "~/assets/showcase/nunofyourbusiness.png";
import piusImg from "~/assets/showcase/pius.png";

// icons
import piusIcon from "~/assets/icons/piusicon.jpg";
import curupiraIcon from "~/assets/icons/curupiraicon.png";
import nunIcon from "~/assets/icons/nunicon.jpg";

// game art
import curuImg from "~/assets/curupira-art/curu.png";
import ademirImg from "~/assets/curupira-art/ademir.png";
import capybara1Img from "~/assets/curupira-art/capybara1.jpg";
import capybara2Img from "~/assets/curupira-art/capybara2.jpg";
import minionsImg from "~/assets/curupira-art/minions.png";
import ffImg from "~/assets/curupira-art/ff.png";

import piusTotem1 from "~/assets/pius-art/totems.png";
import piusTotem2 from "~/assets/pius-art/totems1.png";
import piusTotem3 from "~/assets/pius-art/totems2.png";
import piusScythe from "~/assets/pius-art/scythe.gif";
import piusBow from "~/assets/pius-art/bow.gif";
import piusGreatsword from "~/assets/pius-art/greatsword.gif";
import piusMap from "~/assets/pius-art/map.gif";
import piusBg1 from "~/assets/pius-art/background1.gif";
import piusBg2 from "~/assets/pius-art/background2.jpg";

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
      { name: "Leo Lui", role: "Technical Artist" },
    ],
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
      { name: "Raven Grusky", role: "Artist" },
    ],
  },
  {
    slug: "curupira",
    title: "Curupira",
    description:
      "A 3D adventure where you gather resources, solve puzzles shaped by nature, and face guardian spirits—all while racing to save the macaw tribe from a spreading wildfire.",
    image: curupiraImg,
    icon: curupiraIcon,
    footageLink:
      "https://www.youtube.com/watch?v=_SDDF8wmwuI&list=PL2mM2AI1SfH6qeHyRx_oihC_tMo4uF89o",
    credits: [
      { name: "Dylan Chin", role: "Lead Artist + Programmer" },
      { name: "Samson Wu", role: "Lead Programmer" },
      { name: "Amanda Li", role: "Project Manager + Narrative" },
      { name: "Jenny Zeng", role: "Lead Sound Design + Programmer" },
    ],
    sections: [
      {
        title: "Character Concepts",
        entries: [
          {
            name: "Curu & Selene",
            text: "Curu is based on the maned wolf and the Curupira from Amazonian myth. She wakes after a long sleep to a forest that feels both familiar and strange. Selene is a beetle that rides on her head. Named after Paraselenis, she acts as the player’s guide.",
            images: [curuImg],
          },
          {
            name: "Ademir, Chief of the Eastern Parrot Tribe",
            text: "Ademir takes after the scarlet macaw. He leads the Eastern Parrot Tribe, working to keep his flock alive by rebuilding nests, gathering food, and standing guard by the river.",
            images: [ademirImg],
          },
        ],
      },
      {
        title: "Enemy Designs",
        entries: [
          {
            name: "Capybara Guardian",
            text: "A capybara boss that blocks the river and cuts the tribe off from water.",
            images: [capybara1Img, capybara2Img],
          },
          {
            name: "Rock Minions",
            text: "Small minions that serve F.F. Each one carries fire on its head that can be put out and reignited. They are weak alone but dangerous in large numbers.",
            images: [minionsImg],
          },
          {
            name: "F.F., the Flame Figure",
            text: "The main antagonist, shown in two states: extinguished and ignited. Very little is known about this figure. Its presence is felt through the destruction it leaves behind.",
            images: [ffImg],
          },
        ],
      },
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
    footageLink:
      "https://www.youtube.com/watch?v=X8gQevnGSmo&list=PL2mM2AI1SfH5IAdesntyCSYS8M8aUSujQ",
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
    sections: [
      {
        title: "Weapons",
        entries: [
          {
            images: [piusTotem1, piusTotem2, piusTotem3],
          },
          {
            name: "Branch of Life (Scythe)",
            text: "Default weapon. Hold left click to summon souls from the lantern and form a scythe that cuts through enemies.",
            images: [piusScythe],
          },
          {
            name: "Necro’s Spire (Bow)",
            text: "Unlocked after collecting Necro’s totem. Hold space to draw and fire arrows. The totem is located on the far-left rooftop.",
            images: [piusBow],
          },
          {
            name: "Harlow’s Wrath (Greatsword)",
            text: "Unlocked after Necro’s bow. Fire an arrow at the far-right barrier to create a platform and reach Harlow’s totem. Hold Z to swing the greatsword.",
            images: [piusGreatsword],
          },
        ],
      },
      {
        title: "Map",
        entries: [{ images: [piusMap] }],
      },
      {
        title: "Backgrounds",
        entries: [
          {
            images: [piusBg1, piusBg2],
          },
        ],
      },
    ],
  },
];
