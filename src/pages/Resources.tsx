import ResourceCard from "@/components/ResourceCard";
import { articles } from "@/content/Articles";

function Resources() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 px-6 py-8">
      {articles.map((elem, index) => (
        <ResourceCard
          {...elem}
          key={index}
        />
      ))}
    </div>
  );
}

export default Resources;
