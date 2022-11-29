import { useAppSelector } from "../../../redux/hooks";
import Dialog from "./Dialog";

const Dialogs = () => {
  let dialogs = useAppSelector((state) => state.messages.dialogs);

  let arrayOfDialogs = dialogs.map((item) => {
    return (
      <Dialog
        avatar={item.avatar}
        userName={item.name}
        lastMessage={item.messages.at(-1)?.text}
        id={item.id}
        key={item.id}
      />
    );
  });

  return (
    <div className={`relative lg:static lg:w-[400px]`}>
      <div
        className={`h-16 flex items-center pl-4 text-xl lg:hidden bg-[#21232B]`}
        style={{ background: "rgba(217, 217, 217, 0.08)" }}
      >
        <span>Messages</span>
      </div>
      <div className={``}>{arrayOfDialogs}</div>
    </div>
  );
};
export default Dialogs;
