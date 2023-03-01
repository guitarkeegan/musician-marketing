
type ButtonProps = {
    title: string
}

export default function Button(props: ButtonProps){
    return (
        <button className="px-4 py-4 transition border-white border-solid border-2 hover:bg-white hover:text-black ease-in-out duration-500">{props.title}</button>
    )
}