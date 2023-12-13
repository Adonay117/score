import React from "react";
import './Card.css';
import data from './data.json'

//by adonay aragon
export default function Card(){
    return(
        <div className="container">
            <div className="card">
                
                <div className="yourResult">
                    <div className="titleResult">
                        <h4>Your Result</h4>
                    </div>
                    <div className="circle">
                        <div className="point">
                            <h1>76</h1>
                        </div>
                        <div className="orPoint">
                            <p>of 100</p>
                        </div>
                    </div>
                    <div className="note">
                        <h3 className="noteG">Great</h3>
                    </div>
                    <div className="descriptionNote">
                        <p className="desNote">You scored higher than 65% of <br/>
                        the people who have taken <br/>
                        these tests.
                        </p>
                    </div>

                </div>


                <div className="summaryResult">
                    <div className="titleSumary">
                        <h4>Summary</h4>
                    </div>
                    <div className="categoryTest">
                        {data.map((item, index) => (
                            <div key={index} className={item.category}>
                                <div className="nameIconCat">
                                    <img src={require(`${item.icon}`)} alt={item.icon}/> 
                                    <div className={`catTitle-${item.category}`}>{item.category}
                                    </div> 
                                </div>
                                    <div className="pointSummaty">
                                        <p> {`${item.score} `}
                                        </p>
                                        <p className="of100"> / 100</p>
                                    </div>
                            </div>
                            ))}



                    </div>
                    <div className="btnContinue">
                        <button className="btn-c">Continue</button>
                    </div>
                 </div>


            </div>


        </div>


    );
}