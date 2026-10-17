
const MENU = [
  {
    id: "breakfast",
    title: "Breakfast",
    am: "ቁርስ",
    items: [
      {
        n: "Firfir",
        am: "ፍርፍር",
        d: "Shredded injera tossed in spiced berbere sauce with niter kibbeh.",
        p: 180,
        h: 1,
      },
      {
        n: "Ful",
        am: "ፉል",
        d: "Mashed fava beans with onion, tomato, green chili and olive oil.",
        p: 150,
        v: 1,
      },
      {
        n: "Chechebsa",
        am: "ጨጨብሳ",
        d: "Pan-fried flatbread pieces with berbere and clarified butter, served with honey.",
        p: 170,
        h: 1,
      },
      {
        n: "Enkulal Firfir",
        am: "እንቁላል ፍርፍር",
        d: "Scrambled eggs with tomato, onion and green pepper, served with bread.",
        p: 160,
      },
    ],
  },
  {
    id: "meat",
    title: "Meat",
    am: "የስጋ ምግብ",
    items: [
      {
        n: "Special Tibs",
        am: "ጥብስ",
        d: "Sautéed beef cubes with onion, rosemary and green chili.",
        p: 420,
      },
      {
        n: "Kitfo",
        am: "ክትፎ",
        d: "Minced beef with mitmita and niter kibbeh, served with ayib and gomen.",
        p: 480,
        h: 1,
      },
      {
        n: "Doro Wat",
        am: "ዶሮ ወጥ",
        d: "Chicken stew in rich berbere sauce with a boiled egg.",
        p: 450,
        h: 1,
      },
      {
        n: "Siga Wat",
        am: "ሥጋ ወጥ",
        d: "Slow-cooked beef stew with berbere and spiced butter.",
        p: 400,
        h: 1,
      },
      {
        n: "Dulet",
        am: "ዱለት",
        d: "Minced tripe, liver and beef sautéed with onion and chili.",
        p: 380,
        h: 1,
      },
      {
        n: "Gored Gored",
        am: "ጎረድ ጎረድ",
        d: "Cubed raw beef with awaze and mitmita dip.",
        p: 460,
        h: 1,
      },
    ],
  },
  {
    id: "fasting",
    title: "Fasting",
    am: "የጾም ምግብ",
    items: [
      {
        n: "Shiro",
        am: "ሽሮ",
        d: "Silky chickpea stew with garlic, onion and berbere.",
        p: 220,
        v: 1,
        h: 1,
      },
      {
        n: "Misir Wat",
        am: "ምስር ወጥ",
        d: "Red lentils simmered in berbere sauce.",
        p: 210,
        v: 1,
        h: 1,
      },
      {
        n: "Gomen",
        am: "ጎመን",
        d: "Collard greens cooked with garlic, ginger and onion.",
        p: 190,
        v: 1,
      },
      {
        n: "Atkilt Wat",
        am: "አትክልት ወጥ",
        d: "Cabbage, carrot and potato in a mild turmeric sauce.",
        p: 190,
        v: 1,
      },
      {
        n: "Beyaynetu",
        am: "በያይነቱ",
        d: "Fasting platter with shiro, misir, gomen, atkilt and salad on injera.",
        p: 320,
        v: 1,
      },
      {
        n: "Timatim Salad",
        am: "ቲማቲም ሰላጣ",
        d: "Tomato, onion and jalapeño with lemon dressing.",
        p: 140,
        v: 1,
      },
    ],
  },
  {
    id: "combo",
    title: "Platters",
    am: "ድብልቅ",
    items: [
      {
        n: "Meat Combo for Two",
        am: "ድብልቅ ለሁለት",
        d: "Tibs, doro wat and kitfo with injera and salad.",
        p: 850,
      },
      {
        n: "Family Mesob",
        am: "የቤተሰብ መሶብ",
        d: "Large mixed platter for four with meat and vegetable dishes.",
        p: 1600,
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    am: "መጠጥ",
    items: [
      {
        n: "Buna (Coffee)",
        am: "ቡና",
        d: "Ethiopian coffee roasted and brewed at your table.",
        p: 50,
        v: 1,
      },
      {
        n: "Shai (Spiced Tea)",
        am: "ሻይ",
        d: "Black tea with cinnamon, clove and cardamom.",
        p: 40,
        v: 1,
      },
      {
        n: "Tej",
        am: "ጠጅ",
        d: "Traditional honey wine served in a berele.",
        p: 160,
      },
      { n: "Tella", am: "ጠላ", d: "Home-brewed barley beer.", p: 90 },
      {
        n: "Avocado Juice",
        am: "አቮካዶ ጭማቂ",
        d: "Fresh layered avocado, papaya and mango juice.",
        p: 110,
        v: 1,
      },
    ],
  },
];

const tabsEl = document.getElementById("tabs");
const menuEl = document.getElementById("menu");
const emptyEl = document.getElementById("empty");
const searchEl = document.getElementById("search");
let active = "all";

function dishHTML(i) {
  const tags =
    (i.v ? '<span class="dot vegan" title="Fasting / vegan"></span>' : "") +
    (i.h ? '<span class="dot hot" title="Spicy"></span>' : "");
  return `<li class="dish">
    <div class="dish-top">
      <h3>${i.n} <span class="am" lang="am">${i.am}</span> ${tags}</h3>
      <span class="leader"></span>
      <span class="price">${i.p} ETB</span>
    </div>
    <p>${i.d}</p>
  </li>`;
}

function render() {
  const q = searchEl.value.trim().toLowerCase();
  let html = "",
    count = 0;
  MENU.forEach((cat) => {
    if (active !== "all" && active !== cat.id) return;
    const items = cat.items.filter(
      (i) => !q || (i.n + i.am + i.d).toLowerCase().includes(q),
    );
    if (!items.length) return;
    count += items.length;
    html += `<section class="category" id="${cat.id}">
      <h2>${cat.title} <span class="am" lang="am">${cat.am}</span></h2>
      <ul class="dishes">${items.map(dishHTML).join("")}</ul>
    </section>`;
  });
  menuEl.innerHTML = html;
  emptyEl.hidden = count > 0;
}

function buildTabs() {
  const all = [{ id: "all", title: "All" }, ...MENU];
  tabsEl.innerHTML = all
    .map(
      (c) =>
        `<button class="tab${c.id === active ? " on" : ""}" role="tab" data-id="${c.id}">${c.title}</button>`,
    )
    .join("");
}

tabsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (!b) return;
  active = b.dataset.id;
  buildTabs();
  render();
});
searchEl.addEventListener("input", render);

buildTabs();
render();
