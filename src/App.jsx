// child components are imported at top in app.jsx
import Header from "./Header.jsx"; 
import Footer from "./Footer.jsx";
import Greet from "./components/Greet.jsx";
import Bye from "./components/DefaultExport.jsx"
import ClassCompWelcome from "./components/ClassComponent.jsx"
import Hello from "./components/Hello.jsx"
import CreateEleobj from "./components/CreateEle.jsx"
import Welcome from "./components/Welcome.jsx";
import Message from "./components/Message.jsx";
import Counter from "./components/counter.jsx";
import FunctionClick from "./components/FunctionClick.jsx";
import ClassClick from "./components/ClassClick.jsx"
import EventBind from "./components/EventBind.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
import UserGreetings from "./components/UserGreetings.jsx";
import NameList from "./components/NameList.jsx"

export default function App() {
  // return (
  //   <div>
  //     using the header component 
  //     <Header />
  //     <h1>Hello World 🚀</h1>
  //     <p>React + Vite is working!</p>
  //     <h1>react has sooo many files!</h1>
  //     <p>it looks soo complicated, i hope i master it one day</p>

  //     <Footer/>
  //     <Bye/>
  //     <ClassCompWelcome/>
  //     <Hello/>
  //     <CreateEleobj/>
  //     {/* adding props */}
  //     <Greet name="varad" grade="9.9"/>
  //     <Greet name="lomesh" grade="8"/>
  //     <Greet name="hero" grade="100"/>

  //     {/* Here we are using class components, so use of this keyword is allowed. */}
  //     <Welcome name="bruce" heroName="batman"/>
  //     <Welcome name="clark" heroName="superman"/>
  //     <Welcome name="peter" heroName="spiderman"/>

  //     {/* uisng states */}
  //     <Message/>

  //     {/* using counter to increment a number */}
  //     <h1>usign setState() to increment the counter</h1>
  //     <Counter/>

  //     {/* adding an event listner  */}
  //     <FunctionClick/>

  //     {/* doing it with a  class component */}
  //     <ClassClick/>

  //     {/* adding event bind  */}
  //     <EventBind/>
  //   </div>
  // );
    return (
      <div>
        <ParentComponent/>
        <UserGreetings/>

        <NameList/>
      </div>
    )
}
