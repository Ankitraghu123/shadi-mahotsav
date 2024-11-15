import React from 'react';

// Import images directly
import image1 from '../images/gallery/galler1.jpeg';
import image2 from '../images/gallery/gallery2.jpg';
import image3 from '../images/gallery/gallery3.jpeg';
import image4 from '../images/gallery/gallery4.webp';
import image5 from '../images/gallery/gallery5.jpeg';
import image6 from '../images/gallery/gallery6.jpeg';
import image7 from '../images/gallery/gallery7.jpeg';
import image8 from '../images/gallery/gallery8.jpeg';
import image9 from '../images/gallery/gallery9.jpeg';
import image11 from '../images/gallery/gallery11.jpeg';
import image12 from '../images/gallery/gallery12.jpeg';
import image13 from '../images/gallery/gallery13.jpg';
import image14 from '../images/gallery/gallery14.jpg';
import image15 from '../images/gallery/gallery15.jpg';
import image16 from '../images/gallery/gallery16.jpeg';
import image17 from '../images/gallery/gallery17.jpg';
import image18 from '../images/gallery/gallery18.jpeg';
import image19 from '../images/gallery/gallery19.jpeg';

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
    { src: image19, size: 'gal-siz-1' },
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
