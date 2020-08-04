import React, { useState, useCallback, useEffect } from 'react'
import './App.css';
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/lab/Slider'
// import Video from './Components/VideoPlaying';
// import NavBar from './Components/NavBar';

function App() {

	const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [initialCroppedAreaPixels, setInitialCroppedAreaPixels] = useState(
    undefined
  )
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const croppedAreaPixels = JSON.parse(
      window.localStorage.getItem('croppedAreaPixels')
    )
    setInitialCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    window.localStorage.setItem(
      'croppedAreaPixels',
      JSON.stringify(croppedAreaPixels)
    )
	}, [])
	
	return (

		<Cropper
          video="/sample-mp4-file.mp4"
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          initialCroppedAreaPixels={initialCroppedAreaPixels}
    />
		<Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(zoom)}
          classes={{ container: 'slider' }}
        />


	);
}

export default App;
