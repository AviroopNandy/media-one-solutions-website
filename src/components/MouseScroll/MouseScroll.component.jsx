import React from "react";

import "./MouseScroll.style.css";

const MouseScroll = () => {
    return (
        <>
            <section id="mouse-scroll" className="mouse-scroll">
                <div className="mouse">
                    <div className="wheel"></div>
                    <div className="wheel"></div>
                    <div className="wheel"></div>
                </div>
                {/* <div>
                    <span className="mouse-scroll-arrows one"></span>
    		    	<span className="mouse-scroll-arrows two"></span>
	    		    <span className="mouse-scroll-arrows three"></span>
                </div> */}
            </section>
        </>
    )
}

export default MouseScroll;