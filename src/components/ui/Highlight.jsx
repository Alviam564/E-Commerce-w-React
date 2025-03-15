import React from "react"

const Highlight = ( { icon, title, para }) => {
    return (
        <div className="highlight__wrapper">
            <div className="Highlights">
                <div className="highlights__img">
                    {icon}
                </div>
                <h3 className="highlight__subtitle">{title}</h3>
                <p className="highlight__para">
                    {para}
                </p>
            </div>
      </div>
    )
}
  
export default Highlight