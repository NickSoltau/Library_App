import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./UI/Highlight";

const Highlights = () =>{
    return(
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                         icon={<FontAwesomeIcon icon="bolt" />}
                         title= "Easy and Quick" 
                         para= "Get access to the book you purchased instantly!" 
                         />
                        <Highlight 
                         icon={<FontAwesomeIcon icon="book-open" />}
                         title= "Over 10k books" 
                         para= "Library has books in all your favorite genres" 
                         />
                        <Highlight 
                         icon={<FontAwesomeIcon icon="tags" />}
                         title= "Affordable" 
                         para= "Get popular titles for as little as $10" 
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights