import Dialog from "./Dialog";

const Dialogs = () => {
  return (
    <div className={` `}>
      <div className={`h-16 flex items-center pl-4 text-xl`} style={{ background: "rgba(217, 217, 217, 0.08)" }}>
        <span>Messages</span>
      </div>
      <div className={``}>
        <Dialog />
      </div>
    </div>
  );
};
export default Dialogs;
