import "./App.css";

import FormAddCalories from "../FormAdd/FormAdd";
import ButtonClear from "../ButtonClear/ButtonClear";
import Total from "../Total/Total";

const App = () => {
  return (
    <div className="App">
      <Total />
      <ButtonClear />
      <FormAddCalories />
    </div>
  );
};

export default App;
