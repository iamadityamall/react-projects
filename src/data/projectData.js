import link01 from "../images/rp-01-birthday-reminder-ui.png";
import link02 from "../images/rp-02-github-users.png"
import link03 from "../images/rp-03-tours-card.png"

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
    name: "Reviews",
    image: link03,
    info: "Used conditional rendering for read more and show less. implemented try and catch method for fetching the data from api, and passed functions through prop drilling.",
    link: "https://rp-tours-card.netlify.app/",
  },
  {
    id: 3,
    name: "Accordion",
    image: "",
    info: "Projects are the most practical way to learn any language, and React is no exception. Solidify your knowledge of React by creating these cool projects.",
  },
];