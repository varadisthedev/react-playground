// child components are imported at top in app.jsx
import Header from "./Header.jsx"; 
import Footer from "./Footer.jsx";
import {Greet} from "./components/Greet.jsx";
import Bye from "./components/DefaultExport.jsx"
import ClassCompWelcome from "./components/ClassComponent.jsx"
import Hello from "./components/Hello.jsx"
import CreateEleobj from "./components/CreateEle.jsx"

export default function App() {
  return (
    <div>
  
      {/*using the header component*/} 
      <Header />

      <h1>Hello World 🚀</h1>
      <p>React + Vite is working!</p>
      <h1>react has sooo many files!</h1>
      <p>it looks soo complicated, i hope i master it one day</p>

      <Footer/>
      <Bye/>
      <ClassCompWelcome/>
      <Hello/>
      <CreateEleobj/>
      {/* adding props */}
      <Greet name="varad" grade="9.9"/>
      <Greet name="lomesh" grade="8"/>
      <Greet name="hero" grade="100"/>
    </div>
  );
}
