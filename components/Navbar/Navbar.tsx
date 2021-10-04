import Style from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { subTitle } from '../../globalState/Actions';
import { useDispatch } from 'react-redux';
import { changeSubTitle } from '../../globalState/Actions';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { FiArrowLeftCircle } from 'react-icons/fi';


export default function Navbar() {

    const global = useSelector((state:subTitle) => state.subTitle);
    let dispatch = useDispatch();

    useEffect( () => {
      dispatch(changeSubTitle('Popular Series And Movies'));
    }, [])
    
    const route = useRouter().pathname;

    return(   
      <div className={`${Style.containerNavbar} position-fixed w-100`}>
        <nav className={`${Style.navBar} navbar navbar-expand-lg navbar-dark`}>
          <div className="container-fluid">
              <span className={`${Style.title} order-lg-1`}>
                DEMO Streaming
              </span>
              
              <button className={`${Style.tgButton} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
              </button>
              
              <div className={`${Style.divUlNav} collapse navbar-collapse order-lg-2`} id="navbarColor02">
                <ul className="navbar-nav ml-auto ml-lg-5 ml-md-0">
                    <li className="nav-item ml-lg-5">
                      <a className="nav-link active" href="">Login</a>
                    </li>
                    <li className="nav-item ml-lg-5">
                      <a className="nav-link active" href="">Start your free trial</a>
                    </li>
                </ul>
              </div>
          </div>
        </nav>
        <section className={`${Style.subTitle} navbar navbar-expand-lg`}>
          <span>{global}</span>
          <Link href='/'><a className={`${(route === '/series' || route === '/movies') ? 'd-block':'d-none'}`}>Back</a></Link>
          
        </section>
      </div>
    )
}

