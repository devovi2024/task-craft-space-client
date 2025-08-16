import { useSelector } from 'react-redux';
import '../../assets/css/FullscreenLoader.css';

const FullscreenLoader = () => {
  const loader = useSelector((state) => state.settings.loader);

  return (
    <div className={`LoadingOverlay ${loader ? 'active' : ''}`}>
      <div className='Line-Progress'>
        <div className='indeterminate'></div>
      </div>
    </div>
  );
};

export default FullscreenLoader;
