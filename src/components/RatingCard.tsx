import { FaStar } from "react-icons/fa6";

function RatingCard(props: any) {
  return (
    <div className="flex flex-col gap-4 justify-center bg-white text-black text-left rounded-2xl w-full py-4 px-8">
      <div className="flex items-center gap-4 w-full p-4">
        <img
          src={props.profile}
          alt=""
          className="rounded-full w-20 h-20"
        />
        <div className="flex flex-col justify-evenly w-full">
          <h1>{props.name}</h1>
          <div className="flex gap-3 w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                color="gold"
                className="w-5 h-5"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-black py-4">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default RatingCard;
