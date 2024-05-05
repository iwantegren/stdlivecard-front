import DragonfruitLogo from "../assets/dragonfruit.svg";

const StatusComponent = () => {
  return (
    <div className="status-component border">
      <img
        className="mx-3 my-5"
        src={DragonfruitLogo}
        alt="Dragonfruit Logo"
        width={200}
        height={200}
      />
      <div className="text-center">
        <b>To be done...</b>
      </div>
    </div>
  );
};

export default StatusComponent;
