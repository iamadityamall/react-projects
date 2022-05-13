import link01 from "../images/rp-01-birthday-reminder-ui.png";
import link02 from "../images/rp-02-github-users.png";
import link03 from "../images/rp-03-tours-card.png";
import link04 from "../images/rp-04-reviews.png";
import link05 from "../images/rp-05-accordion.png";
import link06 from "../images/rp-06-lorem-ipsusm.png";
import link07 from "../images/rp-07-color-generator.png";
import link08 from "../images/rp-08-menu.png";

export const projects = [
  {
    id: 0,
    name: "Birthday Reminder",
    image: link01,
    info: "Utilized useState hook with map array method for iterating data. enabled reset button when length of birthdays equaled to one use conditional rendering.",
    link: "https://rp-birthday-reminder-ui.netlify.app/",
  },
  {
    id: 1,
    name: "Github Users",
    image: link02,
    info: "Fetched data through api, using async await in useEffect hooks with empty dependency to run it only on its first render.(https://api.github.com/users)",
    link: "https://rp-github-users.netlify.app/",
  },
  {
    id: 2,
    name: "Tours Card",
    image: link03,
    info: "Used conditional rendering for read more and show less. implemented try and catch method for fetching the data from api, and passed functions through prop drilling.",
    link: "https://rp-tours-card.netlify.app/",
  },
  {
    id: 3,
    name: "Reviews",
    image: link04,
    info: "useState is used to change the reviews and math random method we generated random indexes to populate the reviews.",
    link: "https://rp-reviews.netlify.app/",
  },
  {
    id: 4,
    name: "Accordion",
    image: link05,
    info: "Basic question and answer accordion, made with conditionally rendering to display answers on demand. Data fetched is locally stored and iterated in reuseable component singlequestion.",
    link: "https://rp-accordion.netlify.app/",
  },
  {
    id: 5,
    name: "Lorem Ipsum Generator",
    image: link06,
    info: "Lorem ipsum generator made out from data fetched locally from data.js. added features include a modal which falls down when paragraph number is negative or more than paragraph available (9).",
    link: "https://rp-lorem-ipsum.netlify.app/",
  },
  {
    id: 6,
    name: "Color Generator",
    image: link07,
    info: "using value.js npm package, different shades of the color is displayed. used web api of copy to clipboard when a color is clicked.",
    link: "https://rp-color-generator.netlify.app/",
  },
  {
    id: 7,
    name: "Menu filter",
    image: link08,
    info: "filterd category using Set object where unique values are filterd. Implementd custom filter function to display filterd menu items based on category.",
    link: "https://rp-menu.netlify.app/",
  },
];
