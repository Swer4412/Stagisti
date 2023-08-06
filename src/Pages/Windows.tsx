import file from '../texts/windows.json'
import Step from '../components/Step'

const Windows = () => {

  let counter = 0;

  return (
    file.map((step) => {
      return <>
        <Step title={step.title} body={step.body} counter={++counter} />
      </>
    })
  );
};

export default Windows;
