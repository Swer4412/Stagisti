import file from '../assets/texts/windows.json' 
import Step from '../components/Step'
import { step } from '../components/Step';

const Windows = () => {

    return (
        file.map((step: step) =>{
            <Step step={step}/>
        })
    );
    
};

export default Windows;