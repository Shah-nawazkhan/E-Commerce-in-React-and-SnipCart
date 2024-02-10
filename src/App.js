import "./index.css"
import "./App.css"
import products from "./assets/products.json"
import Product from "./components/Product";
export default function App() {
  return (
      <div className={"container"}>
        <main className={"main"}>
          <h1>
            E-Commerce in React and SnipCart
          </h1>
          <div className={"grid"}>
            {
              products.map((product, i) => <Product {...product} key={i}/>)
            }
          </div>
        </main>
        <div
            id="snipcart"
            data-api-key="NmExYmEwNWUtN2M2ZS00MmY0LWIyOTctNTZjYTY5N2Y5YTVjNjM4NDMxNjQ3NjczNzI3NDE4" hidden
        >
        </div>
      </div>
  );
}