import React, { Component } from 'react';
import logo from './logo.svg';
import { Cell, Column, Table } from "@blueprintjs/table";
import './App.scss';


class App extends Component {
  render() {
    // using JSX:
    // const mySpinner = <Spinner intent={Intent.PRIMARY} />;
    // use React.createElement if you're not using JSX.
    // const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "button content");
    const cellRenderer = (rowIndex: number) => {
      return <Cell>{`Fit Machine`}</Cell>
    };
    return (
      <div className="App">
        <header className="App-header">
          <Table numRows={1}>
            <Column name="EquipmentName" cellRenderer={cellRenderer}/>
          </Table>
        </header>
      </div>
    );
  }
}

export default App;
