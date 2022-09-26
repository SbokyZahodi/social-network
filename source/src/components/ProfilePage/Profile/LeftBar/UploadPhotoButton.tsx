import { Transition } from "@headlessui/react";
import { ChangeEvent, FC } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { profileThunks } from "../../../../redux/profileReducer/profileThunks";

type props = {
  visible: boolean;
};

const UploadPhotoButton: FC<props> = ({ visible }) => {
  let dispatch = useAppDispatch();

  const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files?.length &&
      dispatch(profileThunks.setPhoto(e.target.files[0]));
  };

  return (
    <Transition
      show={visible}
      enter="transition duration-200 origin-bottom"
      enterFrom="transform scale-y-0 opacity-0"
      enterTo="transform scaley-y-100 opacity-100"
      leave="transition origin-bottom duration-200"
      leaveFrom="transform scaley-y-100 opacity-100"
      leaveTo="transform scale-y-0 opacity-0"
    >
      <div
        className={`absolute w-full flex justify-center items-center bottom-0 bg-zinc-500 opacity-90 h-12 cursor-pointer origin-top`}
      >
        <input
          type="file"
          placeholder="asd"
          hidden
          className={`text-xl h-full w-full`}
          id={"hello"}
          onChange={(e) => uploadPhoto(e)}
        ></input>
        <label
          htmlFor="hello"
          className="cursor-pointer w-full h-full flex justify-center items-center"
        >
          <span>Upload Photo</span>
        </label>
      </div>
    </Transition>
  );
};
export default UploadPhotoButton;
