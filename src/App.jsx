// child components are imported at top in app.jsx
import Header from "./Header.jsx"; 

export default function App() {
  return (
    <div>
      {/*using the header component*/} 
      <Header />

      <h1>Hello World 🚀</h1>
      <p>React + Vite is working!</p>

      <h1>react has sooo many files!</h1>
      <p>it looks soo complicated, i hope i master it one day</p>
    </div>
  );
}
