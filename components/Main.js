import Anywhere from "./Anywhere"
import Explore from "./Explore"
import LargeCard from "./LargeCard"

function Main({exploreData, cardData}) {
    return (
        <main className="max-w-7xl mx-auto sm:px-16">
          <Explore exploreData={exploreData}/>
          <Anywhere cardData={cardData}/>
          <LargeCard 
          img ="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist creatd by Airbnb"
          buttonText="Get Inspired"
          />  
        </main>
    )
}

export default Main
