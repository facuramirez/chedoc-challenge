import Style from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { fb, twit, ig, apple, google, microsoft } from './imagesSVG.js';

export default function Footer() {
    return(   
      <div className={`${Style.footer} container-fluid border border-secondary`}>
            <div className={`${Style.containerFooter} container-md-fluid container-lg mt-3`}>
                <ul>
                    <li>Home</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Collection Statement</li>
                    <li>Help</li>
                    <li>Manage Account</li>
                </ul>
                <p>
                    Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
                </p>
                <section className={`${Style.sectionThree} d-flex flex-column d-sm-flex flex-sm-column d-lg-flex flex-lg-row`}>
                    <div>
                        <div className={`${Style.social}`}>
                            {fb}
                            {twit}
                            {ig}
                        </div>
                    </div>
                    <div>
                        <div className={`${Style.store}`}>
                            {apple}
                            {google}
                            {microsoft}
                        </div>
                    </div>
                </section>
            </div>
      </div>
    )
}


