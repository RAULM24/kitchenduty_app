import React from 'react';
import PropTypes from 'prop-types';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

interface ModalProps {
    onClose: () => any
  show: boolean
  subtitle: string

}

class ModalComponent extends React.Component<ModalProps, {}> {
  constructor(props: ModalProps){
    super(props)
    this.state ={
      morning : "",
      afternoon :"",
    }
  }
  handleUpdateMorning = (event: any) => {
    this.props.morningEmail = event.target.value;
  }
  handleUpdateAfternoon = (event: any) => {
    this.props.afternoonEmail = event.target.value;
  }


  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" >
        <div className="modal">
          <p className="title">Input the team's e-mails</p>
          <p className="subtitle">{this.props.subtitle}</p>
          <label>Morning:</label>
          <Textbox
            onChange={(morning: any, e: any) => {
              this.setState({ morning : escape(morning.replace(/ /g, "")) });
            }} 
            onBlur={this.props.onMorningChange} 
            validationOption={{}}
          />          
          <div className="emailIndicator1">
            @sciodev.com
          </div>
          <label>Afternoon:</label>
          <Textbox
            id={'Name'} 
            name="Name" 
            type="text" 
            onChange={(afternoon, e) => {
              this.setState({ afternoon : escape(afternoon.replace(/ /g, "")) });
            }} 
            onBlur={this.props.onAfternoonChange} 
            validationOption={{}}
          />
          <div className="emailIndicator2">
            @sciodev.com
          </div>
          <div className="footer">
            <button className="kd-button-modal btn-cancel" onClick={this.props.onCancel}>
              CANCEL
            </button>
            <button type="submit" className="kd-button-modal" onClick={() => {
              if(this.state.morning != "" && this.state.afternoon != "" )
              this.props.onClose()
            }}>
              ASSIGN
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  
};

export default ModalComponent;