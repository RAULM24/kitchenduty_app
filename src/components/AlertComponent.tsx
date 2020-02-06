import React from 'react';
import '../assets/css/alert.css';

interface AlertProps {
    continue: () => any
    show: boolean
    title: string
    subtitle: string
    showCancel?: boolean
}

interface AlertState {
    show: boolean
    isDisconnected: boolean
}

class AlertComponent extends React.Component<AlertProps, AlertState> {
    constructor(props: AlertProps) {
        super(props)
        this.state = {
            show: true,
            isDisconnected: false
        }
    }

    componentDidMount() {
        this.handleConnectionChange();
        window.addEventListener('online', this.handleConnectionChange);
        window.addEventListener('offline', this.handleConnectionChange);
      }
  
      componentWillUnmount() {
        window.removeEventListener('online', this.handleConnectionChange);
        window.removeEventListener('offline', this.handleConnectionChange);
      }

    handleAgree = () => {
        this.setState({ show: false })
        if (this.props.continue)
            this.props.continue()
    }

    handleDisagree = () => {
        this.setState({ show: false })
    }

    handleConnectionChange = () => {
        const condition = navigator.onLine ? 'online' : 'offline';
        if (condition === 'online') {
          const webPing = setInterval(
            () => {
              fetch('//google.com', {
                mode: 'no-cors',
                })
              .then(() => {
                this.setState({ isDisconnected: false }, () => {
                  return clearInterval(webPing)
                });
              }).catch(() => this.setState({ isDisconnected: true }) )
            }, 2000);
          return;
        }
        return this.setState({ isDisconnected: true });
      }

    render() {
        if (!this.state.show)
            return null
        return (
            <div className="backdrop" >
                <div className="modal">
                    <p className="title">{this.props.title}</p>
                    <p className="subtitle">{this.props.subtitle}</p>
                    <div className="footer">
                        {
                            this.props.showCancel &&
                            <button type="submit" className="kd-button-modal btn-cancel" onClick={this.handleDisagree}>
                                {this.state.isDisconnected? 'desconectado': 'conectado'}
                            </button>
                        }
                        <button type="submit" className="kd-button-modal" onClick={this.handleAgree}>
                            {this.props.showCancel ? 'Yes, send them' : 'Close'}
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default AlertComponent;