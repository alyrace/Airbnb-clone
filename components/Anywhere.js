import MediumCard from "./MediumCard"

function Anywhere({cardData}) {
    return (
        <section>
            <h2 className="text-4xl semi-bold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
                {cardData?.map(({title, img}) => (
                    <MediumCard key={title} img={img} title={title}/>
                ))}
            </div>
        </section>
    )
}

export default Anywhere
