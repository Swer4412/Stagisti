import file from '../texts/windows.json' 
import Step from '../components/Step'

const Windows = () => {
// ti prego non toccare, non ho la minima idea di come funzioni

    return (
        file.map((step) =>(
            <Step {...step}/> 
        ))
    );
    
};

export default Windows;