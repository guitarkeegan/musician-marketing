import Button from "./Button"

export default function HomeTitle(){
    return (
        <div className="text-white pl-12 md:mt-44">
            <h1 className="text-8xl font-medium">Aiko Sakazaki</h1>
            <div className="pb-3">
            <h2 className="font-thin">Soprano Voice</h2>
            </div>
            <div className="grid md:w-[560px] grid-cols-2 grid-rows-2 gap-4">
                <Button title="LISTEN"/>
                <Button title="WATCH"/>
                <Button title="SHOP EXCLUSIVES"/>
                <Button title="TOUR"/>
            </div>
        </div>
    )
}