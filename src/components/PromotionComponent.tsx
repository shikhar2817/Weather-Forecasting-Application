import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

export default function Promotion() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e:any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 270px;
              background: black;
            }`
        }
      </style>
      <Carousel pause={false} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="custom-tag">
          <img
            className="d-block w-100 h-100"
            src="images/1.jpg"
            alt="First slide"
            />
          <Carousel.Caption>
            <h2 style={{fontWeight: 'bolder'}}> Need weather information </h2>
            <p>You are in the right place. Here you will find everything you need.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-tag">
          <img
            className="d-block w-100 h-100"
            src="images/2.jpg"
            alt="Second slide"
            />

          <Carousel.Caption>
            <h2 style={{fontWeight: 'bolder'}}> Air Quality </h2>
            <p>As we are living in the industrial areas, information regarding pollution is critical.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-tag">
          <img
            className="d-block w-100 h-100"
            src="images/3.jpg"
            alt="Third slide"
            />

          <Carousel.Caption>
            <h2 style={{fontWeight: 'bolder'}}> All in one </h2>
            <p>
              Relax, We are making everything ready for you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
