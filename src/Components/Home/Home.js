import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='body' style={{backgroundImage: `url(/Images/logo.svg)` }}>
                        <h1 className='logo-title'>React</h1>
                        <h2>A JavaScript library for building user interfaces</h2>
                        <div className='side-by-side'>
                            <button>Get Started</button>
                            <a href="" className='link'>Take the tutorials <i class="fas fa-angle-right "></i></a>
                        </div>
                </div>
                <div>
                    <div className='content'>
                        <div className='content1'>
                            <h3 className='title'>Declarative</h3>
                            <p className='p-style'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                            <p className="p-style">Declarative views make your code more predictable and easier to debug.</p>
                        </div>
                        <div className='content1'>
                         <h3 className='title'>Component-Based</h3>
                         <p className='p-style'>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                        <p className="p-style">Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                        </div>
                        <div className='content1'>
                            <h3 className='title'>Learn Once, Write Anywhere</h3>
                            <p className='p-style'>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                            <p className="p-style">React can also render on the server using Node and power mobile apps using  <a href=''className='inline-style'>React Native.</a></p>
                        </div>
                    </div>
                </div>
                   <section className='editor-section'>
                        <div className='section1'>
                            <div className='space'>
                                <h1>A Simple Component</h1>
                                <p className='p-style1'> React components implement a <span className='highlight'>render()</span> method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by<span className='highlight'> render() </span> via <span className='highlight'>this.props.</span></p>
                                <p className='p-style1'><b>JSX is optional and not required to use React.</b>Try the <a href=''className='inline-style'>Babel REPL</a> to see the raw JavaScript code produced by the JSX compilation step.</p>
                            </div>
                            <div  className='space1'>
                               <div className='editor'>
                                    <div className='headline'>
                                         <h4 className='editor-headline'>LIVE JSX EDITOR</h4>
                                         <h4 className='editor-headline'><input type="checkbox"  id="check-box"/>JSX?</h4>
                                     </div>
                                    <div className='textarea'><p>class HelloMessage extends React.Component</p>

                                    </div>
                               </div>
                               <div className='output-field'> 
                               <div className='headline1'>
                                         <h4 className='editor-headline1'>RESULT</h4>
                                         <p className='output'>Hello Arun</p>
                                     </div>
                                  
                               </div>
                            </div>
                        </div>
                   </section>
                   <section className='editor-section'>
                        <div className='section1'>
                            <div className='space'>
                                <h1>A Stateful Component</h1>
                                <p className='p-style1'> In addition to taking input data (accessed via <span className='highlight'>this.props</span>), a component can maintain internal state data (accessed via <span className='highlight'>this.state</span>). When a component’s state data changes, the rendered markup will be updated by re-invoking <span className='highlight'>render().</span></p>
                                
                            </div>
                            <div  className='space1'>
                               <div className='editor'>
                                    <div className='headline'>
                                         <h4 className='editor-headline'>LIVE JSX EDITOR</h4>
                                         <h4 className='editor-headline'><input type="checkbox"  id="check-box"/>JSX?</h4>
                                     </div>
                                    <div className='textarea'><p>class HelloMessage extends React.Component</p>

                                    </div>
                               </div>
                               <div className='output-field'> 
                               <div className='headline1'>
                                         <h4 className='editor-headline1'>RESULT</h4>
                                         <p className='output'>Hello Arun</p>
                                     </div>
                                  
                               </div>
                            </div>
                        </div>
                   </section>
                   <section className='editor-section'>
                        <div className='section1'>
                            <div className='space'>
                                <h1>An Application</h1>
                                <p className='p-style1'> Using <span className='highlight'>props </span>and <span className='highlight'>state</span>, we can put together a small Todo application. This example uses <span className='highlight'>state</span> to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>
                                
                            </div>
                            <div  className='space1'>
                               <div className='editor'>
                                    <div className='headline'>
                                         <h4 className='editor-headline'>LIVE JSX EDITOR</h4>
                                         <h4 className='editor-headline'><input type="checkbox"  id="check-box"/>JSX?</h4>
                                     </div>
                                    <div className='textarea'><p>class HelloMessage extends React.Component</p>

                                    </div>
                               </div>
                               <div className='output-field'> 
                               <div className='headline1'>
                                         <h4 className='editor-headline1'>RESULT</h4>
                                         <p className='output'>Hello Arun</p>
                                     </div>
                                  
                               </div>
                            </div>
                        </div>
                   </section>
                <Footer/>
            </div>
        )
    }
}

export default Home
