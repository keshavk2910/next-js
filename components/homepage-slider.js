import Slider from "react-slick";
import ProgressiveImage from '../components/ProgressiveImage';

function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
      };
      let cloudurl = 'https://ik.imagekit.io/zkvrzayer06/tr:w-20,h-20/'
      let cloudurlbig = 'https://ik.imagekit.io/zkvrzayer06/tr:h-150/'
   return (
       <>
       <Slider {...settings}>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/Amazon-Logo-PNG.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/Amazon-Logo-PNG.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/logo.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/logo.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/1200px-Boulevard_Brewery_logo.svg_.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/1200px-Boulevard_Brewery_logo.svg_.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/zap-walls.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/zap-walls.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/walmart.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/walmart.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/meineke-2.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/meineke-2.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/John_Deere.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/John_Deere.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/Jeep-logo-3D-2560x1440.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/Jeep-logo-3D-2560x1440.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/dollar-general-logo-vector.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/dollar-general-logo-vector.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/cropped-NAPA-logo-1.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/cropped-NAPA-logo-1.png'}
      />
        </div>
        <div>
        <ProgressiveImage
        alt="Logos"
        preview={cloudurl+'/wp-content/uploads/2018/10/Caterpillar-logo-880x660.png'}
        image={cloudurlbig+'/wp-content/uploads/2018/10/Caterpillar-logo-880x660.png'}
      />
        </div>
      </Slider>
      <style jsx global>{`.slick-slide{display:inline-block!important;vertical-align:middle;float:none!important;text-align:center}
      .slick-slide img{display:inline-block!important;}`}</style>
     <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
   </>
    );
}
export default HomeSlider;