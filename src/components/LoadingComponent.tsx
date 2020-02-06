import React from 'react'
import '../assets/css/loading.css'
import loadingGif from '../assets/images/loading.gif'

interface LoadingProps {
    show: boolean
}

class LoadingComponent extends React.Component<LoadingProps, {}> {
    render(){
        if(!this.props.show)
            return false
        return (
            <div className="blackloading">
                <img src={loadingGif} alt="" width="80"/>
                <p>Wait a moment...</p>
            </div>
        )
    }
}

export default LoadingComponent;