import Style from './Navbar.module.scss';

export default function Navbar() {
    return(   
      <div>
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
                      <a className="nav-link active" href="#">Login</a>
                    </li>
                    <li className="nav-item ml-lg-5">
                      <a className="nav-link active" href="">Start your free trial</a>
                    </li>
                </ul>
              </div>                
          </div>
        </nav>
        <section className={`${Style.subTitle} navbar navbar-expand-lg`}>
          <span>Popular Titles</span>
        </section>
      </div>
    )
}












// import Style from './Navbar.module.scss';

// export default function Navbar(){
//     return(
//         <div className={Style.containerNavbar}>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//               <a className="navbar-brand" href="#">Navbar</a>
//               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon" />
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                 <ul className="navbar-nav">
//                   <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Features</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Pricing</a>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                       Dropdown link
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                       <a className="dropdown-item" href="#">Action</a>
//                       <a className="dropdown-item" href="#">Another action</a>
//                       <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//         </div>
//     )
// }
