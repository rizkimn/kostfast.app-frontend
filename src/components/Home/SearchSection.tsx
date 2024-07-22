import SearchInput from "@components/SearchInput";

export default function SearchSection(): React.ReactElement
{
  return (
    <section className="hero-section">
      <div className="hero-wrapper flex flex-col items-center justify-center">
        <SearchInput placeholder="Kosan dekat kampus" className="max-md:w-[80vw] w-[40vw] bg-white/60 border-2 border-white shadow-lg shadow-white/60 text-sm backdrop-blur-sm"/>
      </div>
    </section>
  );
}