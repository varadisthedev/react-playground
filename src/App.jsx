// child components are imported at top in app.jsx
// import Header from "./Header.jsx"; 
// import Footer from "./Footer.jsx";
// import Greet from "./components/Greet.jsx";
// import Bye from "./components/DefaultExport.jsx"
// import ClassCompWelcome from "./components/ClassComponent.jsx"
// import Hello from "./components/Hello.jsx"
// import CreateEleobj from "./components/CreateEle.jsx"
// import Welcome from "./components/Welcome.jsx";
// import Message from "./components/Message.jsx";
// import Counter from "./components/counter.jsx";
// import FunctionClick from "./components/FunctionClick.jsx";
// import ClassClick from "./components/ClassClick.jsx"
// import EventBind from "./components/EventBind.jsx";
// import ParentComponent from "./components/ParentComponent.jsx";
// import UserGreetings from "./components/UserGreetings.jsx";
// import NameList from "./components/NameList.jsx"
// //import Stylesheet from "./components/Stylesheet.jsx";
// //import Inline from "./Inline.jsx";
// // import './appStyles.css'
// //importing a module stylesheet
// //import styles from './appStyle.module.css'
// import Form from "./components/Form.jsx";
// import LifeCycleA from "./components/LifeCycleA.jsx";
// import Fragments from "./components/Fragments.jsx";
// import PureComp from "./components/PureComp.jsx";
// import ParentComp from "./components/ParentComp.jsx";
import Callbackref from "./components/Callbackref.jsx";
import ClickCounter2 from "./components/ClickCounter2.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Hero from "./components/Hero.jsx";
import PortalDemo from "./components/PortalDemo.jsx";
import RefsDemo from "./components/RefsDemo.jsx";
import { UserProvider } from "./components/userContext.js";
import HoverCounter2 from "./HoverCounter2.jsx";
import User from "./components/User.jsx";
import ComponentC from "./components/ComponentC.jsx";
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
      // <div>
      //   {/* <ParentComponent/>
      //   <UserGreetings/>

      //   <NameList/> */}

      //   {/* adding css in react */}
      //   {/* <Stylesheet  primary={true}/> */}
      //   {/* doing it with inline styling */}
      //   {/* <Inline/> */}

      //   {/* using the css, vanilla and modules */}
      //   {/* <h1 className='error'>error caught</h1>
      //   <h1 className={styles.success}>sucess! yayyyyy</h1> */}
      //     {/* normal css is by deafault also applied to child components, while the module css is not */}
      //     {/* that may cause confilicts with css */}
          

      //   {/* form in jsx */}
      //   {/* <Form/> */}
        
      //   {/* lifecycle method in react */}
      //   {/* <LifeCycleA/> */}
       
      
      
      // </div>
      //  <Fragments/>

      // <PureComp/>
       //<ParentComp/>
      <>
      {/* <RefsDemo/> */}
      {/* <Callbackref/> */}
      {/* <PortalDemo/>  */}

      {/* <ErrorBoundary>
          <Hero heroName="batman"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="hulk"/>
      </ErrorBoundary>
         
      <ErrorBoundary>
        <Hero heroName="iron-man"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="joker"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="hulk"/>
      </ErrorBoundary> */}
      {/* <ClickCounter2/>
      <HoverCounter2/>
      <User render={(isLoggedIn)=>isLoggedIn? 'varad' : 'guest login'}/>  */}


      {/* <UserProvider value="varad">
        <ComponentC/>
      </UserProvider> */}
  
    


      </>

    )
}
