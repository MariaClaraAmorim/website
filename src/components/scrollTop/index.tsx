import { useState, useEffect } from 'react'
import { BsFillArrowUpSquareFill} from "react-icons/bs"
import './scrolltop.css'

export function ScrollTop() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  }, []);
  
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  

  return (
    <>
      {up && (
        <div >
          <button className='scrollTop' onClick={handleScroll}>
            <BsFillArrowUpSquareFill />
          </button>
        </div>
      )}
    </>
  )
}
