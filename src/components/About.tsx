interface Props {
  content: Array<any>;
}

function About(props: Props) {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md sm:max-w-4xl">
      {props.content.map((value, index) => (
        <div
          key={index}
          className={`${value.background} flex-1 bg-cover aspect-square max-w-xl`}
        >
          <div className="flex flex-col bg-black/55 text-white w-full max-w-xl h-full p-4">
            <div className="grow"></div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">{value.title}</h1>
              <div className="flex gap-2 items-center text-sm font-bold">
                Discover More →
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
