import React, { Component } from 'react'
import "../Components/Menu.css"
import SubMenu from './SubMenu';
import pic1 from "../images/coffee.png"

export default class Menu extends Component {
    state={Posts:[
      {title:"Cappuccino Coffee",description:"Hot"},
      {title:"Caffe's Macchiato",description:"Cool"},
      {title:"Dunkin Doughnut",description:"Cool"},
      {title:"Vietnamese Coffee",description:"Hot"},
    ]}
  render() {
    return (
      <section id='menu'>
        <div className='innerMenu'>
        <h1>Today's Offer</h1>
        <div className=''>
        <SubMenu img={pic1} title={this.state.Posts[0].title} description={this.state.Posts[0].description} price="$10" />
        <SubMenu img={pic1} title={this.state.Posts[1].title} description={this.state.Posts[1].description} price="$15" />
        <SubMenu img={pic1} title={this.state.Posts[2].title} description={this.state.Posts[2].description} price="$20" />
        <SubMenu img={pic1} title={this.state.Posts[3].title} description={this.state.Posts[3].description} price="$25" />
        </div>
        </div>
      </section> 
    )
  }
}
