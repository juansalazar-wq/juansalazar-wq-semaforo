import { useState } from "react";

function TrafficLight() {

    const [color, setColor] = useState('green');

    const nextColor = () => {
        if (color === "red") setColor("yellow");
        else if (color === "yellow") setColor("green");
        else setColor("red");
    };


    return (

        <div className=' d-flex align-items-center flex-column'>

            <div style={{ width: '20px', height: '50px' }} className='bg-dark' ></div>

            <div style={{ width: '100px' }} className='bg-dark py-3 d-flex flex-column align-items-center rounded-5'>

                <div className={`bg-danger light ${color === 'red' ? 'on' : ''}`} onClick={() => setColor("red")}></div>
                <div className={`bg-warning light ${color === 'yellow' ? 'on' : ''}`} onClick={() => setColor("yellow")}></div>
                <div className={`bg-success light ${color === 'green' ? 'on' : ''}`} onClick={() => setColor("green")}></div>


            </div>

            <button className="btn btn-light mt-3 border border-dark" onClick={nextColor}>
                Change
            </button>
        </div>




    );
}

export default TrafficLight
