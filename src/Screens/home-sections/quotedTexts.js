import React from "react"
import "./quotedTexts.css"
import styled from "styled-components"
// import brook from "../../assets/brooke.jpg"
import brook from "../../assets/widget-source-cover-pic.png"
// import norbert from "../../assets/norbert.jpg"


function QuotedTexts(){
    return (
        <div>
                <QuoteBody>
                <div className="darkBackground">
                    <div className="quote-frame-top">
   
   
                        <div className="quote">
                        <div className="quotation-symbol"></div>

                            WidgetSource helps you get access to free widgets and components for your flutter and react projects.
                            No more time wasting on thinking 'how do i create this thing' 
                            when you can find what you want here. Waste less time on worrying, start building already.  

                             <div className="who-said-so">
                                {/* <Picture/>     */}
                                <SizedBox/>
                                <div className="name">Aberor Norbert Eugene</div>   
                                <div style={{
                                    height:10,
                                }}></div> 
                                <div className="position">Software Developer</div>    
                             </div>   

                            </div>

                    </div>
                </div>
                </QuoteBody>
        </div>
    );
}

 const QuoteBody = styled.div`
    width:100vw;
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    grid-auto-columns: minmax(60vh,auto);
    background-color: teal;
    background-image: url('${brook}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;


 const SizedBox = styled.div`
 height: 120px;`
 ;
    
//  const Picture = styled.div`
//     margin: 50px 10px 10px 30px;
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background-image: url('${norbert}');
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     background-color: white; 
//  `;
 

export default QuotedTexts