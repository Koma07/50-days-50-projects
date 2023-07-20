const time = document.querySelector(".time");
const bar = document.querySelector(".bar");
const testimonialText = document.querySelector(".testimonial");
const testimonialName = document.querySelector(".person-name b");
const testimonialPosition = document.querySelector(".person-name span");
const testimonialProfilePic = document.querySelector(".person-pic img");

let employees = [
  // Array with objects, that contains the info to be displayed.
  {
    name: "Sasha Cho",
    position: "Accounant",
    profilePic:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
  },

  {
    name: "Renee Sims ",
    position: "Receptionist",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time Ive hired him, and Ill hire him again in the future.",
  },

  {
    name: "Miyah Miles",
    position: "Marketing",
    profilePic: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },

  {
    name: "June Cha",
    position: "Software Engineer",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
  },
];

employees.forEach(() => {
  let idx = 1; // Sets an initial index to display info into the web page
  // SetInterval to change the info displayed in the web page with an index, every 8 seconds.
  setInterval(() => {
    testimonialText.innerHTML = `${employees[idx].text}`;
    testimonialProfilePic.src = `${employees[idx].profilePic}`;
    testimonialName.innerHTML = `${employees[idx].name}`;
    testimonialPosition.innerHTML = `${employees[idx].position}`;
    testimonialText.innerHTML = `${employees[idx].text}`;
    idx++;
    // If the index gets greater than the employees arrays, sets it to zero again.
    if (idx >= employees.length) {
      idx = 0;
    }
  }, 8000);
});
