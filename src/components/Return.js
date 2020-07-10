import React from "react"

function Return(props) {
    return (
        <div className="row">
          <div className="left-column">
            <div>
            <h3>{props.year}</h3>
            </div>
          </div>

          <div className="right-column">
            <h3 style={{color: props.totalReturn > 0  || "#ff0000"}}> {props.totalReturn}</h3>
          </div>
            <hr/>
        </div>
    )
}

export default Return;