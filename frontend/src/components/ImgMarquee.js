import Marquee from 'react-fast-marquee';
//import { Container } from 'react-bootstrap';
import m1 from '../assets/marquee1.jpeg'
import m2 from '../assets/marquee2.jpeg'
import m3 from '../assets/marquee3.jpeg'
import m4 from '../assets/marquee4.jpeg'
import m5 from '../assets/marquee5.jpeg'

export const ImgMarquee = () => {
    return (
     <div className="imgmarquee">
         <Marquee>
            <div>
                <img src = {m1} alt="" />
            </div>
            <div>
                <img src = {m2} alt="" />
            </div>
            <div>
                <img src = {m3} alt="" />
            </div>
            <div>
                <img src = {m4} alt="" />
            </div>
            <div>
                <img src = {m5} alt="" />
            </div>
         </Marquee>
     </div>
 
 
    )
 }

 export default ImgMarquee;