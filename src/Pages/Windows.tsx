import file from '../texts/windows.json' 
import Step from '../components/Step'

const Windows = () => {
  // Declare a counter variable and initialize it to 1
  let counter = 1;

  return (
    file.map((step) => {
      // Pass the counter value as a prop to the Step component
      return <Step {...step} counter={counter++} />
    })
  );
};

export default Windows;
