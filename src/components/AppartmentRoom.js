// import { useState } from "react"
import "./AppartmentRoom.css"

function AppartmentRoom({
        children,
        borderLeftStyle = "solid", 
        borderRightStyle = "solid", 
        borderTopStyle = "solid", 
        borderBottomStyle = "solid",
        width = "200px", 
        height = "200px",
        objectIcon, animationDelay, 
        objectPositionTop = "20%", 
        objectPositionLeft = "40%",
        objectWidth = "20%", 
        objectHeight = "auto"
}) {

    return (
        <div className="AppartmentRoom" style={{
            position: "relative",
            borderLeftStyle, borderRightStyle, 
            borderBottomStyle, borderTopStyle,
            width, height, borderWidth: "4px"
        }}>
            {objectIcon && (
                <img style={{
                    position: "absolute",
                    top: objectPositionTop,
                    left: objectPositionLeft,
                    width: objectWidth,
                    height: objectHeight,
                    animationDelay: animationDelay+"ms"
                }} 
                src={objectIcon}
                alt="objet où le chiffre est caché !"
                />
            )}
            {children} 
        </div>
    );
}

export default AppartmentRoom