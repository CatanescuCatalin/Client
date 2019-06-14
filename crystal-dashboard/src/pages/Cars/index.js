import React, { Component } from 'react'

import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default class Cars extends Component {

    constructor() {
        super();
        this.state = {
          data: []
        };
      }
    
      fetchDataFromServer = () => {
        const data = [];
    
        axios.get("http://localhost:3001/api/cars").then(response => {
          response.data.forEach(car => {
            data.push(car);
          });
          this.setState({ data: data})
        });
    
        return data;
      };
    
      componentDidMount(){
        var data = this.fetchDataFromServer();
        this.setState({ data: data})
      }


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
                        width="10%"
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
                        width="15%"
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
                    </BootstrapTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
