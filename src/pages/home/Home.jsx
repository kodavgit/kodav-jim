import "./home.css"
import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs"
import Values from "../../components/Values"
import FAQs from "../../components/FAQs"
import Testimonails from "../../components/Testimonails"

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonails />
    </>
  )
}

export default Home