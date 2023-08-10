import React from 'react';
import SecondaryNavigation from '../Navigation/SecondaryNavigation';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <header>
            <SecondaryNavigation></SecondaryNavigation>
            <Navigation></Navigation>
            <Banner></Banner>
        </header>
    );
};

export default Header;