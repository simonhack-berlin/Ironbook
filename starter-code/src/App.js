  import React from 'react';
  import './App.css';
  import users from "./users.json";


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ironhackersList: users,
        search:'',
        student:true,
        teacher: true,
        campus: ''
      } 
    }
  handleInputChange = event => {
    const target = event.target; 
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
   
    this.setState({
      [name]: value 
    })
    }
   
      render()  {
        // const options = [...new Set(users.map(user => user.campus))].map(campus => {
        //   return <option value={campus} key={campus}>{campus}</option>
        // })
        const filteredUsers = users.filter( user => {
          return this.state[user.role]
          && `${user.firstName}${user.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())
           && ((user.campus === this.state.campus) || !this.state.campus)
        })
        
      const displayironhackers = filteredUsers.map((ironhacker) => {
         
      return (
        <tr>
        <td>{ironhacker.firstName}</td>
        <td>{ironhacker.lastName}</td>
        <td>{ironhacker.campus}</td>
        <td>{ironhacker.role}</td>
        </tr>
            )
              })
      
       return (
        <div className= "App-header">
        <form >
          <label htmlFor="search"></label>
          <input  
             type="text" 
             name= "search"
             id="search"
             placeholder="Search by name"
             value=  {this.state.search}
             onChange= {this.handleInputChange}
           />
            <input 
           name="student"
           type="checkbox"
           checked={this.state.student}
           onChange={this.handleInputChange}
           />
           <label>Student</label>
          
           <input 
           name="teacher"
           type="checkbox"
           checked={this.state.teacher}
           onChange={this.handleInputChange}
           />
           <label>Teacher</label>  
        </form>
        <table >
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Campus</th>
          <th>role</th>
          <th>Links</th>
        </tr>
        <tbody >
        {displayironhackers}
        </tbody>
        </table>
        </div> 
         )
            }
          }
  export default App
  