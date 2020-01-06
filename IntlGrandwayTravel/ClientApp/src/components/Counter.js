import React, { Component } from 'react';
import { TourNavMenu } from './TourNavMenu';
export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    }

    handleClick = (e) => {
        //console.log('this is:', this);
        ////alert('Hello');
        //$('body, html').animate({
        //    scrollTop: $("#northamerica").offset().top
        //}, 600);
        console.log(e);
       // alert(e.currentTarget.id);
        switch (e.currentTarget.id) {
            case 'asia':
                window.scrollTo({
                    top: 180,
                    left: 0,
                    behavior: 'smooth'
                });
                break;
            case 'northamerica':
                window.scrollTo({
                    top: 7800,
                    left: 0,
                    behavior: 'smooth'
                });
                break;
            case 'europe':
                window.scrollTo({
                    top: 9880,
                    left: 0,
                    behavior: 'smooth'
                });
                break;
            case 'latinamerica':
                window.scrollTo({
                    top: 11898,
                    left: 0,
                    behavior: 'smooth'
                });
                break;
            default:

        }


    }

    render() {


    return (


        <div className="category-countries accent">
            <div className="w-container">
                <div className="section-title-group" style={{ marginLeft: '20%', width: '60%' }}>
                    <h2 className="section-heading centered" style={{ textAlign: 'center' }}>Tours</h2>
                    <div data-duration-in="300" data-duration-out="100" className="w-tabs">
                        {/*   <NavMenu /> */}
                        {/* <TourNavMenu /> */}
                        <div style={{ backgroundColor: 'green', height: '40px' }}>
                            <div style={{ width: '25%', float: 'left' }}>
                                <span style={{ float: 'left', cursor: 'pointer' }}  onClick={this.handleClick}  id="asia">
                                    <div style={{ color: 'white', marginTop: '5px', marginBottom: '5px', paddingBottom:'5px' }}>Asia &amp; Pacific</div>
                                </span>
                            </div>
                            <div style={{ width: '25%', float: 'left' }}>
                                <span style={{ float: 'left', cursor: 'pointer' }} onClick={this.handleClick} id="northamerica">
                                    <div style={{ color: 'white', marginTop: '5px', marginBottom: '5px', paddingBottom: '5px'}}>North America</div>
                                </span>
                            </div>
                            <div style={{ width: '25%', float: 'left' }}>
                                <span style={{ float: 'left', cursor: 'pointer' }} onClick={this.handleClick} id="europe">
                                    <div style={{ color: 'white', marginTop: '5px', marginBottom: '5px', paddingBottom: '5px' }}>Europe</div>
                                </span>
                            </div>
                            <div style={{ width: '25%', float: 'left' }}>
                                <span style={{ float: 'left', cursor: 'pointer' }} onClick={this.handleClick} id="latinamerica">
                                    <div style={{ color: 'white', marginTop: '5px', marginBottom: '5px', paddingBottom: '5px' }}>Latin America</div>
                                </span>
                            </div>
                        </div>
                        <div className="w-tab-content">
                       
                            <div data-w-tab="Asia &amp; Pacific" className="w-tab-pane w--tab-active" id="asia">

                                <h1 className="heading-11" style={{ marginTop:'2%', display:'block' }}>China</h1>

                                <a href="/10-classic-china" style={{ display: 'inline-block', width:'100%' }}>
                                    <div>
                                        <div style={{ width: '34%',  float: 'left', display: 'inline-block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366bb6a343b04d9956864c_Beijing.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', height:'100%',   float: 'left', display: 'inline-block', paddingLeft: '10px' }}>
                                            <h4 className="heading-40">10 Day Classic China</h4>
                                            <p className="paragraph-2">Beijing, Xian, Shanghai<br />From $1649 (Air &amp; Land)<br />'Mar - Nov 2019'</p>
                                        </div>
                                    </div>
                                </a>
                               
                                <a href="/11-china-with-yangtze-river-cruise" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%',  float: 'left', display: 'inline-block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366b9a542c02721b93358d_Shanghai.jpg" width="100%" height="100%"  alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', height:'100%',  float: 'left', display: 'inline-block', paddingLeft: '10px' }}>
                                            <h4 className="heading-41">11 Day Affordable China with Yangtze River Cruise</h4>
                                            <p className="paragraph-3">Beijing, Cruise, Shanghai<br />From $1549 (Air &amp; Land)<br />'Nov 2019 - Mar 2020'</p>
                                        </div>
                                    </div>
                                </a>
                       
                                <a href="/14-china-tibet-discovery" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', float: 'left', display: 'inline-block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366c1219ea1e47a34305d4_Xian.jpg" width="100%" height="100%"  alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', height: '100%',float: 'left', display: 'inline-block', paddingLeft: '10px' }}>
                                            <h4 className="heading-42">14 Day China and Tibet Discovery</h4>
                                            <p className="paragraph-4">Shanghai, Xian, Lhasa (Tibet), Beijing<br />From $2799 (Land only) or $3279 (Land &amp; Air)<br />'Apr - Oct 2019'<br /><em>Small groups</em></p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/15-china-chengdu-yangtze-river-cruise" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366b3b222a7c885cd28455_hangzhou.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', height: '100%', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-43">15 Day China with Chengdu &amp; 3 Day Yangtze River Cruise</h4>
                                            <p className="paragraph-4">Beijing, Xian, Chengdu, Cruise, Shanghai<br />From $2299 (land) or $2839 (air &amp; land) and up<br />'Mar - Oct 2019'</p>
                                        </div>
                                    </div>
                                </a>
                                <h1 className="heading-11" style={{ display: 'block', marginTop: '8%', textAlign:'left' }}>Japan</h1>
                                <a href="/6-japan-kanto-delights" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%',float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366d4ff336ddf2c1d3648b_riccardo-chiarini-383136-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', height: '100%',  float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-44">6 Day Japan Kanto Delights</h4>
                                            <p className="paragraph-2">Tokyo, Kamakura, Mt Fuji, Yokohama<br />From $809 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/6-japan-hokkaido" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366d66a343b064db568a98_manuel-cosentino-691602-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{width: '66%', height: '100%', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-45">6 Day Hokkaido</h4>
                                            <p className="paragraph-2">Sapporo, Hakodate, Lake Toya<br />From $849 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/7-japan-kansai-classic" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366d9da343b0228b568b3d_sorasak-252182-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-46">7 Day Japan Kansai Classic Journey</h4>
                                            <p className="paragraph-2">Osaka, Wakayama, Kyoto, Nara<br />From $1199 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/7-japan-kansai-classic" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366e3df336ddb4f3d367af_nagoya.jpeg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-47">7 Day Hokuriku Japan</h4>
                                            <p className="paragraph-2">Nagoya, Shirakawago Gassho Village, Kanazawa, Nagano, Tokyo<br />From $1139 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/7-japan-kansai-classic" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c366fbd19ea1e36c2430dc6_fukuoka.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-48">7 Day Kyushu Experience Delights</h4>
                                            <p className="paragraph-2">Fukuoka, Nagasaki, Kumamoto, Miyazaki, Beppu<br />From $1359 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/8-japan-honshu-classic" style={{ width: '100%',  display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', float: 'left', display: 'inline-block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c36703d19ea1eb900430e10_osaka.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', height:'100%', float: 'left', display: 'inline-block', paddingLeft: '10px' }}>
                                            <h4 className="heading-49">8 Day Honshu Classic Journey</h4>
                                            <p className="paragraph-2">Tokyo, Mt. Fuji, Nagoya, Kyoto, Nara, Osaka<br />From $1359 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <h1 className="heading-13" style={{ display: 'block', marginTop: '8%' }}>Thailand</h1>
                                <a href="/9-central-thailand-river-kwai" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', float: 'left', display: 'inline-block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367163222a7cb2f9d2ad24_lisheng-chang-396821-unsplash.jpg" width="100%" height="80%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%',  height:'80%', float: 'left', display: 'inline-block', paddingLeft: '10px' }}>
                                            <h4 className="heading-50">9 Day Central Thailand with River Kwai</h4>
                                            <p className="paragraph-2">Bangkok, Kanchanaburi, Ayutthaya<br />From $579 (Land only) or $1229 (Air &amp; Land)<br />'Aug 2019 - May 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/10-central-thailand-river-kwai-pattaya" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%',  float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c36716319ea1e3e524313b6_evan-krause-443485-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', height: '100%', float: 'left', display: 'inline-block', paddingLeft: '10px' }}>
                                            <h4 className="heading-51">10 Day Central Thailand with River Kwai &amp; Pattaya</h4>
                                            <p className="paragraph-2">Bangkok, Kanchanaburi, Ayutthaya, Pattaya<br />From $749 (Land only) or $1399 (Air &amp; Land)<br />'Aug 2019 - May 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/13-classic-thailand" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c3671c5f15428119064df34_mathew-schwartz-691798-unsplash.jpg" width="100%" height="100%"  alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-52">13 Day Classic Thailand</h4>
                                            <p className="paragraph-2">Bangkok, Ayutthaya, Sukhothai, Chiang Rai, Chiang Mai<br />From $999 (Land only) or $1489 (Air &amp; Land)<br />'Sep 2019 - May 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/16-classic-thailand-phuket" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367164542c02603c934681_humphrey-muleba-775463-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-53">16 Day Classic Thailand with Phuket</h4>
                                            <p className="paragraph-2">Bangkok, Chiang Mai, Chiang Rai, Sukhothai, Ayutthaya, Phuket<br />From $1699 (Land only) or $2139 (Air &amp; Land)<br />'Sep 2019 - May 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <h1 className="heading-14" style={{ display: 'block', marginTop: '8%' }}>Vietnam/ Cambodia</h1>
                                <a href="/essential-vietnam" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68bd700bedee0ddaded6c3_Asia%2004.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-54">8 Day Essential Vietnam</h4>
                                            <p className="paragraph-2">Ho Chi Minh, Halong Bay, Hanoi<br />From $549 (Land only) or $1249 (Air &amp; Land)<br />'Aug 2019 - Apr 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/classic-vietnam" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367504a343b0b2d656aba9_ammie-ngo-690967-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-55">12 Day Classic Vietnam</h4>
                                            <p className="paragraph-2">Ho Chi Minh, Hoi An, Hue, Halong Bay, Hanoi<br />From $999 (Land only) or $1599 (Air &amp; Land)<br />'Sep 2019 - Apr 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/15-cambodia-vietnam" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{  display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c3674e4222a7c68f7d2bade_h-ng-nguy-n-vi-t-706400-unsplash.jpg" width="100%" height="100%"  alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-56">15 Day Cambodia and Vietnam</h4>
                                            <p className="paragraph-2">Phnom Penh, Siem Reap, Ho Chi Minh, Hoi An, Hue, Halong Bay, Hanoi<br />From $1849 (Land only) or $2399 (Air &amp; Land)<br />'Jul 2019 - May 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/bangkok-cambodia-vietnam" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c36768bf7e38408575b0af3_milada-vigerova-32030-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-57">17 Day Bangkok, Cambodia, and Vietnam</h4>
                                            <p className="paragraph-2">Bangkok, Siem Reap, Ho Chi Minh, Hoi An, Hue, Halong Bay, Hanoi<br />From $2299 (Land only) or $2889 (Air &amp; Land)<br />'Sep 2019 - Apr 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/19-central-thailand-vietnam" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367704f15428c0d764ec24_warren-wong-223130-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block' }}>
                                            <h4 className="heading-58">19 Day Central Thailand and Vietnam</h4>
                                            <p className="paragraph-2">Bangkok, Kanchanaburi, Ayutthaya, Ho Chi Minh, Hoi An, Hue, Halong Bay, Hanoi<br />From $1849 (Land only) or $2499 (Air &amp; Land)<br />'Nov 2019 - Mar 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <h1 className="heading-15" style={{ display: 'block', marginTop: '8%' }}>Malaysia/ Singapore</h1>
                                <a href="/6-day-singapore-malaysia-delights" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%',  float: 'left', display: 'inline-block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c36738319ea1e63eb431952_kelvin-zyteng-764527-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', float: 'left', display: 'inline-block' }}>
                                            <h4 className="heading-59">6 Day Singapore and Malaysia Delights</h4>
                                            <p className="paragraph-2">Singapore, Malacca, Genting Highland, Kuala Lumpur<br />From $699 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/11-day-thailand-singapore-malaysia" style={{ width: '100%', display: 'inline-block' }} >
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%',  float: 'left', display: 'inline-block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367424f7e38499ed5b056f_carles-rabada-761795-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%',  float: 'left', display: 'inline-block' }}>
                                            <h4 className="heading-60">11 Day Thailand, Singapore, and Malaysia</h4>
                                            <p className="paragraph-2">Bangkok, Pattaya, Singapore, Sentosa Island, Malacca, Kuala Lumpur, Genting<br />From $499 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <h1 className="heading-15" style={{ display: 'block', marginTop: '8%' }}>Taiwan</h1>
                                <a href="/11-day-thailand-singapore-malaysia" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c3673b1f15428e1dd64e460_remi-yuan-569408-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-61">9 Day Discover Taiwan</h4>
                                            <p className="paragraph-2">Taipei, Nantou, Taichung, Kaohsiung, Kenting, Taitung, Hualien, Taroko<br />From $2199 (Air &amp; Land)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/classic-taiwan-island" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c3673bf19ea1e9035431985_rovin-ferrer-416116-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-62">8 Day Taiwan Island Classic</h4>
                                            <p className="paragraph-2">Taipei, Taichung, Nantou, Jiayi, Tainan, Taoyuan<br />From $669 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                            
                                <h1 className="heading-15" style={{ display: 'block', marginTop: '8%' }}>Australia &amp; New Zealand</h1>
                                <a href="/12-classic-australia" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367279222a7c68add2b346_ashwin-vaswani-1077803-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-63">12 Day Classic Australia</h4>
                                            <p className="paragraph-2">Cairns, Sydney, Alice Springs, Melbourne<br />From $2999 (Land only) or $3719 (Air &amp; Land)<br />'Sep 2019 - May 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/15-new-zealand-australia" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5c367279f7e3847cba5b0301_tyler-lastovich-575635-unsplash.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-64">15 Day New Zealand and Australia</h4>
                                            <p className="paragraph-2">Auckland, Queenstown, Dunedin, Sydney, Melbourne<br />From $4499 (Air &amp; Land)<br />'Sep 2019 - Apr 2020'</p>
                                        </div>
                                    </div>
                                </a>
                               
                                </div>
                 
                            <div data-w-tab="North America" className="w-tab-pane" id="northamerica">
                                <h1 className="heading-11" style={{ display: 'block', marginTop: '8%' }}>Canada</h1>
                                <a href="/4-highlights-of-vancouver" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba027bd894feb337eee1af2_Vancouver%2C%20Victoria.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-38">4 Day Highlights of Vancouver, Victoria</h4>
                                            <p className="paragraph-2">Vancouver, Victoria<br />From $489 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/7-rocky-mountain" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba029c13943f84b8d5b8b2e_rocky%20mountain.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-39">7 Day Rocky Mountain</h4>
                                            <p className="paragraph-2">Vancouver, Kelowna, Vernon, Revelstoke, Bow Lake, Columbia Icefield, Skywalk, Banff, Bow Fall, Mount Whitehorn, Lake Louise, Moraine Lake, Last Spike, Salmon Arm, Kamloops, Victoria<br />From $809 (Land only)</p>
                                        </div>
                                    </div>
                                </a>
                                <h1 className="heading-11" style={{ display: 'block', marginTop: '8%' }}>USA</h1>
                                <a href="/5-oregon" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba03da364c02efe48f6b34e_oregon.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-36">5 Day Oregon Crater Lake Deluxe</h4>
                                            <p className="paragraph-2">Los Angeles, Sequoia N.P. Pleasanton, Napa Valley, Redwood, National Forest, Eureka, Crescent City, Crater Lake N.P. Klamath Falls, Mount Shasta, Lake Shasta, Caverns-Sundial Bridge, Gilroy, Roaring Camp<br />From $448 (Buy 2 get 1 free, except long weekends)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/8-yellowstone-mt-rushmore-horseshoe-bend-antelope-canyon" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba03e2400aac85e3434c56c_horseshoe%20bend.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-37">8 Day Yellowstone, Mt.Rushmore, Horseshoe Bend, Antelope Canyon Bus Tour </h4>
                                            <p className="paragraph-2">Yellowstone, Mt. Rushmore, Horseshoe Bend, Antelope Canyon<br />From $798 (Buy 2 get 1 free, except long weekends)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/7-east-coast-deluxe" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba0404d59ac8efe381b967c_niagra%20falls.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-37">7 Day East Coast Deluxe</h4>
                                            <p className="paragraph-2">New York, Princeton, Philadelphia, Lancaster, Washington D.C., Niagara Falls, Boston, New York<br />From $650 (Buy 2 get 2 free)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/8-texas-panorama-tour" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba0405754a687d2b86704d9_texas.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-37">7 Day Texas Tour</h4>
                                            <p className="paragraph-2">Houston, Dallas, Austin, San Antonio<br />From $788+</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/5-chicago" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba0406a00aac86e6234c6bf_chicago.jpg" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-37">4 or 5 Days Chicago City Tour</h4>
                                            <p className="paragraph-2">Chicago, Milwaukee Lake Geneva, Prohibition, Mccormick tour<br />From $442 for 4 days -OR- $576 for 5 days</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div data-w-tab="Europe" className="w-tab-pane">
                                <h1 className="heading-11" style={{ display: 'block', marginTop: '8%' }}>Europe</h1>
                                <a href="/8-essential-greece" target="_blank" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba003dcaa89c638cac101b0_greece.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-31">8 Day Essential Greece</h4>
                                            <p className="paragraph-2">Athens, Olympia, Delphi<br />From: <br />March 2019 - Nov 2019' $1349 (Land only) or $1949 (Air &amp; Land)<br />'Nov 2019 - Mar 2020' $699 (Land only) or $1249 (Air &amp; Land)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/8-affordable-central-europe" target="_blank" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba003f74fd32d1cca949928_vienna.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-30">8 Day Affordable Central Europe</h4>
                                            <p className="paragraph-2">Budapest, Vienna, Prague<br />From $899 (Land only) or $1509 (Air &amp; Land) <br />'Oct 2019 - March 2020'<br /></p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/10-affordable-germany-switzerland-austria" target="_blank" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{  display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba004058a634e6f39fd771d_switzerland.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-29">10 Day Affordable Germany, Switzerland and Austria</h4>
                                            <p className="paragraph-2">Mainz, Black Forest, Lucerne, Innsbruck, Vienna<br />From $1499 (Land only) or $2139 (Air &amp; Land)<br />'Oct 2019 - March 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/10-affordable-central-europe-with-berlin" target="_blank" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba00665e5a74aa1fe050b27_berlin.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-35">10 Day Central Europe with Berlin</h4>
                                            <p className="paragraph-2">Budapest, Vienna, Prague, Berlin<br />From $1299 (Land only) or $1959 (Air &amp; Land)<br />'Oct 2019 - March 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/10-classic-baltics" target="_blank" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba00674b35eb053800410b3_baltics.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-32">10 Day Classic Baltics</h4>
                                            <p className="paragraph-2">Tallinn, Riga, Vilnius, Warsaw<br />From $1549 (Land only) or $2209 (Air &amp; Land)<br />'April - October 2019'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/11-affordable-portugal-spain" target="_blank" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba0078ec492f6aa94865373_spain.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-33">11 Day Affordable Portugal &amp; Spain</h4>
                                            <p className="paragraph-2">Lisbon, Seville, Torremolinos, Madrid<br />From $1599 (Land only) or $2129 (Air &amp; Land)<br />'October 2019 - April 2020'</p>
                                        </div>
                                    </div>
                                </a>
                                <a target="_blank" href="/12-affordable-albania-montenegro-croatia-slovenia" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{  display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5ba00761a71e045840c06402_Croatia.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-34">12 Day Affordable Albania, Montenegro, Croatia &amp; Slovenia</h4>
                                            <p className="paragraph-2">Tirana, Kolasin, Dubrovnik, Split, Plitvice Lakes, Bled<br />From $1449 (Land only) or $2619 (Air &amp; Land)<br />'Oct 2018 - April 2019'</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div data-w-tab="Latin America" className="w-tab-pane">
                                <h1 className="heading-11" style={{ display: 'block', marginTop: '8%' }}>Latin America</h1>
                                <a href="/7-peru-machu-picchu" style={{ width: '100%', display: 'inline-block' }}>
                                    <div style={{display: 'block' }}>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b9ffd35aa89c6c941c0f8a3_Peru%2C%20Machu%20Picchu.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-23">7 Day Peru &amp; Machu Picchu</h4>
                                            <p className="paragraph-2">Lima, Sacred Valley, Aguas Calientes (Machu Picchu), Cuzco<br />From $1249 (Land only) or $1809 (Air &amp; Land)<br />'Jan - Dec 2019'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/8-affordable-colombia" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b9ffd42af345eaa271c560d_Colombia.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-24">8 Day Affordable Colombia</h4>
                                            <p className="paragraph-2">Medellin, Cartagena, Bogota<br />From $899 (Land only) or $1199 (Air &amp; Land)<br />'Jan - Dec 2019'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/9-classic-argentina-chile" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b9ffd56b2aaf0a52138db1a_Argentina%2C%20Chile.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-25">9 Day Classic Argentina &amp; Chile with Mendoze Wine Country</h4>
                                            <p className="paragraph-2">Buenos Aires, Mendoza, Santiago<br />From $1549 (Land only) or $2539 (Air &amp; Land)<br />'Jan - Dec 2019'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/11-peru-bolivia" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b9fff16aa89c6c411c0fab6_bolivia.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-26">11 Day Affordable Peru and Bolivia</h4>
                                            <p className="paragraph-2">Lima, Urubamba, Cuzco, Puno, La Paz<br />From $1699 (Land only) or $2269 (Air &amp; Land)<br />'Jan - Dec 2019'</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/12-kaleidoscope-of-peru" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b9ffe6db2aaf028b538dbab_peru.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-27">12 Day Kaleidoscope of Peru </h4>
                                            <p className="paragraph-2">Lima, Cuzco, Puno, Colca, Arequipa<br />From $2049 (Land only) or $2559 (Air &amp; Land)<br />'Feb - Dec 2019' </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/13-classic-brazil-argentina-chile" style={{ width: '100%', display: 'inline-block' }}>
                                    <div>
                                        <div style={{ width: '34%', position: 'relative', float: 'left', display: 'block' }}>
                                            <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b9ffbe58a634e184afd6969_Brazil%2C%20Argentina.jpg" width="100%" alt="" height="100%"></img>
                                        </div>
                                        <div style={{ width: '66%', position: 'relative', float: 'left', display: 'block', paddingLeft: '10px' }}>
                                            <h4 className="heading-28">13 Day Classic Brazil, Argentina, and Chile</h4>
                                            <p className="paragraph-2">Rio de Janeiro, Iguazu, Buenos Aires, Santiago<br />From $3149 (Land only) or $4009 (Air &amp; Land)<br />'Jan - Dec 2019'</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}
