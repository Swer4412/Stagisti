import { FC } from 'react';

const Home: FC = () => {
    return (
        <div className="bg-gray-100 p-4 rounded border border-gray-300 max-w-7xl grid place-items-center">
            <h1 className='font-bold font-mono text-8xl'>
                BENVENUTO
            </h1>
            <p className='my-4 text-gray-800 font-serif text-xl'>
                Benvenuto nel laboratorio di Jimmy Computers, se stai vedendo questo sito è perchè hai appena iniziato e ti
                serve una base di conoscenza per partire.
            </p>
            <p className='my-4 text-gray-800 font-serif text-xl'>
                Ecco qui riportate diverse guide che ti possono servire utili
            </p>
            <div className=" max-w-7xl flex ">
                <div className='bg-gray-100 p-4 rounded border border-gray-300'>
                    <p>WINDOWS</p>
                    <img src="/usb-stick.jpeg"/>
                </div>
                <div className='bg-gray-100 p-4 rounded border border-gray-300'>
                    <p>SETUP</p>
                    <img src="/1.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home;