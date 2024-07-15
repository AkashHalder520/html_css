import Body from "./Components/Landingpage/Body"
import Footer from "./Components/Landingpage/Footer"
import Header from "./Components/Landingpage/Header"


function App() {
  

  return (
    <>
    <div className="bg-amber-50 h-screen p-4 lg: flex flex-col items-center">
    <Header/>
    <Body/>
    <Footer/>
    </div>
    </>
  )
}

export default App
