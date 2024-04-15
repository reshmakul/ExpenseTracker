import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = ({ budget, setBudget }) => {
  const handleOnChange = (e) => {
    const newBudget = e.target.value;
    if (newBudget) {
      setBudget(newBudget);
    }
  };
  return (
    <div className="h-dvh bg-bg-900 font-main flex flex-col gap-4 justify-center items-center">
      <button className="text-white px-4 py-2 rounded-md absolute top-10 right-10 hover:bg-primary hover:text-bg-900 transition-all duration-500">
        Login
      </button>
      <h1 className="text-white text-4xl text-balance text-center">
        <Typewriter
          onInit={(text) => {
            text
              .changeDelay(50)
              .typeString("Welcome to ExpenseTrackre")
              .changeDeleteSpeed(200)
              .changeDelay(200)
              .deleteChars(2)
              .typeString("er .")
              .deleteChars(1)
              .typeString(",")
              .deleteChars(1)
              .typeString("?")
              .deleteChars(1)
              .typeString("/")
              .deleteChars(1)
              .typeString("!")
              .start();
          }}
        />
      </h1>
      <div className="flex flex-wrap gap-4 mt-8">
        <input
          type="number"
          value={budget}
          onChange={handleOnChange}
          placeholder="Enter your budged"
          className="homeinput bg-primary placeholder:text-bg-900 text-center p-4 rounded-md  "
        />
        <select
          name="currency"
          className="bg-bg-900 border-2 border-bg-800 text-white p-4 rounded-md"
        >
          <option value="€" className="bg-bg-900">
            €
          </option>
          <option value="$" className="bg-bg-900 ">
            $
          </option>
          <option value="£" className="bg-bg-900">
            £
          </option>
        </select>
      </div>

      <button className="mt-8">
        <Link to="/overview" className="bg-secondary py-4 px-8 rounded-md ">
          Start
        </Link>
      </button>
    </div>
  );
};

export default Home;
