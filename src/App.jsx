import  "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Toggle from "./components/Toggle"
import PeriodicTable20 from "./components/periodic-table/PeriodicTable20"
import Namae from "./components/withUseEffect/WithUseEffect"


function App() {

  

  return (
    <>
      <Header/>
      <marquee>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur recusandae dolore magnam sequi rem laborum minus iste at, ad distinctio. Quae obcaecati unde odio omnis pariatur, est deserunt consequuntur excepturi hic, saepe modi quod distinctio sed aspernatur, amet ad eveniet rerum a! Excepturi laboriosam, vel dolore similique asperiores nobis fugiat, ipsum cumque eius nostrum rem placeat a. Iure culpa id, repudiandae vero error nam quis, perferendis laudantium quam ullam harum commodi temporibus beatae nihil, iste possimus quisquam totam aliquid. Magni dolorem corporis, temporibus itaque provident voluptatem illo sapiente optio quibusdam qui hic ex commodi id! Animi assumenda consectetur totam illum fuga nulla vero itaque culpa quaerat! Maxime labore maiores voluptatem commodi dolore, aliquid culpa natus impedit consectetur officiis cupiditate. Obcaecati, repudiandae ipsa enim mollitia laudantium natus deserunt cum molestiae, ex dicta tempora fugit facilis praesentium dolorum ipsam! Aspernatur voluptates doloremque labore esse atque totam aperiam quibusdam dolor officiis velit numquam obcaecati harum, blanditiis illum. Voluptate, hic. Quod sequi blanditiis quam, ad distinctio quas quos deleniti voluptas accusamus ipsam! Suscipit earum at quia sunt beatae quas veniam porro culpa quo eaque facere aliquid minima, natus consectetur fuga blanditiis possimus asperiores tempore debitis sed quasi nulla hic. Consectetur ad sunt mollitia aliquam quam veritatis corporis consequuntur repellat, aut molestias facere officiis animi laboriosam id?
      </marquee>
      {/* <PeriodicTable/> */}
      <PeriodicTable20/>
      
      <div className="container">
      <Toggle/>
      <Namae/>
      
      <h1>Hello</h1>
        <div className="content"><h2>Content</h2></div>
        <div className="content"><h2>Content</h2></div>
      <main className="main">
        <div className="main__content"><h2>Main Content</h2></div>
        <div className="main__content"><h2>Main Content</h2></div>
        <div className="main__content"><h2>Main Content</h2></div>
      </main>
      </div>
      <Footer/>
      
    </>
  )
}

export default App
