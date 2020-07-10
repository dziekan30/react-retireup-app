import * as React from 'react';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

export default class Sliderr extends React.Component<{}, {}> {

  render() {
    const { min, max, rangeFilter, handleChanged} = this.props

    return (
        <div id='container'>
            <div className='wrap'>
                <div className="sliderwrap">
                    <div className="labeltext">
                      <h2>Year Range</h2>
                    </div>
                    <SliderComponent 
                      id='range' 
                      type='Range' 
                      min={min}  
                      max={max} 
                      value={rangeFilter} 
                      changed={handleChanged} 
                    />
                </div>
            </div>
        </div>
    );
  }
}