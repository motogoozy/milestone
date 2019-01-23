import React, { Component } from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import './FileUpload.scss'

class FileUpload extends Component {
constructor () {
   super();
   this.state = {
      file: null
   };
}

submitFile = (event) => {
   event.preventDefault();
   const formData = new FormData();
   formData.append('file', this.state.file[0]);
   axios.post(`/upload`, formData, {
      headers: {
      'Content-Type': 'multipart/form-data'
      }
   }).then(response => {
      const body = {...this.props.state};
      body.img = response.data.Location;
      axios.post('/api/milestones/add', body).then(
         this.props.history.push('/dashboard')
      )
   }).catch(error => {
      console.log(error)
   });
}

handleFileUpload = (event) => {
   this.setState({file: event.target.files});
}

render () {
   return (
      <form onSubmit={this.submitFile} className='form'>
      <input label='upload file' type='file' onChange={this.handleFileUpload} className='file-input' />
      <div className='add-container'>
         <button onClick={ (e) => this.props.history.push('/dashboard')} className='input-box-button' >Back</button>
         <button type='submit' className='input-box-button'>Send</button>
      </div>
      </form>
   );
}
}

export default withRouter(FileUpload);