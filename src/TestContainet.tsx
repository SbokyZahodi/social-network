import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const TestContainer = () => {
  const [isShowed, setisShowed] = useState(false);

  return (
    <div className={`w-[200px]  m-4`}>
      <Transition
        show={isShowed}
        enter="transition duration-200 ease-in-out origin-top"
        enterFrom="scale-y-0 bg-slate-50 "
        enterTo="scale-y-100 bg-slate-50"
      >
        <div className={`h-[500px] `}>asdasdasd</div>
      </Transition>

      <button onClick={() => setisShowed(!isShowed)}>Click</button>
    </div>
  );
};
export default TestContainer;
