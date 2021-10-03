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
import { useEffect } from 'react';


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

export default function Series({seriesFilter}:any) {
  const series = seriesFilter;  
  let dispatch = useDispatch();

  useEffect( () => {
    dispatch(changeSubTitle('Series'));
  }, [])

  return (
    <Layout>
      <div className={`${Style.containerSeries}`}>        
        {series.map((serie:any, index:number) => (
          <section className={`${Style.serie}`} key={index}>
            <img className={`${Style.image}`} src={serie.images['Poster Art'].url} />
            <h5 className={`${Style.title} mb-5 text-center`}>{serie.title}</h5>
          </section>
        ))
        }        
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
