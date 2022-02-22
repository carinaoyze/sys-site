import { Navigation } from "../src/components/Navigation";
import  { Rodapezao }  from "../src/components/Rodapezao";
import { GlobalStyles } from "../../sys-site/src/styles/index"
export default function Home() {
  return (
      <>
      <GlobalStyles />
        <Navigation />
        <Rodapezao />
      </>
  )
}
