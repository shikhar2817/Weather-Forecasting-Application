import React from 'react';
import Search from './SearchComponent';
import Promotion from './PromotionComponent';

export function Main () {
    return (
        <div>
            <Promotion/>
            <Search/>
        </div>
    );
}