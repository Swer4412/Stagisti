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
    return (
      <>
        <h1>{step.title}</h1>
        {step.body.map((element) => (
          element.text && <p>{element.text}</p> ||
          element.image && <img src={element.image}/> ||
          element.list && (
            <ul>
              {element.list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          )
        ))}
      </>
    );
  };



export default Step;