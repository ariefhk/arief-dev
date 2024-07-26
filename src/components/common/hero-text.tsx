import TextRotator from "./text-rotator";

const HeroTexts = () => {
  return (
    <div className="space-y-7">
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="font-rubik text-7xl name_underline text-primary max-sm:text-6xl ">
        Arief Rachman <br /> Hakim .
      </h1>
      <TextRotator />
    </div>
  );
};
export default HeroTexts;
