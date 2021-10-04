import type { NextPage } from 'next'
import Style from './Movies.module.scss'
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


interface movies {
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

export default function Movies({moviesFilter}:any) {
  const movies = moviesFilter;

  let dispatch = useDispatch();

  useEffect( () => {
    dispatch(changeSubTitle('Movies'));
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
    let data = movies.find( (movie:any) => movie.title === title);

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
      <div className={`${Style.containerMovies}`} id='container'>        
        {
        movies.map((movie:any, index:number) => (          
            <section className={`${Style.movie}`} key={index} onClick={(e)=>popup(e)}>
              <img className={`${Style.image}`}  src={movie.images['Poster Art'].url} />
              <Button color='black' value={movie.title} className={`${Style.title} mb-5 text-center`} id='button' onClick={(e)=>openModal(e)}>
                {movie.title}
              </Button>              
            </section>          
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
  let moviesFilter = data.entries
    .filter( (movie) => movie.programType === 'movie' && movie.releaseYear >= 2010).slice(0, 20)
    .sort((a, b):number => {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    })

  return {
    props: {
      moviesFilter
    }
  }
}
