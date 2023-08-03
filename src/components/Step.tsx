type step = {
  counter: number,
  title: string,
  body: Array<element>
}

type element = {
  text?: string;
  image?: string;
  list?: Array<string>;
}

const Step = ({counter, title, body}: step) => {

  return (
    <div className="bg-gray-100 p-4 rounded border border-gray-300 max-w-6xl">
      <h1 className="text-5xl font-bold mb-4 font-mono">{counter}° {title}</h1>
      {body.map((element: element) => (
        element.text && <p className="my-4 text-gray-800 font-serif text-xl">{element.text}</p> ||
        element.image && <img src={element.image} className="max-h-96 mx-4" /> ||
        element.list && (
          <ul className="list-disc list-inside mb-4 font-serif text-lg">
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