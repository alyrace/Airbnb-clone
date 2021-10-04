import SmallCard from "./SmallCard"

function Explore({exploreData}) {
    return (
        <section className="pt-6">
            <h2 className="text-4xl semi-bold pb-5">Explore Nearby</h2>  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {exploreData?.map(({img, distance, location}) => (
                    <SmallCard 
                        key={location}
                        img={img}
                        distance={distance}
                        location={location}
                    />
                ))}
            </div>
        </section>
    )
}

export default Explore
