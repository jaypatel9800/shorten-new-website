import React from "react"
import Navbar from "./styled-components/navbar"
import Hero from "./styled-components/hero"
import Link from "./styled-components/url"
import Section from "./styled-components/colomnLayout"
import Blue from "./styled-components/blueSection"
import Footer from "./styled-components/footer"

const App = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Link/>
            <Section/>
            <Blue/>
            <Footer/>
        </div>
    )
}

export default App