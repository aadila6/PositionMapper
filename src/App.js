import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import level1 from './ParkingStructures/UCSBF1.png';
import ImageMarker, { Marker } from 'react-image-marker';
function App() {
  // const [markers, setMarkers] = [{top: 10,left: 50}];
  // const writeJsonFile = require('write-json-file');
  const [markers, setMarkers] = useState([])
  console.log(markers)
  const handleSaveToPC = jsonData => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'output.json';
    link.href = url;
    link.click();
  }
  // mapSensors = sensors => {
  //   return sensors.map((sensor) => {
  //     console.log('ITEM: ', sensor);
  //     return {
  //       space_id: sensor.id,
  //       client_id: sensor.client_id,
  //       val: sensor.val,
  //     };
  //   });
  // }

  const handleLinkClick = (event) => {
    event.preventDefault();
    let res = []
    for(var i = 0; i < markers.length; i++){
        console.log(res)
        res.push({
          space_id:i,
          top:markers[i].top,
          left:markers[i].left
        })
    }
    handleSaveToPC(res)
    alert('Save Clicked!');
}
  return (
    <div className="App">
      {/* <img src={level1} alt="logo" /> */}
      <ImageMarker
        src={level1}
        markers={markers}
        onAddMarker={(marker) => setMarkers([...markers, marker])}
        // draggable={this.state.draggable}
        // onDragend={this.updateMarker(marker)}
      />
      <button onClick={handleLinkClick}>SAVE</button>
    </div>
    
  );
  
}

export default App;
