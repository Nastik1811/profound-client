import React from 'react'

const Discussion = () => {
    return(
        <section className="discussion-section">
            <header className="section-header">
                <h3 className="component-title">Обсудить</h3>
            </header>
            <div className="discussion">
                <div>
                        <input placeholder="Enter comment"/>
                        <button>Leave a comment</button>
                </div>
                <div className="comment"> {/*Use material cards*/}
                    <span className="">Author name</span>
                    <p>Comment text</p>
                </div> 
                <div className="comment"> 
                    <span>Author name</span>
                    <p>Comment text</p>
                </div>  
            </div>
        </section>
    )
}

export default Discussion