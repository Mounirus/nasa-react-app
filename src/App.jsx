import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
