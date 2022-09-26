import { Switch } from "@headlessui/react";
import { FC, SetStateAction } from "react";

type props = {
  enabled: boolean;
  switchEnabled: any;
};

const RememberMeButton: FC<props> = ({ enabled, switchEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={switchEnabled}
      className={`${
        enabled ? "bg-green-600" : "bg-slate-400"
      } relative inline-flex h-6 w-11 items-center rounded-full transition mt-4 mx-4`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
export default RememberMeButton;
