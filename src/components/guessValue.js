import React from "react"

const guessValue = (value, selection) => {
    if(value==selection){
        return 1
    }
    else{return 0}

}

export default guessValue;