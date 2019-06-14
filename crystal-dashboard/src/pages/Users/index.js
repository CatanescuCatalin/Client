import React, { Component } from "react";
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchDataFromServer = () => {
    const data = [];

    axios.get("http://localhost:3001/users").then(response => {
      response.data.forEach(user => {
        data.push(user);
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
                <h4>Users table</h4>
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
                    width="50px"
                    dataSort
                  >
                    ID
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="userName"
                    width="15%"
                    filter={{ type: "TextFilter" }}
                    dataSort
                  >
                    User Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField="password"
                    width="15%"
                    filter={{ type: "TextFilter" }}
                    dataSort
                  >
                    Password
                  </TableHeaderColumn>
                  <TableHeaderColumn width="20%" />
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
