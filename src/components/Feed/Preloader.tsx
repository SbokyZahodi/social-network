import preloader from "../../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className={`flex justify-center items-center`}>
      <img src={preloader} alt="" className="h-24 w-42" />
    </div>
  );
};
export default Preloader;
