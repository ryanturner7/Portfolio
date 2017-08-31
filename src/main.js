import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
  // constructor
  constructor(props){
    super(props)
    this.state = {
      content: '',
    }

    this.getApp = this.getApp.bind(this)
  }

  //hooks
  componentDidUpdate(){
    console.log('__STATE__', this.state)
  }

  //methods
  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  //render
  render(){
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App title='' />, document.getElementById('root'))
