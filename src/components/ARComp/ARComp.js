import React from 'react'
import classes from './ARComp.module.scss'


const ARComp = () => {

    return (
        <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        >
            <a-text
                value="This content will always face you."
                look-at="[gps-camera]"
                scale="120 120 120"
                gps-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>;"
            ></a-text>
            <a-camera gps-camera rotation-reader> </a-camera>
        </a-scene>
    )
}

export default ARComp