import React from 'react';
import BTC from '../../images/BTC.png';
import USDT_TRC20 from '../../images/USDT_TRC20.png';
import USDT_ERC20 from '../../images/USDT_ERC20.png';

export default function Payment() {
    return (
        <div>
            <img src={BTC} alt="a" />
            <img src={USDT_TRC20} alt="b" />
            <img src="USDT_ERC20" alt="c" />
        </div>
    );
}
