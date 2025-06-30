import { useNavigate } from 'react-router-dom';
import "../styles/Intro.css";


function Intro() {
  const navigate = useNavigate();
  
  return (
  <div className="intro-container">
    <button onClick={() => navigate('/hug')} className="hug-button">
      Go get a hug
    </button>
  </div>
  );
}

export default Intro;
