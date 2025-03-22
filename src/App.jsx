import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12 p-8 bg-yellow-50 min-h-screen">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="w-full text-center py-4 border-b-4 border-yellow-500">
      <h1 className="text-5xl font-bold uppercase text-yellow-500">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="flex flex-col items-center gap-8">
      <h2 className="text-2xl uppercase border-b-2 border-yellow-500">Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p className="text-lg text-center w-4/5">
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p className="text-lg">We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`flex gap-4 items-center p-4 rounded-lg shadow-md ${pizzaObj.soldOut ? "opacity-50" : "bg-white"}`}>
      <img className="w-24 h-24 rounded-md" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3 className="text-xl font-semibold">{pizzaObj.name}</h3>
        <p className="text-sm text-gray-600">{pizzaObj.ingredients}</p>
        <span className="block font-bold text-lg">{pizzaObj.soldOut ? "Sold Out" : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="text-center text-sm mt-12">
      {isOpen ? (
        <Order openHour={openHour} closedHour={closedHour} />
      ) : (
        <p>We are happy to welcome you between {openHour}:00 and {closedHour}:00.</p>
      )}
    </footer>
  );
}

function Order({ openHour, closedHour }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p>We're open from {openHour}:00 to {closedHour}:00. Come visit us or order now!</p>
      <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition">Order</button>
    </div>
  );
}
export default App

// React version 18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );