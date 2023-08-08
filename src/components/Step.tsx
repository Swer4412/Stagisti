export type stepProps = {
  counter?: number,
  title: string,
  body: Array<element>
}

type element = {
  text?: string;
  image?: string;
  list?: Array<string>;
  link?: { text: string, to: string }
}

const Step = ({ counter, title, body }: stepProps) => {

  const url = "/Stagisti/" //Questo risolve il problema delle immagini che non si caricano su gh-pages

  return (
    <div className="bg-gray-100 p-4 rounded border border-gray-300 max-w-7xl m-4">
      <h1 className="text-5xl font-bold mb-4 font-mono" id={title}>{counter ? counter + "° " + title : title}</h1>
      {body.map((element: element) => (
        element.text && <p className="my-4 text-gray-800 font-serif text-xl">{element.text}</p> ||
        element.image && <img src={url + element.image} className="min-h-[18rem] max-h-96 min-w-[24rem] mx-4 mb-4 shadow rounded-lg" /> ||
        element.list && (
          <ul className="list-disc list-inside mb-4 font-serif text-lg">
            {element.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) ||
        element.link && <a href={element.link.to}>
          <p className="my-4 text-red-500 font-serif text-xl border-red-700 border-b-4 rounded-lg p-1
         bg-red-200 hover:bg-red-400 hover:text-gray-800 w-fit">{element.link.text}</p>
        </a>

      ))}
    </div>
  );
};




export default Step;