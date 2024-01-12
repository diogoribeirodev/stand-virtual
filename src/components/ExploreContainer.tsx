import { Cars } from "../pages/Cars";
import { Home } from "../pages/Home";
import { Stores } from "../pages/Stores";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      {(() => {
        switch (name) {
          case "Home":
            return <Home />;
          case "Cars":
            return <Cars />;
          case "Stores":
            return <Stores />;
          default:
            return <Home />;
        }
      })()}
    </div>
  );
};

export default ExploreContainer;
