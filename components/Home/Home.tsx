import Style from './Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import series from '../../assets/store/cine.png';


export default function Home() {
    return(   
      <div>
          <section className={`${Style.containerHome}`}>
            <div className={`${Style.sectionOne}`}>
              <Image src={series} className={Style.image}/>
              <Link href='/series'><a>SERIES</a></Link>
            </div>
            <div className={`${Style.sectionTwo}`}>
              <Image src={series} className={Style.image}/>
              <Link href='/movies'><a>MOVIES</a></Link>
            </div>
          </section>
      </div>
    )
}


