

function Stepper({num}) {

    const arr = Array.from(new Array(10));

    return <div data-num={num} className="stepper">
            {arr.map(function(e,index) {
                return <span className="stepper-value" key={index}>{index}</span>
            })}
    </div>
}


export default Stepper;