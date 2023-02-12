import Carousel from 'react-bootstrap/Carousel';

function AppHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-90"
        //   src="holder.js/800x400?text=First slide&bg=373940"
          src="assets/images/casa-del-muelle-san-carlos.png"
          style={{width:600, height:800}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Casa del Muelle San Carlos</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=First slide&bg=373940"
          src="assets/images/casa-del-muelle-san-carlos.png"
          style={{width:600, height:800}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Casa del Muelle San Carlos</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=First slide&bg=373940"
          src="assets/images/casa-del-muelle-san-carlos.png"
          style={{width:600, height:800}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Casa del Muelle San Carlos</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppHome;