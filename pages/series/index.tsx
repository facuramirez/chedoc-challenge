import type { NextPage } from 'next'
import Style from './Series.module.scss'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../../components/Layout'
import data from '../../data/sample.json';
import type { AppProps } from 'next/app'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useDispatch } from 'react-redux';
import { changeSubTitle } from '../../globalState/Actions';
import { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { motion } from 'framer-motion';


interface series {
  title: string,
  description: string,
  programType: string,
  images: {
    poster_art: {
      url: string,
      width: number,
      height: number
    }
  },
  releaseYear: number
}

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5
    }
  }
}

export default function Series({seriesFilter}:any) {
  const series = seriesFilter;  
  let dispatch = useDispatch();

  useEffect( () => {
    dispatch(changeSubTitle('Series'));
  }, [])

  const popup = (e:any) => {
    e.preventDefault();
  }

  const [state, setState] = useState({
    abierto: false,
    title: '',
    description: '',
    releaseYear: 0,
    url: ''
  });

  const openModal = (e:any) => {
    let title = e.target.value;
    let data = series.find( (serie:any) => serie.title === title);

    setState({
      ...state,
      abierto: true,
      title: data.title,
      description: data.description,
      releaseYear : data.releaseYear,
      url: data.images['Poster Art'].url
    });
  }
  
  const closeModal = (e:any) => {
    e.preventDefault();
    setState({...state, abierto: false});    
  }

  return (
    <Layout>      
      <div className={`${Style.containerSeries}`} id='container'>        
        {
        series.map((serie:any, index:number) => (          
            <motion.section className={`${Style.serie}`} key={index} onClick={(e)=>popup(e)}
              variants={sectionVariants}
              initial='hidden'
              animate='visible'>
              <img className={`${Style.image}`}  src={serie.images['Poster Art'].url} />
              <Button color='black' value={serie.title} className={`${Style.title} mb-5 text-center`} id='button' onClick={(e)=>openModal(e)}>
                {serie.title}
              </Button>              
            </motion.section>          
        ))
        }
        
        <Modal isOpen={state.abierto} className={`${Style.modal}`}>
          {/* <ModalHeader>
            
          </ModalHeader> */}
        
          <ModalBody className={Style.modalBody}>
           <Label className={Style.modalLabel}>Title:</Label><span>{state.title}</span><br/>
           <Label className={Style.modalLabel}>Description:</Label><span>{state.description}</span><br/>
           <Label className={Style.modalLabel}>ReleaseYear:</Label><span>{state.releaseYear}</span><br/>
           <Label className={Style.modalLabel}>URL:</Label><a href={state.url} target='_blank'>{state.url}</a>

          </ModalBody>
        
          <ModalFooter>
           <a className={Style.cerrar} onClick={(e)=>closeModal(e)}>Cerrar</a>
          </ModalFooter>
        </Modal>      
      </div>       
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let seriesFilter = data.entries
    .filter( (serie) => serie.programType === 'series' && serie.releaseYear >= 2010).slice(0, 20)
    .sort((a, b):number => {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    })

  return {
    props: {
      seriesFilter
    }
  }
}


// <Button color='black' className={Style.buttonModal} onClick={()=>openModal()}>

// </Button>



// <Modal isOpen={state.abierto} className={`${Style.modal}`}>
//         <ModalHeader>
//           {series.filter((e)=> {e})}
//         </ModalHeader>
        
//         <ModalBody>
//           <Label>Soy el Body del Popup</Label>
//         </ModalBody>
        
//         <ModalFooter>
//           <a className={Style.cerrar} onClick={()=>openModal()}>Cerrar</a>
//         </ModalFooter>
//       </Modal>      