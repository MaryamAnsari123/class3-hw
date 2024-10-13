import Image from "next/image"

export default function images(){
    return (
        <div className="mt-8 mb-8">
            <h1 className="bg-gradient-to-l to-orange-300 from-cyan-400 text-4xl p-5 text-blue-600 font-bold text-center">Images</h1>
            <div className="flex space-x-2">
                    <Image 
                    className="mt-8"
                    src="/img/b1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                 className="mt-8"
                    src="/img/b2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                     className="mt-8"
                    src="/img/b3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>

                <div className="flex space-x-2">
                    <Image 
                    className="mt-8"
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
                     className="mt-8"
                    src="/img/m3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>

        <div className="flex space-x-2">
                    <Image 
                    className="mt-8"
                    src="/img/g1.jpeg" // Path to your logo in the public folder
                    alt="pic1"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                 className="mt-8"
                    src="/img/g2.jpeg" // Path to your logo in the public folder
                    alt="pic2"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
<Image 
                     className="mt-8"
                    src="/img/g3.jpeg" // Path to your logo in the public folder
                    alt="pic3"
                    width={300} // Adjust the size as needed
                    height={100} // Adjust the size as needed 
/>
        </div>
</div>
    )
}