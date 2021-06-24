import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
// import img from "../../assets/brooke.jpg"
import github from "../../assets/GitHub_96px.png"
import youtube from "../../assets/YouTube 2_96px.png"
import instagram from "../../assets/Instagram_96px.png"
import linkedIn from "../../assets/LinkedIn_96px.png"
import "./footer.css"


function Footer(props){
    return(
        <div className="footer">
                <div className="footer-logo"/>
                <Link to="/upload" style={{textDecoration:"none"}}>
                <div className="footer-item">Upload</div>
                </Link>
                <Link to="/" style={{textDecoration:"none"}} onClick={props.toAbout}>
                <div className="footer-item">About</div>
                </Link>
                <Link to="/" style={{textDecoration:"none"}}>
                <div className="footer-item">Contact</div>
                </Link>
                

                <div className="footer-item">
                    <div className="footer-links">

                        <a href="https://www.youtube.com/channel/UCPUkuP2vx9jxTnMvdV-cgrA">
                        <MediaItem img={youtube} onClick={(e)=>{}}></MediaItem>
                        </a>
                        {/* https://mobile.twitter.com/kross36866255 */}


                        <a href="https://www.github.com/norbertkross">
                        <MediaItem img={github}></MediaItem>
                        </a>

                        <a href="https://www.linkedin.com/in/norbert-aberor-a75996162">
                        <MediaItem img={linkedIn}></MediaItem>
                        </a>
                        
                        <a href="https://www.instagram.com/norbertaberor">
                        <MediaItem img={instagram}></MediaItem>
                        </a>


                    </div>
                </div>
        </div>
    );
}

const MediaItem = styled.div`
    height: 50px;
    width: 30px;
    /* background-color: whitesmoke; */
    border-radius: 50%;
    padding: 0px 10px ;
    margin: 0px 2px ;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transition-duration: 300ms;

    :hover{
    background-color: #d1d1d3;
    transition-duration: 300ms;
}
`;

export default Footer
