import {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm } from 'react-form-validator-core';
import Modal from 'react-modal';

//Components
import Layout from '../components/layout';
import TextValid from '../components/TextField';
import TextArea from '../components/TextArea';

const customStyles = {
  content : {
    'top': '50%',
    'left': '50%',
    'right': 'auto',
    'bottom': 'auto',
    'marginRight': '-50%',
    'transform': 'translate(-50%, -50%)',
    'width': '48%',
  }
};
Modal.setAppElement('#__next')
export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input_1:'',
      input_2:'',
      input_3:'',
      input_4:'',
      modalIsOpen: false
    }
  }

  textInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () => console.log(this.state))
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleFormSubmit = ( event ) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: `https://bigbuildingdev.tk/wp-json/gf/v2/forms/5/submissions`,
      headers: { 
        'content-type': 'application/json',
    },
      data: this.state
    })
    .then(result => {
      this.setState({
        mailSent: result.data.confirmation_message}, () => console.log(this.state.mailSent))
    })
    .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <Layout>
      <h1>This is Home</h1>
      <Button variant="contained" color="primary" onClick={this.openModal}>Click to open modal</Button>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <h2 className="title">GET CUSTOM PRICE</h2>
        {!this.state.mailSent ? <div className="form">
        <ValidatorForm
            ref="form"
            onSubmit={this.handleFormSubmit}
        >
            <div className="col-1">
            <TextValid
                onChange={this.textInput}
                id="input_1"
                name="Name"
                value={this.state.input_1}
                validators={['required']}
                errorMessages={['this field is required']}
            />
            </div>

            <div>
            <TextValid
                onChange={this.textInput}
                id="input_2"
                name="Email"
                value={this.state.input_2}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
            />
            </div>
            <div>
            <TextValid
                onChange={this.textInput}
                id="input_3"
                name="Subject"
                value={this.state.input_3}
                validators={['required']}
                errorMessages={['this field is required']}
            /></div>
            <div><label>Message</label>
            <TextArea
                className="textarea"
                onChange={this.textInput}
                name="Mssage"
                id="input_4"
                value={this.state.input_4}
                validators={['required']}
                errorMessages={['this field is required']}
            /></div>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </ValidatorForm> 
        </div>: ""}
{this.state.mailSent ?
        <div dangerouslySetInnerHTML={{ __html: this.state.mailSent }}/> :""}
        </Modal>
        <style jsx>{`
        div.form {
          text-align: center;
        }
        h2 {
          text-align: center;
          line-height: 1.2em;
          font-family: "Neue Einstellung Bold" !important;
          color: #fff;
          font-weight: bold;
          font-size: 31px;
        }
        `}</style>
     </Layout>
    )
  }
}

