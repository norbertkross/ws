import React from 'react'
import { Link } from 'react-router-dom';
import { Logo, Logo2, Logos } from '../home-sections/homeScreenStyled';
import { CategoryBody,CategoryMainBody, CatergoryGreyDescription} from './CategoryCodeStyle'
import { Header, HeaderBlackContainer, HeaderItem, HeaderItems } from './StyleItemsGridHome';

function CategoryCode() {


    return (
        <CategoryMainBody>
            <ItemsHeader/>

            <CategoryBody>
                404
            </CategoryBody>
            <CatergoryGreyDescription>The resource you were looking for was not found </CatergoryGreyDescription>

        </CategoryMainBody>
    );
}



export const ItemsHeader = function ItemsHeader() {
    return (
        <Header>                
        <HeaderBlackContainer/>

        <HeaderItems>
            <div style={{marginRight:"50px"}}>
            <Logos>
            <Logo></Logo>
            <Logo2>WidgetSource</Logo2>
            </Logos>
            </div> 
            <div style={{display:"flex",justifyContent:"end",marginTop:"10px"}}>
            <Link to="/upload" style={{textDecoration:"none"}}>
            <HeaderItem>Upload</HeaderItem>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
            <HeaderItem lastItem={true}>Home</HeaderItem>
            </Link>
            </div>
        </HeaderItems>
    </Header>
    )
}


export default CategoryCode

