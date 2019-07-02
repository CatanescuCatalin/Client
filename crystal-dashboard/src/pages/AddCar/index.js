import React, { Component } from "react";
import axios from 'axios';
import FormData from 'form-data'

export default class AddCar extends Component {

    state = {
        Volume: "",
        Color: "",
        Seats:"",
        FuelType:"",
        Model:"",
        Transmision:"",
        Maker:"",
        images: [],
        Ncoordonate: null,
        Ecoordonate: null
    }

  handleSubmit = () => {
    console.log(this.state);
      
      const dataForm = new FormData();
      let car = {
        Maker:this.state.Maker,
        Model:this.state.Model,
        FuelType:this.state.FuelType,
        Volume:parseInt(this.state.Volume, 10),
        Seats:parseInt(this.state.Seats, 10),
        Transmision:this.state.Transmision,
        Color:this.state.Color,
        Ncoordonate: this.state.Ncoordonate,
        Ecoordonate: this.state.Ecoordonate
      }

      dataForm.append("car", JSON.stringify(car))

      this.state.images.forEach((file, i) => {
        dataForm.append(i, file)
      })

      console.log(dataForm)

      axios({
        method: 'post', 
        url: 'http://localhost:3001/api/create/car',
        data: dataForm,
        config: {headers: {'Content-Type': 'multipart/form-data'}}    
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  setMaker = (event) => {
    this.setState({Maker: event.target.value})
  }

  setModel= (event) => {
    this.setState({Model: event.target.value})
  }

  setFuelType = (event) => {
    this.setState({FuelType: event.target.value})
  }

  setVolume = (event) => {
    this.setState({Volume: event.target.value})
  }

  setSeats = (event) => {
    this.setState({Seats: event.target.value})
  }

  setTransmision = (event) => {
    this.setState({Transmision: event.target.value})
  }

  setColor = (event) => {
    this.setState({Color: event.target.value})
  }

  setN = (event) => {
    this.setState({Ncoordonate: event.target.value})
  }

  setE= (event) => {
    this.setState({Ecoordonate: event.target.value})
  }

  setImages = (event) => {
    const files = Array.from(event.target.files)
    var imageData = [];
    
    files.forEach((file, i) => {
        imageData.push(file);
        console.log(file);
    })
    
    this.setState({images: imageData});

    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4>Validation</h4>
            </div>
            <form className="form-horizontal" >
              <div className="content">
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Maker
                  </label>
                  <div className="col-sm-9">
                    <input 
                      type="text"
                      name="Maker"
                      onChange={this.setMaker}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">Model</label>
                  <div className="col-sm-9">
                    <input type="text" name="Model" onChange={this.setModel} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">FuelType</label>
                  <div className="col-sm-9">
                    <input type="text" name="FuelType" onChange={this.setFuelType} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">Volume</label>
                  <div className="col-sm-9">
                    <input type="text" name="Volume" onChange={this.setVolume}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">Seats</label>
                  <div className="col-sm-9">
                    <input type="text" name="Seats" onChange={this.setSeats}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">Transmision</label>
                  <div className="col-sm-2">
                    <input type="text" name="Transmision"  onChange={this.setTransmision}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">Color</label>
                  <div className="col-sm-2">
                    <input type="text" name="Color" onChange={this.setColor} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">Images</label>
                  <div className="col-sm-2">
                    <input type="file" name="Color" multiple onChange={this.setImages} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">N coordonate</label>
                  <div className="col-sm-2">
                    <input type="text" name="Ncoordonate"  onChange={this.setN} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2 control-label">E coordonate</label>
                  <div className="col-sm-2">
                    <input type="text" name="Ecoordonate"  onChange={this.setE} />
                  </div>
                </div>

              </div>
              <div className="footer text-center">
                <button  className="btn btn-info btn-fill" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
