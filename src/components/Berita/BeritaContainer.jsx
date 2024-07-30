import BeritaCard from "./BeritaCard";

const BeritaContainer = () => {
  return (
    <div className="py-10 font-redhat text-black">
      <h1 className="md:text-3xl text-2xl font-bold text-center">
        Blog Terbaru Mall Sampah{" "}
      </h1>
      <div className="flex flex-col items-center justify-center py-10 gap-10">
        <BeritaCard />
        <BeritaCard />
        <BeritaCard />
      </div>
    </div>
  );
};

export default BeritaContainer;
