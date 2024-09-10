import React from "react";
import AuctionItem from "./AuctionItem";
import { AuctionList } from "./AuctionList";
import "./auction.css";
 
const Auction = () =>
    <div className="projects">
    <h1 className="project_heading" style={{'color':'black'}}>Live Auction</h1>
    <div className="projectList">
    {AuctionList.map((auction, idx) => {
        return (
        <AuctionItem id={idx} name={auction.name} image={auction.image} />
        );
    })}
    </div>
    </div>
    ;

export default Auction;
