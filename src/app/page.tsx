import SearchSection from "@components/Home/SearchSection";
import PlacesRecommendation from "@components/Home/PlacesRecommendation";
import ExploreSection from "@components/Home/ExploreSection";

import "@assets/style/home-style.css";

export default function Home() : React.ReactElement {
  return (
    <main>
      <SearchSection />
      <PlacesRecommendation />
      <ExploreSection />
    </main>
  );
}
