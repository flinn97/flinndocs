
import {PageTemplate} from "flinntech"
import BasicApp from "../../assets/basicApp.png"
import Architecture from "../../assets/overviewArchitecture.png";
import fullApp from "../../assets/fullApp.png"
import { Link } from "react-router-dom";

export default class Overview extends PageTemplate{
    constructor(props, ){
        super(props);

        this.state={
          ...this.state,
            defaultClass:"fit",

        }
    }
    

    render(){
        return(
            <div 
  className={this.props.pageClass || this.state.defaultClass} 
  style={{
    ...this.props.props.pageStyle, 
    padding: "20px", 
    fontFamily: "Arial, sans-serif", 
    color: "#333", 
    lineHeight: "1.6"
  }}
>
  <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Overview</h1>
  <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>What's on this page?</h2>
  <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
    <li>What and Why</li>
    <li>Why use it</li>
    <li>Installation</li>
    <li>Basic Architecture</li>
    <li>How to Use</li>
    <li>Open Source GitHub for Contributors</li>
  </ul>

  <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>What and Why</h2>
  <p>
    FlinnTech is a framework built to significantly speed up development. Its UI components are built with React, but the core structure uses pure JavaScript/TypeScript. 
  </p>
  <p>
    The framework is similar to Retool, Appsmith, Budibase, and UI Bakery in that it provides low-code UI components for apps, such as lists, forms, cards, pages, and navigation bars. 
    However, FlinnTech adds another layer of architecture to handle UI and non-UI functionalities common to every app.
  </p>
  <p>
    Think of FlinnTech as providing the source code for the tools above, but with added architecture for maximum scalability.
  </p>
  <p>
    FlinnTech is completely free and open source. Feel free to contribute! If you'd like to contribute, email: <a href="mailto:taylor@flinnapps.com">taylor@flinnapps.com</a>.
  </p>
  <p>
    Note: Use something like Vite to build with the library installed. The library is designed to help developers reduce code and speed up development time.
  </p>

  <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Why Use It</h2>
  <p>
    Here's a use case for a client that works with Fortune 500 companies:
  </p>
  <p><strong>Solution:</strong> A custom dashboard built to track sales quotes. You can find an example of what was developed in the <Link to="/home">home tab.</Link></p>
  <p><strong>FlinnTech's impact on the final product:</strong></p>
  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
    <li>Development time reduced from an 80-hour multi-developer project to a 5-hour single-developer task.</li>
    <li>Custom lines of code were significantly reduced.</li>
    <li>Change orders did not increase development time, thanks to FlinnTech's scalability.</li>
    <li>Client costs were reduced from $10,000 USD to $2,000 USD.</li>
    <li>The final product was delivered within a week of project definition.</li>
    <li>Client satisfaction was extremely high.</li>
  </ul>

  <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Installation</h2>
  <p>
    Currently, an NPM library is available for installation. However, it requires configuration to work with JSX. While Vite and other custom builds work, Create React App (CRA) is not yet supported. We are seeking support for CRA.
  </p>
  <p><strong>To install:</strong></p>
  <pre style={{
    backgroundColor: "#f4f4f4", 
    padding: "10px", 
    borderRadius: "5px", 
    overflow: "auto"
  }}>
npm install flinntech
  </pre>
  <p>
    Once installed, you can use the various components and core features included. Future updates will allow individual library installations instead of the full package.
  </p>
  <p>
    Here's a simple example of how it can be used:
  </p>
  <img src={BasicApp} alt="Usage example" style={{ width: "100%", margin: "10px 0" }} />
  <p>
    To get started, extend the <a href = "https://github.com/flinn97/flinntechNPM/blob/main/src/components/templateTech/baseClasses/AppBaseClass.jsx" target={"_blank"}>AppBaseClass</a> for your <code>App.js</code> or entry point. Use templates and components like cards from the templates tab to build your app.
  </p>

  <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Architecture</h2>
  <p>
    Here's a high-level overview of how the <a href = "https://github.com/flinn97/flinntechNPM/blob/main/src/components/templateTech/baseClasses/AppBaseClass.jsx" target={"_blank"}>AppBaseClass</a> sets up the components:
  </p>
  <img src={Architecture} alt="Architecture overview" style={{ width: "100%", margin: "10px 0" }} />
  <p>
    To use the full capacity of all components, some setup is required. The <a href = "https://github.com/flinn97/flinntechNPM/blob/main/src/components/templateTech/baseClasses/AppBaseClass.jsx" target={"_blank"}>AppBaseClass</a>  handles most of this setup for you. Further documentation on its functionality will be provided in the TemplateTech tab.
  </p>

  <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>How to Use</h2>
  <p>
    Import the <a href = "https://github.com/flinn97/flinntechNPM/blob/main/src/components/templateTech/baseClasses/AppBaseClass.jsx" target={"_blank"}>AppBaseClass</a>  from FlinnTech and extend the class. In the constructor, define custom configurations to set up your app.
  </p>
  <p>
    Detailed Example:
  </p>
  <img src={fullApp} alt="Setup example" style={{ width: "100%", margin: "10px 0" }} />
  <p>
    Detailed explanations for individual steps can be found here. For now, the key is to define pages, URLs, data objects, popups, logos, navbar specifics, etc.
  </p>

  <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>GitHub Templates</h2>
  <p>
    The templates tab contains a list of previously developed apps that you can clone to start your project. Here's the most basic template:
  </p>

  <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Open Source GitHub for Contributors</h2>
  <p>
    If you'd like to contribute, please email us at <a href="mailto:taylor@flinnapps.com">taylor@flinnapps.com</a>.
  </p>
  <p>
    Here's the repository:
  </p>
</div>
        // <div  className={this.props.pageClass||this.state.defaultClass} style={{...this.props.props.pageStyle}}>
        //  <h1>Overview</h1>
        //  <h2>What's on this page?</h2>
        //  <p>What and Why</p>
        //  <p>why use it</p>
        //  <p>Installation</p>
        //  <p>Basic architecture</p>
        //  <p>How to use</p>
        //  <p>open src github for contributers</p>
        //  <h2>What and Why</h2>
        //  <p>FlinnTech is a framework built to help speed up development significantly. It's ui components are built off react but the core structure is in pure js/ts. </p>
        //  <p>The framework is a lot like retool, appsmith, budibase, ui Bakery in the fact that it provides low code UI components to use in apps. Components such as lists, forms, cards, pages, navs etc. However, Flinntech adds another layer architechture to handle other non UI things that every app has.</p>
        // <p>Think of it as Flinntech provides you the source code for the tools above with added architechture for maximum scaleability</p>
        // <p>FlinnTech is completely free and completely open source. Please feel free to contribute. If you would like to contribute email: taylor@flinnapps.com</p>
        // <p>There is no builder for FlinnTech. The library was meant to help developers shrink down code and speed up dev time</p>
        // <h2>Why use it</h2>
        // <p>The following is use case that happened for a client that works with fortune 500 componanies</p>
        // <p>Solution: A custom dashboard specifically built for a client to track sales quotes. You can find an example of part of what was developed here</p> 
        // <p>Flinntech footprint on the final product:</p>
        // <p>Dev Time was significantly reduced: 80 hour multiple dev product to 5 hour single dev</p>
        // <p>Custom lines of code from the developer was significantly reduced: </p>
        // <p>Change orders to the initial design did not affect dev time because of the scaleability of flinntech</p>
        // <p>Costs were reduced for the client significantly: 10,000 USD to 2,000 USD</p>
        // <p>Final product was delivered to the client within a week of defining the project</p>
        // <p>Thus overall client happiness was very high</p>
        // <h2>Installation</h2>
        // <p>Right now an npm library exists that can be installed. However, you will need configuration to work with jsx. So vite and other custom builds will work but currently create-react-app CRA does not work. Looking for support here</p>
        // <p>To install:</p>
        // <p>npm install flinntech</p>
        // <p>Then you can use all the various components and core that it comes with. There will be more work done to allow installation of one library at a time instead of all at once</p>
        // <p>here's a simple image of how It can then be used</p>
        // <img />
        // <p>The easiest way to get yourself synced up with all the tech is to extend the AppBaseClass for your App.js or entry of your app. Then using templates and cards from the templates tab to build out the rest of it</p>
        // <p>Reading further will get into how to use it a little deeper</p>
        // <h2>Architecture</h2>
        // <p>Here's a highlevel of how the AppBaseClass gets you access to setting up all the other components</p>
        // <img/>
        // <p>And here's the basic structure of each technology assostiated</p>
        // <img/>
        // <p>Upon entering the app in order to use the full capacity of all the different components some setup is required.</p>
        // <p>AppBaseClass does most of the setup for you. There will be later documentation of how it does all this</p>
        // <h2>Basic How to use</h2>
        // <p>Simply import the AppBaseClass form flinntech and extend the class </p>
        // <p>Once you have that the only thing that you need to do is apply the constructor with several custom things the help the AppBaseClass setup your app</p>
        // <p>Here is a more complicated version of how this is done</p>
        // <img/>
        // <p>Individual explanation will be done here at this link. But the basic understanding is that you will neet to define the pages and url links for your app. Popups, Data Objects, logos, nav bar specifics etc.</p>
        // <p>More support will be added for libraries and other apps that do not use routes. as well as nav bar handling</p>
        // <h2>Github templates</h2>
        // <p>On the templates tab we provide a list of apps that were done previously that you can clone and build out your project with</p>
        // <p>here is the most basic template</p>
        // <h2>open src github for contributers</h2>
        // <p>If you would like to contribute please email us at taylor@flinnapps.com</p>
        // <p>here's the repo:</p>


        // </div>
        )
    }

    
}