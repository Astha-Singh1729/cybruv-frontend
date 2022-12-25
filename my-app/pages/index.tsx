import Navbar from "../components/home/Navbar"
import Termina from "../components/home/Terminal"
import Beginners from "../components/home/Series"
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Termina></Termina>
      <Beginners />
    </>
  )
}
