import {DirectoryContainer } from './directory.styles';

import DirectoryItem from '../directory-item/directory-item.component';
import Second from '../second/second.component';
import Third from '../third/third.component';
import  Fourth from '../fourth/fourth.component';
import  Fifth from '../fifth/fifth.component';
import  Sixth from '../sixth/sixth.component';

const Directory = () => {
    return (
        <DirectoryContainer>
        <DirectoryItem/>
        <Second/>
        <Fourth/>
        <Third/>
        <Fifth/>
        <Sixth/>
       </DirectoryContainer>
    ); 
};

export default Directory;