import Image from "next/image"

export default function biryani(){
    return (
        <div className="mt-7 mb-7">
            <h1 className="text-6xl text-center font-bold bg-gradient-to-b to-slate-500 from-slate-300 p-8">
                MECRONI</h1>
                <div style={{display:"flex"}} className="space-x-52">
                    <Image 
                    className="mt-8 ml-20"
                    src="/img/m1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                 className="mt-8"
                    src="/img/m2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                     className="mt-8 mr-20"
                    src="/img/m3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>
                </div>
    )
}