
import { useEffect } from 'react';
import Stepper from './Stepper';


function Odometer({number}) {


        useEffect(()=> {


            requestAnimationFrame(animate);

            function animate() {
                const elems = document.getElementsByClassName('stepper');

                [...elems].forEach(function(e) {
                    requestAnimationFrame(()=> {
                         const numToStop = e.dataset.num;
                        console.log(numToStop);
                        e.style.top = `-${20 * parseInt(numToStop)}px`;
                        e.style.tansitionDelay = `${100 * (10 - parseInt(numToStop))}`
                    });
                });
            }

        },[]);

        const nums = `${number}`.split("");

        return <div className="odometer">
               {nums.map(function(value,index) {
                    return <Stepper key={index} num={value}  />
               })}
        </div>
}

export default Odometer;