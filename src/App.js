import React, { Component } from 'react'
import Courseform from './compontents/Courseform'
import Courselist from './compontents/Courselist';
class App extends Component {
   state={
     courses:[
       {name:"html"},
      {name:"css"},
    {name:"javascript"}
     ],
     current:''
   }

  //  update course
  updatecourse=(e)=>{
    this.setState({
    current:e.target.value
    })
  }
  // add course
  addcourse=(e)=>{
    e.preventDefault();
const {courses}=this.state;
const {current}=this.state;
courses.push({name:current})
this.setState({
  courses,
  current:""
})
  }
  // delete course
  deletecourse = (index) => {
    console.log(index)
    const { courses } = this.state
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }
  // edit course
  editcourse=(index,value)=>{
    let courses=this.state.courses;
    let course=courses[index]
    course['name']=value;
    this.setState({
      courses
    })
  }
  render() {
    const {courses}=this.state;
    const courselist=courses.map((course,index) => {
      return <Courselist deletecourse={this.deletecourse} editcourse={this.editcourse} key={index} details={course} index={index}/>
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <Courseform updatecourse={this.updatecourse} addcourse={this.addcourse} current={this.state.current}/>
        <ul >{courselist}</ul>
      </section>
   
    )
  }
}
export default App;