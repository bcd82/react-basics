import { Ex1 } from "./pages/Ex1.jsx";
import { Ex2 } from "./pages/Ex2.jsx";
import { Ex3 } from "./pages/Ex3.jsx";
import { Ex4 } from "./pages/Ex4.jsx";

export class App extends React.Component  {

state = {
  page :'ex4',
} 


goPage = (pageName) => { 
  this.setState({page:pageName})

}

// Simple React Component
  render() {
    return(
    <section className="app">
     <header>
        <h1>React Basics</h1>
        <nav>
          <a href="#" onClick={()=>{this.goPage('ex1')}}>Ex1</a> 
          <a href="#" onClick={()=>{this.goPage('ex2')}}>Ex2</a>
          <a href="#" onClick={()=>{this.goPage('ex3')}}>Ex3</a>
          <a href="#" onClick={()=>{this.goPage('ex4')}}>Ex4</a>
        </nav>
      </header>
      <main>
        { this.state.page === 'ex1' && <Ex1/>}
        { this.state.page === 'ex2' && <Ex2/>}
        { this.state.page === 'ex3' && <Ex3/>}
        { this.state.page === 'ex4' && <Ex4/>}
      </main>
    </section>
    )
  }
}

