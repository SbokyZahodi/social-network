import { useState } from "react";

const AddComment = () => {
  const [TextValue, setTextValue] = useState("");

  const addComment = () => {
    
  };

  return (
    <div className={``}>
      <div className={`m-4 flex`}>
        <textarea
          className="bg-[#3C3D45] p-1 w-full resize-none rounded-md h-[50px] outline-none"
          placeholder="Add comment..."
          value={TextValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-inherit"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </div>
    </div>
  );
};
export default AddComment;
