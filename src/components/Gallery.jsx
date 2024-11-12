import React from 'react';

// Import images directly
import image1 from '../images/gallery/1.jpg';
import image2 from '../images/gallery/9.jpg';
import image3 from '../images/gallery/3.jpg';
import image4 from '../images/gallery/4.jpg';
import image5 from '../images/gallery/5.jpg';
import image6 from '../images/gallery/6.jpg';
import image7 from '../images/gallery/7.jpg';
import image8 from '../images/gallery/8.jpg';
import image9 from '../images/couples/1.jpg';
import image10 from '../images/couples/11.jpg';
import image11 from '../images/couples/2.jpg';
import image12 from '../images/couples/3.jpg';
import image13 from '../images/couples/4.jpg';
import image14 from '../images/couples/5.jpg';
import image15 from '../images/couples/6.jpg';
import image16 from '../images/couples/7.jpg';
import image17 from '../images/couples/8.jpg';
import image18 from '../images/couples/9.jpg';

const Gallery = () => {
  const images = [
    { src: image1, size: 'gal-siz-1' },
    { src: image2, size: 'gal-siz-2' },
    { src: image3, size: 'gal-siz-2' },
    { src: image4, size: 'gal-siz-1' },
    { src: image5, size: 'gal-siz-1' },
    { src: image6, size: 'gal-siz-2' },
    { src: image7, size: 'gal-siz-2' },
    { src: image8, size: 'gal-siz-1' },
    { src: image9, size: 'gal-siz-2' },
    { src: image10, size: 'gal-siz-1' },
    { src: image11, size: 'gal-siz-1' },
    { src: image12, size: 'gal-siz-2' },
    { src: image13, size: 'gal-siz-2' },
    { src: image14, size: 'gal-siz-1' },
    { src: image15, size: 'gal-siz-1' },
    { src: image16, size: 'gal-siz-2' },
    { src: image17, size: 'gal-siz-2' },
    { src: image18, size: 'gal-siz-1' },
  ];

  return (
    <>
      {/* START */}
      <section>
        <div className="inn-ban">
          <div className="container">
            <div className="row">
              <h1>Photo Gallery</h1>
              <p>lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla</p>
            </div>
          </div>
        </div>
      </section>
      {/* END */}

      {/* START */}
      <section>
        <div className="wedd-gall wedd-gall-pg">
          <div className="gall-inn">
            <div className="row">
              {images.map((img, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                  <div className="gal-im animate animate__animated animate__slow animate__flipInX anistart">
                    <img src={img.src} className={img.size} alt="" loading="lazy" />
                    <div className="txt">
                      <span>Wedding</span>
                      <h4>Bride & Groom</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* END */}
    </>
  );
};

export default Gallery;
