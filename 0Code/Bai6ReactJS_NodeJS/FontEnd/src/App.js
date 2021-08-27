import React, { Component } from 'react';
import './App.css';
import axios from "axios";
// nhận về
const getDataFromNodeJS  = () => 
{
  return (
    axios.get("/ReactToNote")
    .then((res) => res.data)
  )
}
// truyền đi
const postDataToNodeJS  = (dataTruyen1,dataTruyen2,dataTruyen3) => 
    (axios.post("/NoteToReact?ten=Tho&ten=22",{dataTruyen1,dataTruyen2,dataTruyen3}))
    .then((res)=>res.data)

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataNhan : null,
      dataTruyen1:"nguyen van tho",
      dataTruyen2:"101180204",
      dataTruyen3:"18CDT1"
    }
  }
  
  componentWillMount() {
    if(this.state.dataNhan === null)
    {
      getDataFromNodeJS().then((res)=>{
        console.log(res);
        
        this.setState({
          dataNhan:res
        });
      })
    }
  }

  BTNSend  = () => 
  {
    console.log("click");
     postDataToNodeJS(this.state.dataTruyen1,this.state.dataTruyen2,this.state.dataTruyen3)
    .then((res)=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        <h3> {this.state.dataNhan}</h3>
        <button  onClick= {()=>{this.BTNSend()}} >Send Data</button>
      </div>
    );
  }
}

export default App;