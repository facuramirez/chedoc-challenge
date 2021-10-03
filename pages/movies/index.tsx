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
import { useEffect } from 'react';


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

  return (
    <Layout>
      <div className={`${Style.containerMovies}`}>        
        {movies.map((movie:any, index:number) => (
          <section className={`${Style.movie}`} key={index}>
            <img className={`${Style.image}`} src={movie.images['Poster Art'].url} />
            <h5 className={`${Style.title} mb-5 text-center`}>{movie.title}</h5>
          </section>
        ))
        }        
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
