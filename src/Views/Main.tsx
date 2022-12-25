import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <div>
        hey, <Link to="cv">here </Link> you can see my cv
      </div>
      <div>
        and <Link to="carbon">here </Link> you can see my carbon calculator
      </div>
      <div>
        <Link to="tool-mum">here </Link> is for you mum
      </div>
    </>
  );
};
