import { useSelector } from "react-redux";
import { parseddata } from "../store/storereducer";
import ReactMarkdown from "react-markdown";

const Displayoutput = () => {
  const data = useSelector((state: []) => state);
  return (
    <div>
      <div className="flex lg:py-6 overflow-auto justify-self-stretch">
        <div className="text-white w-full h-[77vh] lg:h-[65vh] lg:w-[60%] lg:mx-auto lg:text-lg">
          {data.map((solo: parseddata, index: number) => (
            <div className="p-4" key={index}>
              {solo.isuser ? (
                <div className="lg:p-4 p-2 bg-[#1f1f21] w-fit rounded-xl shadow-lg">
                  {solo.value}
                </div>
              ) : (
                <div>
                  <ReactMarkdown>{solo.value}</ReactMarkdown>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Displayoutput;
