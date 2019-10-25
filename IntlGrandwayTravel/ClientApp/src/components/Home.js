import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { ImgWrapper } from './ImgWrapper';

export class Home extends Component {
    static displayName = Home.name;

    constructor() {
        super();
        this.handleMouseMove.bind(this);
        this.handleMouseMove2.bind(this);
        this.hanldeMouseOut.bind(this);
    }
    //const imageClick = () => {
    //    window.location.href = "http://www.w3schools.com";

        //}

    onHover() {

    //    //this.setState({
    //    //    imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_brown.png'
    //    //});
        //    this.src = 'http://demo.sodhanalibrary.com/images/twitter_brown.png';
       // var x = 100;
        //this.setState({ height: `${100}%` })
        alert('hello');
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

    hanldeMouseOut  = e => {
            const { left, top, width, height } = e.target.getBoundingClientRect()
            const x = (e.pageX - left) / width * 100
            const y = (e.pageY - top) / height * 100
            // this.setState({ backgroundPosition: `${x}% ${y}%` })
            this.setState({ height: `66.59` })
            this.setState({ width: `100` })

    }

    //handleMouseMove2 = e => {
    //    const { left, top, width, height } = e.target.getBoundingClientRect()
    //    const x = (e.pageX - left) / width * 100
    //    const y = (e.pageY - top) / height * 100
    //    // this.setState({ backgroundPosition: `${x}% ${y}%` })
    //    this.setState({ height: `238` })
    //    this.setState({ width: `238` })
    //}

    //hanldeMouseOut2 = e => {
    //    const { left, top, width, height } = e.target.getBoundingClientRect()
    //    const x = (e.pageX - left) / width * 100
    //    const y = (e.pageY - top) / height * 100
    //    // this.setState({ backgroundPosition: `${x}% ${y}%` })
    //    this.setState({ height: `66.59` })
    //    this.setState({ width: `100` })

    //}


  //  static src = 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg';

    //const src = 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg';
    state = {
        JPImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cc889b93d7bda636bb21_Japan.jpg',
        CAImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cd6e1e6e1177e60575e8_Canada.jpg',
        LATImgSrc: 'https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cf3bb35343d6881a6e52_Latin%20America.jpg',
        height: '66.59',
        width:'100'
       // he
    }




    render() {
        return (
            <div>
                <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c2d2fff6e2442ab9b8f13a9_one%20stop%20hero-p-2000.png" alt="home" style={{ width: '99.5%', height: 'auto', marginLeft: '0.5%' }} />
                {/*<h1>Hello, world!</h1>
                <p>Welcome to your new single-page application, built with:</p>
                <ul>
                    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                    <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                </ul>
                <p>To help you get started, we have also set up:</p>
                <ul>
                    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                    <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
                </ul>
                <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
    
                */}
                <div style={{ height: '350px' }}  >
                    <div style={{ backgroundColor: '#dddddd', display: 'inline-block', height: '100%', width: '50%', float: 'left' }}>
                        <div style={{ marginLeft: '35%', marginTop: '10%' }}>
                            <h1>Welcome!</h1>
                            <p>Check out our latest tour packages and get the best deals from us!</p>
                            <Button style={{ backgroundColor: '#2196f3' }}>TOURS</Button>
                            {/*<div><a href="/tours" class="button">TOURS</a></div>*/}
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#dddddd', display: 'inline-block', height: '100%', width: '50%' }}>
                        <div className="image-column w-col w-col-6">
                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce28b353432b431a6df7_Europe.jpg" alt="" height="300" width="400" style={{ margin: '2.2%' }}></img>
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
                                        <img src={this.state.JPImgSrc} height={this.state.height} alt="" onMouseOver={this.handleMouseMove} onMouseOut={this.hanldeMouseOut} ></img>
                                       
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>ASIA</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src={this.state.LATImgSrc} height={this.state.height} alt="" onMouseOver={this.handleMouseMove2} onMouseOut={this.hanldeMouseOut}></img>
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
                                        <img src={this.state.CAImgSrc} height='66.59' width="100" alt="" ></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>CANADA</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce54762831d920204679_victor-filippov-18111-unsplash.jpg" height="66.59" width="100" alt=""></img>
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
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cda29b93d77ba836bc15_China.jpg" height="66.59" width="100" alt=""></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>CHINA</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68cfe49b93d7da5a36bea6_USA.jpg" height="66.59" width="100" alt=""></img>
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
                                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68ce28b353432b431a6df7_Europe.jpg" height="66.59" width="100" alt=""></img>
                                    </div>
                                    <div style={{ display: 'inline-block', marginLeft: '25px' }}>
                                        <h3>EUROPE</h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', width: '50%', backgroundColor: 'white', marginLeft: '-30%' }}>
                                <div>
                                    <div style={{ display: 'inline-block' }}>
                                        <img src={this.state.LATImgSrc} height={this.state.height} alt="" onMouseOver={this.handleMouseMove2} onMouseOut={this.hanldeMouseOut}></img>
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
                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b5f550cd9b73f489db448ee_social-38.svg" width="20" alt="" style={{ float: 'left', cursor:'pointer' }} onClick={() => window.open( "https://www.google.com/maps/place/2883+E.+Colorado+Blvd.,+Pasadena,+CA+91107","_blank")} />
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
            </div>

        );
    }
}
