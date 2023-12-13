interface CarProps {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  price_day: string;
  year: string;
  combustible: string;
  store_id: string;
}

function Car({ car }: { car: CarProps }) {
  return (
    <div>
      <p> {car.name}</p>
    </div>
  );
}

export default Car;