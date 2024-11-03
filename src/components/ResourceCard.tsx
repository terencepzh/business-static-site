import { Link, To } from "react-router-dom";

interface Props {
  image: String;
  title: String;
  caption: String;
  url: To;
  key: React.Key;
}

function ResourceCard(props: Props) {
  return (
    <div className="flex flex-col border md:basis-[48%] xl:basis-[32%] w-full md:w-0">
      <Link to={props.url}>
        <div>
          <img
            src={`${props.image}`}
            alt="Article cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-6">
          <h1 className="text-red-600 text-lg font-bold">{props.title}</h1>
          <p className="text-xs truncate">{props.caption}</p>
        </div>
      </Link>
    </div>
  );
}

export default ResourceCard;
