import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       userName: 'ma'
//     }
//   }

//   getUserData = (name) => {
//     return axios.get(`https://api.github.com/users/${name}`);
//   }

//   // shouldComponentUpdate(nextProps, nextState){
//   //   if(nextState.userName == this.state.userName){
//   //     return false
//   //   }
//   //   return true
//   // }

//   componentDidMount() {
//     this.getUserData(this.state.userName)
//       .then((responce) => {
//         // console.log(responce.data);
//         this.setState({ data: responce.data }, () => { console.log(this.state.data) });
//         const username=this.state.userName;
//         setInterval( async function(){
//          console.log(username);
//          //this.getUserData(username)
//           // .then((res) =>{
//           //   this.setState({ data:res.data}, ()=>{console.log(this.state.data)});
//           // })
//           // .catch((error)=> {
//           //   console.error(error);
//           // })
//         }, 5000);
//       })
//       .catch((error) =>
//         console.error(error)
//       )
//   }

//   render() {
//     return (
//       <div className='App'>
//         <div className='Header'>
//           Name:
//           <input type='text' onChange={(e) => this.setState({ userName: e.target.value })} value={this.state.userName} />
//         </div>
//         <div className='Body'>
//           <img src={this.state.data?.avatar_url} style={{ width: 100, height: 100 }} />
//           <div class="Info">
//             <h2>User data information</h2>
//             <div>Role: {this.state.data?.type}</div>
//             <div>Company: {this.state.data?.comany}</div>
//             <div>email: {this.state.data?.email}</div>
//             <div>Number of follower: {this.state.data?.followers}</div>
//           </div>

//         </div>

//       </div>
//     )
//   }
// }

import { useState, useEffect } from 'react'

export default function App() {

  const [data, setData] = useState([]);
  const [userName, setUserName] = useState('ma');

  useEffect(
    () => {
      getUserData(userName)
        .then((res) => setData(res.data))
        .catch((error) => { console.log(error) })
    }, []
  )

  useEffect(
    () => {
      getUserData(userName)
        .then((res) => setData(res.data))
        .catch((error) => { console.log(error) })
    }, [userName]
  )

  const getUserData = (name) => {
    return axios.get(`https://api.github.com/users/${name}`);
  }

  return (
    <div className='App'>
      <div className='Header'>
        Name:
        <input type='text' onChange={(e)=> setUserName(e.target.value)} value={userName} />
      </div>
      <div className='Body'>
        <img src={data?.avatar_url} style={{ width: 100, height: 100 }} />
        <div class="Info">
          <h2>User data information</h2>
          <div>Role: {data?.type}</div>
          <div>Company: {data?.comany}</div>
          <div>email: {data?.email}</div>
          <div>Number of follower: {data?.followers}</div>
        </div>
      </div>
    </div>
  )
}

