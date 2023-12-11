/* eslint-disable react/prop-types */
export default function Automobile(props) {
  return (
    <div>
      {props.automobili
        .filter((auto) => {
          return auto.elettrica === true;
        })
        .map((auto, index) => (
          <h1 className="" key={index}>{auto.nome}</h1>
        ))}
    </div>
  );
}
