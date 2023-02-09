import {useEffect, useState} from 'react'
import {motion} from 'framer-motion';
import "./Cursor.scss";

function Cursor({cursorscaling}) {

    const [bigcircle, setbigcircle] = useState({x:0, y:0})
    const [smallcircle, setsmallcircle] = useState({x:0, y:0})

    useEffect(()=>{
        const mousemove=(e)=>{
            setbigcircle({x: e.clientX, y: e.clientY})
            setsmallcircle ({x: e.clientX, y: e.clientY})


        }
        window.addEventListener('mousemove', mousemove);

        return()=>{
            window.removeEventListener("mousemove", mousemove);
        }
    })

  return (
    <div>
        <motion.div animate={{x:bigcircle.x -30, y: bigcircle.y-30, transition:{type:'spring', mass:0.5}}} style={{scale:cursorscaling ? 0 :1}}  className="big_circle"></motion.div>
        <motion.div animate={{x:bigcircle.x -10, y: bigcircle.y-10, transition:{type:'spring', mass:0.1}}}  className="small_circle"></motion.div>
    </div>
  )
}

export default Cursor