import {DirectoryContainer } from './directory.styles';

import DirectoryItem from '../directory-item/directory-item.component';
// import Second from '../second/second.component';
import Third from '../third/third.component';
import  Fourth from '../fourth/fourth.component';

const Directory = () => {
    return (
        <DirectoryContainer>
        <DirectoryItem/>
        {/* <Second/> */}
        <Third/>
        <Fourth/>
       </DirectoryContainer>
    ); 
};

export default Directory;