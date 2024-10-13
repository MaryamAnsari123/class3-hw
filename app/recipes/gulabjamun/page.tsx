import Image from "next/image"

export default function biryani(){
    return (
        <div className="mt-7 mb-7">
            <h1 className="text-6xl text-center font-bold bg-gradient-to-b to-slate-500 from-slate-300 p-8">
                GULAB JAMUN</h1>
                <div className="flex space-x-2">
                    <Image 
                  
                    src="/img/g1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
              
                    src="/img/g2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                
                    src="/img/g3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>
                </div>
    )
}