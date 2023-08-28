import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import RadarIcon from '@mui/icons-material/Radar';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

import { Link } from 'react-router-dom';

import botNav1 from '../../assets/botNav1.svg'
import botNav2 from '../../assets/botNav2.svg'
import botNav3 from '../../assets/botNav3.png'

export default function BottomNav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <BottomNavigation className='bg-[#04103A] h-20 shadow-xl' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center' }} value={value} onChange={handleChange}>
            <Link to='/'>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<img src={botNav1} alt="bot1" />}
                />
            </Link>
            <Link to='page3'>
                <BottomNavigationAction
                    label="Radar"
                    value="radar"
                    icon={<img src={botNav3} alt="botNav3" />}
                />
            </Link>
            <Link to='/page2'>
                <BottomNavigationAction
                    label="Sail"
                    value="sail"
                    icon={<img src={botNav2} alt="bot2" />}
                />
            </Link>
        </BottomNavigation>
    );
}