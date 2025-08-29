import React from 'react';
import Categories from '../../Products/Categories/Categories';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Client from '../ClientSay/Client';
import Fetcher from '../ExtraFetcher/Fetcher';

import CallToAction from './CallToAction/CallToAction';
import Deal from '../Deal/Deal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Deal/>
            <Fetcher></Fetcher>
            <Categories></Categories>
            <Advertise></Advertise>
          
            <Client></Client>
            |
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;