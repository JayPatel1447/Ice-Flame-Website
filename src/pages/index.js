import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Flavours from "../components/Flavours"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import LiveVideo from "../components/LiveVideo"
import RollIceCream from "../components/RollIceCream"
// import Contact from "../components/Contact"
// import { Router, Switch, Route } from "react-router-dom";


const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
   <Hero />
    <Flavours headings="Tawa Roll Ice Creams " path="/flavors" />

    <Testimonials />
    <RollIceCream />
    <LiveVideo />
    <Stats />
   
  </Layout>

{/* <Router history={history}>
<Switch>
    <Route path="/" exact component={Layout} />
    <Route path="/seo" component={SEO} />
    <Route path="/" component={Hero} />
    <Route path="/flavors" component={Flavours} />
    <Route path="testom" component={Testimonials}/>
    <Route path="/Home" component={RollIceCream} />
    <Route path="ContactUs" component={LiveVideo}/>
    <Route path="/Home" component={Stats} />
     
</Switch>
</Router> */}
</>
)

export default IndexPage
