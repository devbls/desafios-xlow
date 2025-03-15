import { useEffect, useState } from "react";

type SliderProps = {
  items: {
    url: string;
    alt: string;
    link: string;
  }[];
  auto: boolean;
}

export function Slider({ items, auto }: SliderProps) {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    if (auto) {
      const timer = setInterval(() => {
        handleNextItem();
      }, 2000);
  
      return () => clearInterval(timer);
    }
  })

  const handleNextItem = () => {
    setCurrentItem((item) => item + 1);

    if (currentItem === items.length - 1) setCurrentItem(0);
  }

  const handlePrevItem = () => {
    setCurrentItem((item) => item - 1);

    if (currentItem === 0) setCurrentItem(items.length - 1);
  }

  const handleDot = (index: number) => {
    setCurrentItem(index);
  }
  
  return (
    <div className="slider">
      <button onClick={handlePrevItem} className="icon prev">
        <i className='fa fa-chevron-circle-left' />
      </button>
      {items.map((item, index) => (
        <div key={index} className={index === currentItem ? 'active slide' : 'slide'}>
          <a href={item.link} target="_blank">
            <img src={item.url} alt={item.alt} />
          </a>
        </div>
      ))}
      <button onClick={handleNextItem} className="icon next">
        <i className='fa fa-chevron-circle-right' />
      </button>
      <div className="dots">
        {items.map((_, index) => (
          <button key={index} onClick={() => handleDot(index)} className={index === currentItem ? 'active dot' : 'dot'} />
        ))}
      </div>
    </div>
  );
}