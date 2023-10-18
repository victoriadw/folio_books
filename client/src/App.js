import "./App.scss";
import BookCard from "./components/BookCard/BookCard";
import Nav from "./components/Nav/Nav";

const books = [
  {
    id: "eb30c283-195e-4182-baf3-c3c14698fef1",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    image_src:
      "https://cdn.waterstones.com/override/v3/medium/9780/3494/9780349441573.jpg",
    price: 20.0,
    stars: 4.5,
  },
  {
    id: "762a4995-7c8b-43b9-9bf4-7934a916406a",
    title: "Really Good, Actually",
    author: "Monica Heisey",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9780/0085/9780008511760.jpg",
    price: 8.49,
    stars: 5,
  },
  {
    id: "61d6f70b-afd4-46b4-ac67-2e4465aa6e63",
    title: "The Blunders",
    author: "David Walliams",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9780/0083/9780008305840.jpg",
    price: 7.49,
    stars: 5,
  },
  {
    id: "39107d4d-4b2c-41b3-8e4a-7badf74008e8",
    title: "The Running Grave",
    author: "Robert Galbraith",
    image_src:
      "https://cdn.waterstones.com/override/v6/medium/9781/4087/9781408730942.jpg",
    price: 12.5,
    stars: null,
  },
  {
    id: "1228939d-9d5a-40a2-a461-1ec48a45f566",
    title: "Unruly",
    author: "David Mitchell",
    image_src:
      "https://cdn.waterstones.com/override/v1/medium/9781/4059/9781405953177.jpg",
    price: 12.5,
    stars: 4.5,
  },
  {
    id: "0463e49d-8e6f-4619-bf7b-d5249e74cf05",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9781/5291/9781529115543.jpg",
    price: 8.49,
    stars: 4.5,
  },
  {
    id: "68335ab3-cdd4-4b09-938c-b1405985fd00",
    title: "Rambling Man",
    author: "Billy Connolly",
    image_src:
      "https://cdn.waterstones.com/override/v1/medium/9781/3998/9781399814775.jpg",
    price: 12.5,
    stars: null,
  },
  {
    id: "7d0eca6e-3c35-447e-9d8c-46c7892cac27",
    title: "The Future of Geography",
    author: "Tim Marshall",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9781/7839/9781783967247.jpg",
    price: 8.49,
    stars: 4.5,
  },
  {
    id: "6185656b-a37f-42e2-8211-da1dce9e4030",
    title: "Murdle",
    author: "G.T. Karber",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9781/8008/9781800818026.jpg",
    price: 12.99,
    stars: 4.5,
  },
  {
    id: "6874ca12-c290-4383-af6b-38022b5b56a8",
    title: "The Other Half",
    author: "Charlotte Vassell",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9780/5713/9780571374977.jpg",
    price: 8.49,
    stars: 4.5,
  },
  {
    id: "897395f4-20f6-4939-b3d5-2f4afdc9f8ed",
    title: "The Pumpkin Spice Caf\u00c3\u00a9",
    author: "Laurie Gilmore",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9780/0086/9780008610678.jpg",
    price: 8.49,
    stars: 4.5,
  },
  {
    id: "978173d0-0b95-4368-88fd-80361d686fae",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9781/8049/9781804990926.jpg",
    price: 7.99,
    stars: 4.5,
  },
  {
    id: "a2e5c937-d82f-4fad-8382-cdd3309090b4",
    title: "Politics On the Edge",
    author: "Rory Stewart",
    image_src:
      "https://cdn.waterstones.com/override/v2/medium/9781/7873/9781787332713.jpg",
    price: 18.99,
    stars: 5,
  },
  {
    id: "c113a62b-185f-4533-bd06-9b005a16abf8",
    title: "Wildfire",
    author: "Hannah Grace",
    image_src:
      "https://cdn.waterstones.com/override/v1/medium/9781/3985/9781398525719.jpg",
    price: 8.49,
    stars: 4.5,
  },
  {
    id: "f8fc5d20-c3b2-4b31-a098-0a534f732133",
    title: "A Stroke of the Pen",
    author: "Terry Pratchett",
    image_src:
      "https://cdn.waterstones.com/override/v1/medium/2928/3772/2928377218119.jpg",
    price: 20.0,
    stars: 4.5,
  },
  {
    id: "7965d06a-e8f6-465b-a413-2187b828011d",
    title: "Days at the Morisaki Bookshop",
    author: "Satoshi Yagisawa",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9781/7865/9781786583239.jpg",
    price: 9.49,
    stars: 4.5,
  },
  {
    id: "f84404aa-d092-4471-84c9-0fdefad25106",
    title: "The Satsuma Complex",
    author: "Bob Mortimer",
    image_src:
      "https://cdn.waterstones.com/override/v1/medium/9781/3985/9781398521230.jpg",
    price: 7.49,
    stars: 4.5,
  },
  {
    id: "c4fd3a88-9107-4a6c-891e-876caa55a8d1",
    title: "Lego Marvel Minifigures Series",
    author: "",
    image_src:
      "https://cdn.waterstones.com/override/v1/medium/5702/0174/5702017417820.jpg",
    price: 3.75,
    stars: null,
  },
  {
    id: "42ef70fb-e73a-44ff-bee4-6592cfdd10a5",
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    image_src:
      "https://cdn.waterstones.com/override/v2/medium/9781/5290/9781529029581.jpg",
    price: 9.99,
    stars: 4.5,
  },
  {
    id: "d0cb6072-1a31-4970-aa48-286686f1fe06",
    title: "A Little Life",
    author: "Hanya Yanagihara",
    image_src:
      "https://cdn.waterstones.com/override/v2/medium/9781/5290/9781529077216.jpg",
    price: 10.99,
    stars: 4.5,
  },
  {
    id: "39a463fb-3d05-4e8c-ae4d-62401a39a7fa",
    title: "The Completely Chaotic Christmas of Lottie Brooks",
    author: "Katie Kirby",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9780/2416/9780241647172.jpg",
    price: 7.49,
    stars: null,
  },
  {
    id: "61c26713-e8f0-43cc-896c-42860153cf78",
    title: "The Bullet That Missed",
    author: "Richard Osman",
    image_src:
      "https://cdn.waterstones.com/override/v2/medium/9780/2419/9780241992388.jpg",
    price: 7.99,
    stars: 4.5,
  },
  {
    id: "c40cd043-5693-4ba7-a2db-3d76c3aeafbf",
    title: "Demon Copperhead",
    author: "Barbara Kingsolver",
    image_src:
      "https://cdn.waterstones.com/override/v1/medium/9780/5713/9780571376483.jpg",
    price: 8.49,
    stars: 4.5,
  },
  {
    id: "eda5ebe7-231d-4381-a3d7-985df9c36cf6",
    title: "So Late in the Day",
    author: "Claire Keegan",
    image_src:
      "https://cdn.waterstones.com/bookjackets/medium/9780/5713/9780571382019.jpg",
    price: 8.99,
    stars: 4.5,
  },
];

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <div className="books-container container">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default App;
