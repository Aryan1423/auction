import React from "react";
import { useParams } from "react-router-dom";
import { AuctionList } from "./AuctionList";
import "./comments.css";
import "./AuctionDetails.scss";

function AuctionDisplay() {
    const { id } = useParams();
    const auction = AuctionList[id];
    return (
        <div>
            <div className="grid product">
                <div className="column-xs-12 column-md-7">
                    <div className="product-gallery">
                        <div className="product-image">
                            <img
                                className="active"
                                src={auction.image}
                                alt=""
                            />
                        </div>
                        <ul className="image-list">
                            <li className="image-item">
                                <img src="" alt="" />
                            </li>
                            <li className="image-item">
                                <img src="" alt="" />
                            </li>
                            <li className="image-item">
                                <img src="" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column-xs-12 column-md-5">
                    <h1>{auction.name}</h1>
                    <h2>$19.99</h2>
                    <div className="description">
                        <p>{auction.detail}</p>
                    </div>
                    <button className="add-to-cart">Place Your Amount</button>

                    <div class="container">
                        <h4>
                            <b>Comment Section</b>
                        </h4>
                        <div class="comments-section">
                            <div class="row">
                                <div class="comment-post">
                                    <div class="col-xs-9">
                                        <p>
                                            <span class="comment-author">
                                                Test User
                                            </span>
                                            <span class="comment-time">
                                                30 minutes ago
                                            </span>
                                        </p>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Donec
                                            iaculis tristique dui nec suscipit.
                                            Maecenas eu maximus tellus, vel
                                            placerat massa. Nullam neque magna,
                                            hendrerit ac lacinia in, consequat
                                            nec ipsum. Vivamus tincidunt
                                            fringilla diam et sagittis.
                                            Suspendisse tincidunt hendrerit
                                            nisi, sit amet aliquet enim ornare
                                            at.
                                        </p>
                                    </div>
                                </div>
                                <div class="comment-post-reply">
                                    <div class="col-xs-9">
                                        <p>
                                            <span class="comment-author">
                                                Test User 2
                                            </span>
                                            <span class="comment-time">
                                                10 minutes ago
                                            </span>
                                        </p>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Donec
                                            iaculis tristique dui nec suscipit.
                                            Maecenas eu maximus tellus, vel
                                            placerat massa. Nullam neque magna,
                                            hendrerit ac lacinia in, consequat
                                            nec ipsum. Vivamus tincidunt
                                            fringilla diam et sagittis.
                                            Suspendisse tincidunt hendrerit
                                            nisi, sit amet aliquet enim ornare
                                            at.
                                        </p>
                                    </div>
                                </div>
                                <div class="comment-post">
                                    <div class="col-xs-9">
                                        <p>
                                            <span class="comment-author">
                                                Test User
                                            </span>
                                            <span class="comment-time">
                                                1 day ago
                                            </span>
                                        </p>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Donec
                                            iaculis tristique dui nec suscipit.
                                            Maecenas eu maximus tellus, vel
                                            placerat massa. Nullam neque magna,
                                            hendrerit ac lacinia in, consequat
                                            nec ipsum. Vivamus tincidunt
                                            fringilla diam et sagittis.
                                            Suspendisse tincidunt hendrerit
                                            nisi, sit amet aliquet enim ornare
                                            at.
                                        </p>
                                    </div>
                                </div>
                                <div class="comment-add">
                                    <div class="col-xs-12">
                                        <textarea></textarea>
                                        <button
                                            class="btn btn-default pull-right"
                                            href="#"
                                        >
                                            Add Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuctionDisplay;
