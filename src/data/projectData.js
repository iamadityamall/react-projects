import link01 from "../images/rp-01-birthday-reminder-ui.png";
import link02 from "../images/rp-02-github-users.png"

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
    info: "fetched github users using async await in useEffect hooks with empty dependency to run it only on its first render.(https://api.github.com/users)",
  },
  {
    id: 2,
    name: "Reviews",
    image: "",
    info: "Projects are the most practical way to learn any language, and React is no exception. Solidify your knowledge of React by creating these cool projects.",
  },
  {
    id: 3,
    name: "Accordion",
    image: "",
    info: "Projects are the most practical way to learn any language, and React is no exception. Solidify your knowledge of React by creating these cool projects.",
  },
];