import Place from "@components/Place";
import { places } from "@/data/places";

export default function Places() : React.ReactElement {
  return (
    <>
      {
        places.map((place, i) => {
          return (
            <Place 
              key={i} 
              name={place.name} 
              slug={place.slug} 
              address={place.address} 
              imgSrc={place.imgSrc} 
              price={place.price} 
              ratings={place.ratings} 
              billingCycle={place.billingCycle} 
            />
          );
        })
      }
    </>
  )
}