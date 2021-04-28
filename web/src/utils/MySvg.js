const MySvg = ({ Mypaths, width, height, viewBox, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Mypaths.map((Mypath, index) => {
        return <path d={Mypath} fill={color} key={index} />;
      })}
    </svg>
  );
};
export default MySvg;
