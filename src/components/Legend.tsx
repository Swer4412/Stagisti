import {step} from "./Step"

const Legend = ( {title, counter}: step ) => {
    
    const url = "#" + title
    
    return ( 
        <a href={url} className="">{counter}) {title}</a>
    );
};

export default Legend;