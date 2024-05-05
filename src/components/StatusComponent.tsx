import DragonfruitLogo from "../assets/dragonfruit.svg";

const StatusComponent = () => {
  return (
    <div className="status-component border">
      <img
        className="mx-3 my-5"
        src={DragonfruitLogo}
        alt="Health Logo"
        width={200}
        height={200}
      />
      <div className="text-center">To be done...</div>
    </div>
  );
};

export default StatusComponent;
