import Places from "@components/Places"

export default function PlacesRecommendation(): React.ReactElement
{
  return(
    <section className="max-md:px-6 px-28 py-24">
      <h2 className="text-xl font-semibold text-center mb-16">Rekomendasi Sekitar Sini!</h2>
      <div className="grid max-sm:grid-cols-2 max-sm:gap-x-3 grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-6">
        <Places />
      </div>
    </section>
  )
}