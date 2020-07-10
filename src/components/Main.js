import React, {Component} from 'react';
import Return from './Return';
import totalReturnData from './totalReturnData';
import Sliderr from './Sliderr';


export default class Main extends Component { 
  state = {
    min: 1926,
    max: 2019,
    rangeFilter: [1926, 2019]
  }
   handleChanged = (event) => {
    this.setState({
      rangeFilter: event.value
    })
  }

  render(){
    const yearFilter = (data) => {
      return (data.year >= this.state.rangeFilter[0] && data.year <= this.state.rangeFilter[1]) 
    }
    const dataComponents = totalReturnData.filter(yearFilter).reverse().map((returnData, index) => <Return 
      year={returnData.year} totalReturn={returnData.totalReturn} key={index}
    />)
    return (
      <div className="row">
        <div className="center-text">
          <h1>S&P 500 Total Returns by Year</h1>
          <hr/>
        </div>

        <div >
          <Sliderr 
            min={this.state.min} 
            max={this.state.max} 
            rangeFilter={this.state.rangeFilter} 
            handleChanged={this.handleChanged}
          />
        </div>

        <div className="row center-text">
          <br/>
          <h2 className="left-column">Start:{this.state.rangeFilter[0]}</h2>
          <h2 className="right-column">Ends:{this.state.rangeFilter[1]}</h2>
        </div>

        <div>
          <div className="left-column">
            <h2>Year</h2> 
          </div>

          <div className="right-column">
            <h2>TotalReturn</h2>
          </div>
        </div>

          <hr/>
        <div>
          {dataComponents}
        </div>

      </div>

    )
  }

}

