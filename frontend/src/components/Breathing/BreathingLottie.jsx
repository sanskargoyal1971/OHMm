import {assets} from '../../assets/assets.js'
import {useLottie} from "lottie-react"


const style = {
    height: 300,
  };
  
  const Exercise = () => {
    const options = {
      animationData: assets.breathing,
      loop: true,
      autoplay: true,
    };
  
    const { View } = useLottie(options, style);
  
    return View;
  };


export default Exercise;