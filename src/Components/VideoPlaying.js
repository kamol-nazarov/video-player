import React, { Component, useState, useCallback } from 'react';
// import ReactPlayer from 'react-player';
import Cropper from 'react-easy-crop'


const myVideo = '/sample-mp4-file.mp4';

const [crop, setCrop] = useState({ x: 0, y: 0 })
const [initialCroppedAreaPixels, setInitialCroppedAreaPixels] = useState(
	undefined
)
const [zoom, setZoom] = useState(1)

class Video extends Component {



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
	
	render() {
		return <Cropper
		video={this.state.video}
		crop={this.state.crop}
		zoom={this.state.zoom}
		aspect={this.state.aspect}
		onCropChange={this.onCropChange}
		onCropComplete={this.onCropComplete}
		onZoomChange={this.onZoomChange}
	/>
		
	}
}

export default Video;
