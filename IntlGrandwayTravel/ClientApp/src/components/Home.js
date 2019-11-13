import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ReactModal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

//import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
//import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';

//import AwesomeSlider from 'react-awesome-slider';
//import withAutoplay from 'react-awesome-slider/dist/autoplay';
//import 'react-awesome-slider/dist/styles.css';
//import AwesomeSliderStyles from 'react-awesome-slider/src/styles';


//import AwesomeSlider from 'react-awesome-slider';
//import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

import Carousel from 'react-bootstrap/Carousel';


//const AutoplaySlider = withAutoplay(AwesomeSlider);


//import Carousel from 'react-responsive-carousel';

//import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";

const customStyles = {
    content: {
        top: '20%',
        left: '40%',
        //right: 'auto',
        //bottom: 'auto',
        //marginRight: '-50%',
        //transform: 'translate(-50%, -50%)',
        height: '45%',
        width: '50%'



    }
};

//const [showDialog, setShowDialog] = React.useState(false);

//const open = () => setShowDialog(true);
//const close = () => setShowDialog(false);


ReactModal.setAppElement('#root')


    //< AwesomeSlider >
    //<div data-src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg" />
    //<div data-src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce28b353432b431a6df7_Europe.jpg" />
    //<div data-src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cf3bb35343d6881a6e52_Latin%20America.jpg" />
    //<div data-src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce54762831d920204679_victor-filippov-18111-unsplash.jpg" />
    //                        </AwesomeSlider >

export class Home extends Component {
    static displayName = Home.name;

    //    state = {
    //  //  JPImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg',
    //   // CAImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cd6e1e6e1177e60575e8_Canada.jpg',
    //   // LATImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cf3bb35343d6881a6e52_Latin%20America.jpg',
    //    height: '66.59',
    //    width: '100',
    //    showModal: false,
    //    modalIsOpen: false
    //   // he
    //}

    //handleClose = () => {
    //   // alert('Hellllo');
    //    this.setState({ show: false });
    //}

