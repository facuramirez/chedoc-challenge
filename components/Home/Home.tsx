import Style from './Home.module.scss';
import Link from 'next/Link';
import Image from 'next/image';
import series from '../../assets/store/cine.png';

export default function Home() {
    return(   
      <div>
          <section className={`${Style.containerHome}`}>
            <div className={`${Style.sectionOne}`}>
              <Image src={series} className={Style.image}/>
              <a>SERIES</a>
            </div>
            <div className={`${Style.sectionTwo}`}>
              <Image src={series} className={Style.image}/>
              <a>MOVIES</a>
            </div>
          </section>
      </div>
    )
}


