import Link from "next/link"

export default function recipes() {
    return(
        <div className="mt-7 mb-7 justify-center items-center text-center bg-sky-200 ml-96 mr-96">
            <h1 className="text-4xl p-5 text-white font-bold bg-sky-500">Recipes:</h1>
            <ul className="space-y-2 p-6 text-base font-bold">
                <li>
                    <Link href="/recipes/biryani" className="hover:text-green-700 hover:border-b-blue-400 hover:border-b-2">Biryani</Link>
                </li>
                <li>
                    <Link href="/recipes/macroni" className="hover:text-green-700 hover:border-b-blue-400 hover:border-b-2">Macroni</Link>
                </li>
                <li><Link href="/recipes/gulabjamun" className="hover:text-green-700 hover:border-b-blue-400 hover:border-b-2">Gulab Jamun</Link></li>
                <li>Qoorma</li>
                <li>Kheer</li>
                <li>Daal</li>
                <li>Mix Sabzi</li>
                <li>Achar</li>
                <li>Karahi</li>
            </ul>
        </div>
    )
}