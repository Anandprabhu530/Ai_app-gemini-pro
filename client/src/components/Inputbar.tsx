import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/storereducer";

const Inputbar = () => {
  const [input, setinput] = useState({ value: "", isuser: true });
  const [isLoading, setisLoading] = useState(false);
  let temperature: number = 0;
  const dispatch = useDispatch();

  const handlesubmit: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    if (!input) return;
    setisLoading(true);
    const response = await fetch("https://ai-app-gemini-pro.vercel.app/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input.value, temperature: temperature }),
    }).then((res) => res.json());
    dispatch(add(input));
    dispatch(add({ value: response.output, isUser: false }));
    setinput({ value: "", isuser: true });
    setisLoading(false);
  };

  return (
    <div className="border border-black flex flex-col justify-between lg:w-[60%] mx-4 lg:mx-auto mt-4">
      <div className="flex gap-4 lg:gap-0">
        <textarea
          value={input.value}
          onChange={(e) => {
            setinput({ value: e.target.value, isuser: true });
          }}
          className="border border-white text-white basis-11/12 lg:h-[150px] resize-none p-2 bg-black rounded-xl mt-2 outline-none"
        />

        <div className="flex justify-center items-center basis-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 invert cursor-pointer ${
              isLoading && "cursor-not-allowed"
            }`}
            onClick={handlesubmit}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-4 lg:gap-10 justify-center text-white pt-8 pb-6">
        <button
          onClick={() => {
            temperature = 1;
          }}
          className="border border-white rounded-lg px-4 py-2 hover:bg-[#1f1f21]"
        >
          Creative
        </button>
        <button
          onClick={() => {
            temperature = 0.5;
          }}
          className="border border-white rounded-lg px-4 py-2 hover:bg-[#1f1f21]"
        >
          Balanced
        </button>
        <button
          onClick={() => {
            temperature = 0;
          }}
          className="border border-white rounded-lg px-4 py-2 hover:bg-[#1f1f21]"
        >
          Precise
        </button>
      </div>
    </div>
  );
};

export default Inputbar;
