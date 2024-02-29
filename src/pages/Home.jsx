import img1 from "../assets/images/Lil Durk Wallpapers - Wallpaper Sun.jpg"
import Hero from "../components/Hero"
import "../css/Home.css"
import ProductCard from "../components/ProductCard"
function Home () {
    return( 
    <>
    <Hero heading="Welcome to Home Page" image={img1}/>
    <ProductCard/>
    {/* <h1 className="bg-dark text-light" style={{borderRadius:"15px"}}>Welcome to Home page</h1> */}
    <div className="" style= {{backgroundColor: "black", height: "477px", borderRadius:"15px"}}>
        <img src={img1} alt="" />
    </div>
    </>
    )
} 

export default Home