import Button from "./Button"

export default function HomeTitle(){
    return (
        <div className="text-white lg:pl-12 mt-12 lg:mt-44 flex lg:justify-start flex-col items-center lg:items-start">
            <h1 className="lg:text-8xl md:text-8xl text-6xl font-medium">Aiko Sakazaki</h1>
            <div className="pb-3">
            <h2 className="font-thin">Soprano Voice</h2>
            </div>
            <div className="grid w-screen py-2 sm:w-[560px] sm:grid-cols-2 sm:grid-rows-2 gap-4">
                <Button title="LISTEN"/>
                <Button title="WATCH"/>
                <Button title="SHOP EXCLUSIVES"/>
                <Button title="TOUR"/>
            </div>
        </div>
    )
}