import { Navigation } from "../src/components/Navigation"
import { AboutUs } from "../src/components/AboutUs";
import { Rodapezao } from "../src/components/Rodapezao";
import { GlobalStyles } from "../../sys-site/src/styles/index"

export default function Sobre() {
  return (
      <>
       <GlobalStyles />
        <Navigation />
        <AboutUs />
        <Rodapezao />
      </>
  )
}