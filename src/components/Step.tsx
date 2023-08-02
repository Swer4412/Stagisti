import { useState } from "react";

type step = {
  title: string,
  body: Array<element>
}

type element = {
  text?: string;
  image?: string;
  list?: Array<string>;
}

const Step = (step: step) => {

  const [counter, setCounter] = useState(1);

  return (
    <div className="bg-gray-100 p-4 rounded border border-gray-300 px-44">
      <h1 className="text-2xl font-bold mb-4 ">{counter} {step.title}</h1>
      {step.body.map((element) => (
        element.text && <p className="mb-4">{element.text}</p> ||
        element.image && <img src={element.image} className="mb-4" /> ||
        element.list && (
          <ul className="list-disc list-inside mb-4">
            {element.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )
      ))}
    </div>
  );
};




export default Step;