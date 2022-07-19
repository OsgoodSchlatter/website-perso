import { Button } from "../Single/Button";
import { Ingredient } from "../Single/Ingredient";

export const Main = () => {
  return (
    <>
      <div className="flex-col items-center">
        <div className="p-2 grid grid-flow-row auto-rows-max">
          <Ingredient />
          <Ingredient />
          <Ingredient />
        </div>
        <Button label="Ajouter" className="ml-2" />
      </div>
    </>
  );
};
