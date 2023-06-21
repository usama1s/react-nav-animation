import { Link } from 'react-router-dom';
import { ReactComponent as CircleImage } from '../../assets/Vector.svg';
import { useWindowSize } from '../../hooks/useWindowSize';
import "./CircleTextWrap.css";

/**
 * A component that displays text in a circular shape and provides a link to a route.
 * @param {object} props - The props object.
 * @param {string} props.children - The text to display.
 * @returns {JSX.Element} - The CircleTextWrap component.
 */

function CircleTextWrap({ children }) {
  const size = useWindowSize();
  const isSmallScreen = size?.width < 1180;

  const renderSmallScreenContent = () => (
    <div className="redeem-container-card cursor-pointer hover-circle">
      <Link
        to={`/${children}`}
        className="p-2 relative bg-black overflow-clip block aspect-square border border-primary rounded-full cursor-pointer circle"
      >
        <div className="overlay-background" />
        <img
          src="/nav-rings/redeem-circle.png"
          className="absolute top-1/2 left-1/2 md:scale-95 text-ring"
        />
        <div
          className={`
            relative aspect-square flex items-center justify-center border-primary border rounded-full overflow-hidden 
            m-4 p-3 md:m-6 md:p-6 redeem-container-card__text
          `}
        >
          {children}
        </div>
      </Link>
    </div>
  );

  const renderLargeScreenContent = () => (
    <Link to={`/${children}`} className="hover-circle circle cursor-pointer">
      <div className="text-container">
        <h2>{children}</h2>
        <CircleImage />
      </div>
    </Link>
  );

  return (
    <>
      {isSmallScreen ? renderSmallScreenContent() : renderLargeScreenContent()}
    </>
  );
}

export default CircleTextWrap;
