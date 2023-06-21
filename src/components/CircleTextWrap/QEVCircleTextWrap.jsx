import { Link } from 'react-router-dom';
import { ReactComponent as CircleImage } from '../../assets/Vector.svg';
import "./CircleTextWrap.css";

function QEVCircleTextWrap({coinValue}) {
  return (
    <Link to={`/${coinValue}`} className="single-circle-wrap cursor-pointer hover-circle">
      <div className='text-container'>
       <h2>{coinValue}</h2>
        <CircleImage />
      </div>
    </Link>
  );
}

export default QEVCircleTextWrap;