    showModal = e => {
        //showModal = () => {
        // alert('Hellllo');
        if (e.currentTarget.id === "pic1") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg" })
        }
        if (e.currentTarget.id === "pic2") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cd6e1e6e1177e60575e8_Canada.jpg" })
        }
        if (e.currentTarget.id === "pic3") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cda29b93d77ba836bc15_China.jpg" })
        }
        if (e.currentTarget.id === "pic4") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce28b353432b431a6df7_Europe.jpg" })
        }
        if (e.currentTarget.id === "pic5") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cf3bb35343d6881a6e52_Latin%20America.jpg" })
        }
        if (e.currentTarget.id === "pic6") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce54762831d920204679_victor-filippov-18111-unsplash.jpg" })
        }
        if (e.currentTarget.id === "pic7") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cfe49b93d7da5a36bea6_USA.jpg" })
        }
        if (e.currentTarget.id === "pic8") {
            this.setState({ popupURL: "https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367279222a7c68add2b346_ashwin-vaswani-1077803-unsplash-p-500.jpeg" })
        }

        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    };

    constructor(props) {
        super(props);
        this.handleMouseMove.bind(this);
        this.handleMouseMove2.bind(this);
        this.hanldeMouseOut.bind(this);
        // this.onHover = this.onHover.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);


        this.state = {
            JPImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg',
            CAImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cd6e1e6e1177e60575e8_Canada.jpg',
            LATImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cf3bb35343d6881a6e52_Latin%20America.jpg',
            height: '66.59',
            width: '100',
            showModal: false,
            modalIsOpen: false,
            popupURL: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg',
            show: false,
            images: [
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
            // he
        }

    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }



    openModal() {


        this.setState({ modalIsOpen: true });
    }


    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
        this.setState({ height: '66.59' });
        this.setState({ width: '100' });

    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    onHover = e => {

        //    //this.setState({
        //    //    imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_brown.png'
        //    //});
        //    this.src = 'http://demo.sodhanalibrary.com/images/twitter_brown.png';
        // var x = 100;
        //this.setState({ height: `${100}%` })
        alert(e.currentTarget.id);

    }

    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        // this.setState({ backgroundPosition: `${x}% ${y}%` })
        this.setState({ height: `238` })
        this.setState({ width: `238` })
    }

    handleMouseMove2 = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        // this.setState({ backgroundPosition: `${x}% ${y}%` })
        this.setState({ height: `238` })
        this.setState({ width: `238` })
    }

    hanldeMouseOut = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        // this.setState({ backgroundPosition: `${x}% ${y}%` })
        this.setState({ height: `66.59` })
        this.setState({ width: `100` })

    }



    render() {
        return (
            <div>

                <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c2d2fff6e2442ab9b8f13a9_one%20stop%20hero-p-2000.png" alt="home" style={{ width: '99.5%', height: 'auto', marginLeft: '0.5%' }} />


                <Modal show={this.state.show} handleClose={this.hideModal}>

                    <div className="slider" style={{ marginTop: '20px' }}>
                        <div className="slider-wrapper"
                            style={{
                                transform: `translateX(${this.state.translateValue}px)`,
                                transition: 'transform ease-out 0.45s'
                            }}>
                            {
                                this.state.images.map((image, i) => (
                                    <Slide key={i} image={image} />
                                ))
                            }
                        </div>
                        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>

                        <RightArrow goToNextSlide={this.goToNextSlide}/>
                    </div>
                </Modal>


                <div style={{ height: '330px' }}  >
                    <div style={{ backgroundColor: '#dddddd', display: 'inline-block', height: '100%', width: '50%', float: 'left' }}>
                        <div style={{ marginLeft: '35%', marginTop: '10%' }}>
                            <h1>Welcome!</h1>
                            <p>Check out our latest tour packages and get the best deals from us!</p>
                            <Button style={{ backgroundColor: '#2196f3' }} onClick={this.showModal}>TOURS</Button>
                            {/*<div><a href="/tours" class="button">TOURS</a></div>*/}
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#dddddd', display: 'inline-block', height: '100%', width: '50%' }}>
                        {/* <div className="image-column w-col w-col-6"> */}
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" style={{ height:'42%', width:'45%' }}
                                        src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                           
                                        <p>Japan</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce28b353432b431a6df7_Europe.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                
                                        <p>Italy</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img height="42%" width="45%"
                                        className="d-block w-100"
                                        src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cd6e1e6e1177e60575e8_Canada.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>

                                        <p>Canada</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img height="42%" width="45%"
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/proxy/MuE55ZjR1MFa12BV_z2sSOLEV7sSFTgr09wA_DAHw3iaSirBTcFGwfKqHZ1hMFj4aXBBP9-Dc8cyldzWANsTy42p7DTFPGuf_SIsN_hsBu9LfSXi8g74WY5XrvuSVqDO0v7WDEJOOnBv7XuBJAO09bRNALI=w357-h238-k-no"
                                        alt="Four slide"
                                    />

                                    <Carousel.Caption>

                                        <p>Germany</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img height="38%" width="45%"
                                        className="d-block w-100"
                                        src="https://www.ynetnews.com/PicServer4/2016/05/10/6995374/11.jpg"
                                        alt="Fifth slide"
                                    />

                                    <Carousel.Caption>

                                        <p>Israel</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img height="38%" width="45%"
                                        className="d-block w-100"
                                        src="https://specials-images.forbesimg.com/imageserve/902925766/960x0.jpg?fit=scale"
                                        alt="Fifth slide"
                                    />

                                    <Carousel.Caption>

                                        <p>Thailand</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

       

                            {/*  <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce28b353432b431a6df7_Europe.jpg" alt="" height="42%" width="45%" style={{ margin: '2.2%' }}></img> */}
    
                        </div>


                    </div>
                </div>
                <div>
                    <div>
                        <div style={{ textAlign: 'CENTER', marginBottom: '30px', marginTop: '30px' }}>
                            <h2>Popular Destinations</h2>
                        </div>
                        <div style={{ marginBottom: '30px', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', float: 'left', backgroundColor: 'white', marginLeft: '30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic1" style={{ cursor: 'pointer'}} title="Click for more pictures"></img>

                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>ASIA</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cf3bb35343d6881a6e52_Latin%20America.jpg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic5" style={{ cursor: 'pointer' }} title="Click for more pictures"></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>LATIN&nbsp;AMERICA</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginBottom: '30px', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', float: 'left', backgroundColor: 'white', marginLeft: '30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cd6e1e6e1177e60575e8_Canada.jpg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic2" style={{ cursor: 'pointer' }} title="Click for more pictures"></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>CANADA</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce54762831d920204679_victor-filippov-18111-unsplash.jpg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic6" title="Click for more pictures" style={{ cursor: 'pointer' }}></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>THAILAND</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginBottom: '30px', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', float: 'left', backgroundColor: 'white', marginLeft: '30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cda29b93d77ba836bc15_China.jpg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic3" title="Click for more pictures" style={{ cursor: 'pointer' }}></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>CHINA</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cfe49b93d7da5a36bea6_USA.jpg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic7" title="Click for more pictures" style={{ cursor: 'pointer' }}></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>UNITED&nbsp;STATES</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginBottom: '30px', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', float: 'left', backgroundColor: 'white', marginLeft: '30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce28b353432b431a6df7_Europe.jpg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic4" title="Click for more pictures" style={{ cursor: 'pointer' }}></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>EUROPE</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367279222a7c68add2b346_ashwin-vaswani-1077803-unsplash-p-500.jpeg" height={this.state.height} width={this.state.width} alt="" onClick={this.showModal} id="pic8" title="Click for more pictures" style={{ cursor: 'pointer' }}></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>AUSTRALIA</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



                <div style={{ height: '250px', backgroundColor: '#dddddd' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img style={{ marginTop: '30px' }} src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367c3f542c02113d9367a9_Screen%20Shot%202019-01-09%20at%202.56.47%20PM.png" alt=""></img>
                        <div style={{ marginLeft: '35%', marginTop: '1%' }}>
                            <h2 style={{ float: 'left', color: 'green' }}>Cover your trip with insurance</h2>
                            <Button href="http://www.travelguard.com/compare/pct.asp?ta_arc=05679855&amp;pc=PCTUSASLG&amp;agencyemail=intlgrandway@yahoo.com" target="_blank" style={{ float: 'left', marginLeft: '3%', backgroundColor: 'green' }}>BUY&nbsp;NOW</Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: '160px', backgroundColor: '#9EB89D', marginTop: '10px' }}>

                    <div style={{ float: 'left', display: 'inline-block', width: '50%', height: '100%', textAlign: 'right', padding: '40px' }}>
                        <h3>International Grandway Travel</h3>
                    </div>
                    <div style={{ float: 'left', display: 'inline-block', width: '50%', height: '100%', padding: '3px' }}>
                        <div style={{ height: '40%', display: 'inline-block' }}>
                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b5f550cd9b73f489db448ee_social-38.svg" width="20" alt="" style={{ float: 'left', cursor: 'pointer' }} onClick={() => window.open("https://www.google.com/maps/place/2883+E.+Colorado+Blvd.,+Pasadena,+CA+91107", "_blank")} />
                            <div style={{ float: 'left' }}>International Grandway Travel <br /> 2883 E. Colorado Blvd. <br /> Pasadena, CA 91107</div>
                        </div>

                        <div style={{ height: '30%', paddingTop: '10px' }}>
                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b5f550cd9b73f6744b448fd_social-40.svg" width="20" alt="" style={{ float: 'left' }} />
                            <div style={{ float: 'left' }}>1-626-577-7277</div>
                        </div>

                        <div style={{ height: '30%' }}>
                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b5f550cd9b73f122bb44901_social-25.svg" width="20" alt="" style={{ float: 'left' }} />
                            <div><a href="mailto:contact@creativestudios.net">intlgrandway@yahoo.com</a></div>
                        </div>
                    </div>


                </div>
                <button type='button' onClick={this.showModal}>Open</button>
            </div>

        );
    }


}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};


const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
};


const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
       
            <i className="left"></i>
        </div>
    );
}


const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
           
            <i className="right"></i>
        </div>
    );
}
