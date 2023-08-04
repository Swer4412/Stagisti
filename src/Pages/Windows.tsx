import file from '../texts/windows.json'
import Step from '../components/Step'
import Legend from '../components/Legend';

const Windows = () => {
  // Declare a counter variable and initialize it to 1
  let counter = 0;

  return (
    file.map((step) => {
      // Pass the counter value as a prop to the Step component
      return <>
        <Step title={step.title} body={step.body} counter={++counter} />
        <Legend {...step} counter={counter} />
      </>
    })
  );
};

export default Windows;
