import { useSelector } from "react-redux";

function CarValue() {
//     const totalCost = useSelector(({ cars: { data, searchTerms } }) =>
//      data
//      .filter((car) =>
//      car.name.toLowerCase().includes(searchTerms.toLowerCase())
//       )
//          .reduce((acc, car) => acc + car.cost, 0)
//   );

    const totalCost = useSelector(({cars: {data,searchTerms}})=>{
        const filterdCars = data.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerms.toLowerCase())
        })
        return filterdCars.reduce((acc, car)=>{
            return acc+=car.cost
        },0)
    })

  return <div className="car-value">total cost: ${totalCost}</div>;
}

export default CarValue;


