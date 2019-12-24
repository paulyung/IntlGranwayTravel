import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, { Component } from 'react';
import { Route } from 'react-router';


import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import TenClassChina from './components/TenClassChina';
import ElevenChinaYangTzeRiver from './components/ElevenChinaYangTzeRiver';
import FourteenChinaTibetDiscovery from './components/FourteenChinaTibetDiscovery';
import FifteenChinaChengduYangtzeRiverCruise from './components/FifteenChinaChengduYangtzeRiverCruise';
import SixJapanKantoDelights from './components/SixJapanKantoDelights';
import SixJapanHokkaido from './components/SixJapanHokkaido';
import SevenJapanKansaiClassic from './components/SevenJapanKansaiClassic';
import EightJapanHonshuClassic from './components/EightJapanHonshuClassic';
import NineCentralThailandRiverKwai from './components/NineCentralThailandRiverKwai';
import TenCentralThailandRiverKwaiPattaya from './components/TenCentralThailandRiverKwaiPattaya';
import ThirteenClassThailand from './components/ThirteenClassThailand';
import SixteenClassicThailandPhuket from './components/SixteenClassicThailandPhuket';
import './custom.css'
import EssentialVietnam from './components/EssentialVietnam';
import ClassicVietnam from './components/ClassicVietnam';
import CambodiaVietnam from './components/CambodiaVietnam';
import BangkokcambodiaVietnam from './components/BangkokcambodiaVietnam';
import NineteenCentralThailandVietnam from './components/NineteenCentralThailandVietnam';
import SixDaySingaporeMalaysiaDelights from './components/SixDaySingaporeMalaysiaDelights';
import ClassicTaiwanIsland from './components/ClassicTaiwanIsland';
import TwelveClassicAustralia from './components/TwelveClassicAustralia';
import FifteenNewZealandAustralia from './components/FifteenNewZealandAustralia';
import FourHighlightsOfVancouver from './components/FourHighlightsOfVancouver';
import SevenRockyMountain from './components/SevenRockyMountain';
import FiveOregon from './components/FiveOregon';
import EightYellowStoneMtRushmoreHorseShowBendAntelopeCanyon from './components/EightYellowStoneMtRushmoreHorseShowBendAntelopeCanyon';
import SevenEastCoastDeluxe from './components/SevenEastCoastDeluxe';
import EightTexasPanoramaTour from './components/EightTexasPanoramaTour';
import FiveChicago from './components/FiveChicago';
import EightEssentialGreece from './components/EightEssentialGreece';
import EightAffordableCentralEurope from './components/EightAffordableCentralEurope';
import TenAffordableGermanySwitzlandAustria from './components/TenAffordableGermanySwitzlandAustria';
import TenAffordableCentralEuropeWithBerlin from './components/TenAffordableCentralEuropeWithBerlin';
import TenClassicBaltics from './components/TenClassicBaltics';
import ElevenAffordablePortugalSpain from './components/ElevenAffordablePortugalSpain';
import TwelveAffordableAlbaniaMontenegroCroatiaSlovenia from './components/TwelveAffordableAlbaniaMontenegroCroatiaSlovenia';
import SevenPeruMachuPicchu from './components/SevenPeruMachuPicchu';
import EightAffordableColombia from './components/EightAffordableColombia';
import NineClassicArgentinaChile from './components/NineClassicArgentinaChile';
import ElevenPeruBolvia from './components/ElevenPeruBolvia';
import TwelveKaleidoscopeOfPeru from './components/TwelveKaleidoscopeOfPeru';
import ThirteenClassicBrazilArgentinaChile from './components/ThirteenClassicBrazilArgentinaChile';
import Cruises from './components/Cruises';
import ContactUs from './components/ContactUs';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>

        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/10-classic-china' component={TenClassChina} />
            <Route path='/11-china-with-yangtze-river-cruise' component={ElevenChinaYangTzeRiver} />
            <Route path='/14-china-tibet-discovery' component={FourteenChinaTibetDiscovery} />
            <Route path='/15-china-chengdu-yangtze-river-cruise' component={FifteenChinaChengduYangtzeRiverCruise} />
            <Route path='/6-japan-kanto-delights' component={SixJapanKantoDelights} />
            <Route path='/6-japan-hokkaido' component={SixJapanHokkaido} />
            <Route path='/7-japan-kansai-classic' component={SevenJapanKansaiClassic} />
            <Route path='/8-japan-honshu-classic' component={EightJapanHonshuClassic} />
            <Route path='/9-central-thailand-river-kwai' component={NineCentralThailandRiverKwai} />
            <Route path='/10-central-thailand-river-kwai-pattaya' component={TenCentralThailandRiverKwaiPattaya} />
            <Route path='/13-classic-thailand' component={ThirteenClassThailand} />
            <Route path='/16-classic-thailand-phuket' component={SixteenClassicThailandPhuket} />
            <Route path='/essential-vietnam' component={EssentialVietnam} />
            <Route path='/classic-vietnam' component={ClassicVietnam} />
            <Route path='/15-cambodia-vietnam' component={CambodiaVietnam} />
            <Route path='/bangkok-cambodia-vietnam' component={BangkokcambodiaVietnam} />
            <Route path='/19-central-thailand-vietnam' component={NineteenCentralThailandVietnam} />
            <Route path='/6-day-singapore-malaysia-delights' component={SixDaySingaporeMalaysiaDelights} />
            <Route path='/classic-taiwan-island' component={ClassicTaiwanIsland} />
            <Route path='/12-classic-australia' component={TwelveClassicAustralia} />
            <Route path='/15-new-zealand-australia' component={FifteenNewZealandAustralia} />
            <Route path='/4-highlights-of-vancouver' component={FourHighlightsOfVancouver} />
            <Route path='/7-rocky-mountain' component={SevenRockyMountain} />
            <Route path='/5-oregon' component={FiveOregon} />
            <Route path='/8-yellowstone-mt-rushmore-horseshoe-bend-antelope-canyon' component={EightYellowStoneMtRushmoreHorseShowBendAntelopeCanyon} />
            <Route path='/7-east-coast-deluxe' component={SevenEastCoastDeluxe} />
            <Route path='/8-texas-panorama-tour' component={EightTexasPanoramaTour} />
            <Route path='/5-chicago' component={FiveChicago} />
            <Route path='/8-essential-greece' component={EightEssentialGreece} />
            <Route path='/8-affordable-central-europe' component={EightAffordableCentralEurope} />
            <Route path='/10-affordable-germany-switzerland-austria' component={TenAffordableGermanySwitzlandAustria} />
            <Route path='/10-affordable-central-europe-with-berlin' component={TenAffordableCentralEuropeWithBerlin} />
            <Route path='/10-classic-baltics' component={TenClassicBaltics} />
            <Route path='/11-affordable-portugal-spain' component={ElevenAffordablePortugalSpain} />
            <Route path='/12-affordable-albania-montenegro-croatia-slovenia' component={TwelveAffordableAlbaniaMontenegroCroatiaSlovenia} />
            <Route path='/7-peru-machu-picchu' component={SevenPeruMachuPicchu} />
            <Route path='/8-affordable-colombia' component={EightAffordableColombia} />
            <Route path='/9-classic-argentina-chile' component={NineClassicArgentinaChile} />
            <Route path='/11-peru-bolivia' component={ElevenPeruBolvia} />
            <Route path='/12-kaleidoscope-of-peru' component={TwelveKaleidoscopeOfPeru} />
            <Route path='/13-classic-brazil-argentina-chile' component={ThirteenClassicBrazilArgentinaChile} />
            <Route path='/Cruises' component={Cruises} />
            <Route path='/about-us' component={ContactUs} />



      </Layout>
    );
  }
}
