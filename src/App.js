import "./App.css";
import { render } from "react-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
   pageSize=6;
   apiKey = process.env.REACT_APP_API 
   state =  {
    progress:0 
   }
   setprogress = (progress) =>{
      this.setState({progress:progress})
   }

  render() {
    return (
      <div>
        <BrowserRouter>

        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
     
        
        <Routes>
      <Route path="/" element={<News apiKey={this.apiKey}key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
      <Route path="/business" element={<News apiKey={this.apiKey}key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
      <Route path="/entertainment" element={<News apiKey={this.apiKey}key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
      <Route path="/health" element={<News apiKey={this.apiKey}key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
      <Route path="/science" element={<News apiKey={this.apiKey}key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
      <Route path="/technology" element={<News apiKey={this.apiKey}key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
      <Route path="/sports" element={<News apiKey={this.apiKey}key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
      
     
        
    </Routes>
    </BrowserRouter>

      </div>
    );
  }
}
