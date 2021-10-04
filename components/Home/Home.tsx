import Style from './Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import series from '../../assets/store/cine.png';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  }
}


export default function Home() {
    return(   
      <div>
          <motion.section className={`${Style.containerHome}`}
            variants={sectionVariants}
            initial='hidden'
            animate='visible'>
            <div className={`${Style.sectionOne}`}>
              <Image src={series} className={Style.image}/>
              <Link href='/series'><a>SERIES</a></Link>
            </div>
            <div className={`${Style.sectionTwo}`}>
              <Image src={series} className={Style.image}/>
              <Link href='/movies'><a>MOVIES</a></Link>
            </div>
          </motion.section>
      </div>
    )
}


