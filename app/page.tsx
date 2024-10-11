// import Image from "next/image";
import Link from "next/link"
// import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <div className="text-center mt-7 mb-7">
    <h1 className="bg-blue-300 text-4xl p-5 text-black font-bold">Welcome to GOOD FOOD GOOD MOOD!</h1>
    <h2 className="flex-auto ml-96 mr-96 text-xl p-2 font-extrabold">Delicious Recipes Made Easy</h2>
             <p className="text-black -font-bold text-base p-2 text-center flex-auto ml-96 mr-96">
             Whether you are a beginner or an experienced cook, we have got something to excite your taste buds. From quick weeknight dinners to gourmet creations, explore our collection of easy-to-follow, flavor-packed recipes.
            </p>
            <div className="bg-yellow-100 flex-auto ml-96 mr-96">
            <h2 className="text-xl p-2 font-extrabold">Featured Recipes</h2>
            <p className="text-black -font-bold text-base p-2 text-center"><i>Check out some of our most popular and mouth-watering recipes:</i></p>
    <ul className="text-left space-y-2 p-6 list-disc list-inside">
      <li><Link href="/recipes/biryani" className="hover:text-green-700 hover:border-b-blue-400 hover:border-b-2"><b>BIRYANI</b></Link> – A delicious Spicy, perfect for occasions or meals like dinner or lunch.</li>
      <li><Link href="/recipes/macroni" className="hover:text-green-700 hover:border-b-blue-400 hover:border-b-2"><b>MACRONI</b></Link> – A quick and easy recipe, ready in just 30 minutes.</li>
      <li><Link href="/recipes/gulabjamun" className="hover:text-green-700 hover:border-b-blue-400 hover:border-b-2"><b>GULAB JAMUN</b></Link>– A perfect desert, sure to impress your guests.</li>
    </ul>
    </div>
    <div className="flex-auto ml-96 mr-96 mt-8 bg-gray-300">
    <h2 className="text-xl p-2 font-extrabold">Why You will Love Cooking with Us</h2>
             <p className="text-black -font-bold text-base p-2 text-center">
             At GOOD FOOD GOOD MOOD, we believe anyone can cook a delicious meal with the right guidance. Here’s what you can expect:
            </p>
            <ul className="text-left space-y-2 p-6 list-disc list-inside">
              <li><b>Step-by-Step Instructions:</b> Clear and easy-to-follow recipes that make cooking a breeze.</li>
              <li><b>Expert Tips:</b> From ingredient swaps to cooking techniques, we have got you covered.</li>
              <li><b>Inspiration for Every Occasion: </b> Whether it is a casual family dinner or a special celebration, we have recipes to suit every moment.</li>
            </ul>  
    </div>
    
</div>
  )
} 