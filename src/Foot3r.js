import './Footer.css';


function Footer() {
    return (
        <div className='footer'>

            <div className="header">

                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="black" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(254, 255, 0, 0.74)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(254, 255, 0, 0.74)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="black" />
                        </g>
                    </svg>
                </div>

            </div>

            <div className="content flex">
                <p className='footer-text'> Yaser Odat, ASAC | 2022 </p>
            </div>





        </div>

    )
}



export default Footer;