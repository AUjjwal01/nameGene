import React from 'react';
import '../App.css';
import SearchBox from './SearchBox';
import Results from './Results';
import Navbar from './Navbar';
const name= require("@rstacruz/startup-name-generator");

class App extends React.Component{
  constructor(){
    super();
    this.state={
      headerText:"NameGeNe!",
      headerExpanded:true,
      suggestions:[]
    };
  }
  
onInputChange= (inputText) =>{
  this.setState({headerExpanded:!inputText,suggestions:inputText?name(inputText):[]})


}

  render(){
  
    return(
      <div className="flex">
        <Navbar headerText={this.state.headerText} headerExpanded={this.state.headerExpanded}/>
      <SearchBox  onHandleChange={this.onInputChange}    />
     
      <Results suggestions={this.state.suggestions} />
      </div>
      
    )
  }
}
export default App;
