import Link from "next/link"

export default function Header(){
    return (
        <div className="flex justify-start items-center text-white py-8 gap-12 ml-12" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
            <Link className="hover:opacity-50 transition ease-in-out duration-200" href={"/"}>music</Link>
            <Link className="hover:opacity-50 transition ease-in-out duration-200" href={"/"}>video</Link>
            <Link className="hover:opacity-50 transition ease-in-out duration-200" href={"/"}>tour</Link>
            <Link className="hover:opacity-50 transition ease-in-out duration-200" href={"/"}>store</Link>
        </div>
    )
}