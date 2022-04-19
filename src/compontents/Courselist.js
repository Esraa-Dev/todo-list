import React, { Component } from 'react'
import { Fragment } from 'react'

export default class Courselist extends Component {
    state={
        isEdit:false
    }
    // rendercourse
    rendercourse=()=>{
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => {this.togglestate()}}>EditCourse</button>
                <button onClick={() => {this.props.deletecourse(this.props.index)}}>DeleteCourse</button>
            </li>
        )
    }


    togglestate=()=>{
        let {isEdit}=this.state;
        this.setState({
            isEdit:!isEdit
        })
    }
    updatecourseitem=(e)=>{
        e.preventDefault();
        this.props.editcourse(this.props.index,this.input.value);
        this.togglestate();
    }
    // render update form
    renderupdateform = () => {
        return (
            <form onSubmit={this.updatecourseitem}>
                <input type="text"ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
             <button>update course</button>
         </form >   
        )
    }
    render() {
        let { isEdit } = this.state;
        return (
               <Fragment>
                {isEdit ? this.renderupdateform(): this.rendercourse()}
               </Fragment>
        
        )
    }
}
