const review = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Susan Smith",
    job: "web developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at nihil inventore ex esse ad tenetur deleniti, libero eius corporis ratione provident et dolores quisquam distinctio quo minima consequatur similique?",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "John Johnson",
    job: "web designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic natus iste doloremque, perferendis alias commodi rem earum, quod, quidem pariatur reprehenderit voluptatem voluptate quia quae odit mollitia quos nemo.",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/lego/5.jpg",
    name: "Fred Tompson",
    job: "estagiário",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore similique minima quasi. Cumque et, dolore fuga maxime libero facere omnis sunt, magniodit amet delectus provident, nesciunt quo maiores inventore.",
  },
];

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  getPerson(currentItem);
});

function getPerson(person) {
  img.src = review[person].img;
  name.textContent = review[person].name;
  job.textContent = review[person].job;
  info.textContent = review[person].info;
}

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  getPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  getPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * review.length);
  getPerson(currentItem);
});
