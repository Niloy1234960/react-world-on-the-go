import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const contriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then( res => res.json())

function App() {
  return (
    <>
      <section id="center">
        <div>
          <Suspense fallback={<h3>Countries are comming...</h3>}>
            <Countries contriesPromise={contriesPromise}></Countries>
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default App;
