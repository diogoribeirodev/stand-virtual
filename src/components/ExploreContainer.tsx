import { Home } from '../pages/Home';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <Home />
    </div>
  );
};

export default ExploreContainer;
