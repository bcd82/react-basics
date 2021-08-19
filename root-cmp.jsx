import { Ex1 } from "./pages/Ex1.jsx";

let page = 'ex1'

const goPage = (pageName) => { 
  page = pageName
}

// Simple React Component
export function App() {
  return (
    <section className="app">
     <header>
            <h1>React Basics</h1>
            <nav>
                <a href="#" onClick={()=>{
                        goPage('ex1')
                    }}>Ex1</a> |
                    <a href="#" onClick={()=>{
                        goPage('ex2')
                    }}>Ex2</a>
                </nav>
            </header>
            <main>
                {page === 'ex1' && <Ex1 />}
            </main>
    </section>
  );
}

