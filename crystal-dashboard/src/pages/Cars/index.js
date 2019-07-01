import React, { Component } from 'react'

import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default class Cars extends Component {

    constructor() {
        super();
        this.state = {
          data: [],
          Model: null
        };
      }
    
      fetchDataFromServer = () => {
        const data = [];
        axios.get("http://localhost:3001/api/cars-all").then(response => {
          response.data.forEach(car => {
            data.push(car);
          });
          this.setState({ data: data})
        }, error => {
         
          console.error(error)
        });
    
        return data;
      };
    
      componentDidMount(){
        var data = this.fetchDataFromServer();
        this.setState({ data: data})
      }

      setModel= (event) => {
        this.setState({Model: event.target.value})
      }

      handleSubmit = () => {
        
    
        axios.get("http://localhost:3001/api/free-car/" + this.state.Model)
        .then( (response) => {

          console.log('aici', response);
          this.setState({Model: ""})
          
        })
        .catch(function (error) {
          console.log(error);
        });
        
      };

      render() {
        const { data } = this.state;
        const options = {
          sizePerPage: 20,
          prePage: "Previous",
          nextPage: "Next",
          firstPage: "First",
          lastPage: "Last",
          hideSizePerPage: true
        };
    
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="header">
                    <h4>Cars table</h4>
                  </div>
                  <div className="content">
                    <BootstrapTable
                      data={data}
                      bordered={false}
                      striped
                      pagination={true}
                      options={options}
                    >
                      <TableHeaderColumn
                        dataField="_id"
                        isKey
                        width="15%"
                        dataSort
                      >
                        ID
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="Maker"
                        width="10%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Maker
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField="Model"
                        width="10%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Model
                      </TableHeaderColumn>

                      <TableHeaderColumn
                        dataField="FuelType"
                        width="5%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        FuelType
                      </TableHeaderColumn>

                      <TableHeaderColumn
                        dataField="Volume"
                        width="5%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Volume
                      </TableHeaderColumn>

                      <TableHeaderColumn
                        dataField="Transmision"
                        width="5%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Transmision
                      </TableHeaderColumn>

                      <TableHeaderColumn
                        dataField="Color"
                        width="5%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Color
                      </TableHeaderColumn>

                      <TableHeaderColumn
                        dataField="Seats"
                        width="3%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Seats
                      </TableHeaderColumn>   

                      <TableHeaderColumn
                        dataField="ReservedUser"
                        width="10%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Reserved User
                      </TableHeaderColumn>    

                      <TableHeaderColumn
                        dataField="Reserved"
                        width="5%"
                        filter={{ type: "TextFilter" }}
                        dataSort
                      >
                        Reserved
                      </TableHeaderColumn>                      
                    </BootstrapTable>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Free car</h2>
              <div className="form-group">
                  <label className="col-sm-2 control-label">ID</label>
                  <div className="col-sm-9">
                    <input ld type="text" name="Model" onChange={this.setModel} />
                  </div>
                  <div className="footer text-center">
                <button  className="btn btn-info btn-fill" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
                </div>
                
            </div>
            <h3>  </h3>
          </div>
        );
      }
}
