
import {PageTemplate} from "flinntech"
import navArch from "../../assets/navArch.png";
import navTech from "../../assets/navTech.png"
import navApp from "../../assets/navApp.png"

export default class NavTech extends PageTemplate{
    constructor(props, ){
        super(props);

        this.state={
          ...this.state,
            defaultClass:"fit",

        }
    }
    

    render(){
        return(
            <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle, padding: "20px", fontFamily: "Arial, sans-serif" }}>
  <h2>Description</h2>
  <p>NavTech provides all the route links and navbar UI for an application. It uses React-Router-Dom to handle the navbar and links, as well as routes where everything is directed.</p>
  <p>The Navbar extends the Card class, so it inherits all the theming and typing capabilities. However, it also includes its own themes. More can be done in this category, as only basic sidebar and top bar themes are currently available.</p>
  <p>Like all other technologies, there is a base Navbar class that can be called either by React or by a factory.</p>
  <p>The Navbar uses MapTech and a list pattern to map out all the components in the nav.</p>
  <h2>Architecture</h2>
  <img src={navArch} style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} alt="Architecture diagram" />
  <p>An example will later be shown of how to use the NavList and NavBar to create the component.</p>
  <h2>Usage</h2>
  <div style={{ marginLeft: "20px" }}>
    <h3>Example 1: The NavBar and Props</h3>
    <img src={navTech} style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} alt="NavBar example" />
    <p>Remember that the Navbar is a Card, so check out the Card section for more details on Cards.</p>
    <p>What the new NavTech brings to the table is the ability to have one-to-many items on the nav. It comes with some built-in basic packages but can be customized.</p>
  </div>
  <div style={{ marginLeft: "20px" }}>
    <h3>Example 2: How to Set Up Routes with AppBaseClass (app.js) and Customize the NavList</h3>
    <img src={navApp} style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} alt="NavList example" />
    <p>Above, we see the routes list in App.js global state. AppBaseClass uses this in tandem with our LinksTech to provide routes to each item in this list.</p>
    <p>By default, the NavList structure is built in with the ability to read those routes and propagate links on the NavBar.</p>
    <p>However, towards the bottom of the constructor, there is a way to change the list to perform custom actions. Since NavList is just a list, it can be emptied, pushed to, or have items removed, etc.</p>
    <p>The AppBaseClass provides the ability to have a default Nav. However, the technology supports multiple navbars and navlists as needed.</p>
  </div>
  <div style={{ marginTop: "20px" }}>
    <h3>NavBar:</h3>
    <p><b>Minimum Syntax:</b> &lt; NavBar links?=[] /&gt;</p>
    <b>Requisites:</b>
    <p>links: If you do not provide Routes with the AppBaseClass, the NavBar will need to have a list of links, as shown in the example above, to display navigation links on the bar.</p>
  </div>
  <p>Both the Routes class from LinkTech, the NavBar from NavTech, and MapTech are exported to be extended and altered as needed.</p>
</div>
        // <div  className={this.props.pageClass||this.state.defaultClass} style={{...this.props.props.pageStyle}}>
        //  <h2>Description</h2>
        //         <p>NavTech provides all the routes links and navbar ui for an application. It uses the React-Router-Dom to provide navbar and the links there as well as routes where everything goes</p>
        //         <p>The Navbar extends the card class so it has all the theming and typing apilities. But includes its own themes as well. More can be done on this category since only basic side bar and top bar themes are available</p>
        //         <p>Just like all the other technology There is a base Navbar class which can be called by react or by factory,</p>
        //         <p>The Navbar uses MapTech and a list pattern to map out all the components on the nav.</p>
        //         <h2>Architecture</h2>
        //         <img />
        //         <p>An example will later be shown of how to use the NavList and NavBar to create the component</p>
        //         <h2>Usage</h2>
        //         <div style="margin-left: 20px;"><h3>Example 1: the nav bar and props</h3>
        //             <img />
        //             <p>Remember that Navbar is a Card so check out the card tab for more details on cards</p>
        //             <p>What the new NavTech brings to the table is an ability to have one to many items on the nav. It comes with some built in basic packages but can be customized</p>
        //             </div>
        //             <div style="margin-left: 20px;"><h3>Example 2: How to set up routes with AppBaseClass app.js and how to customize the navList</h3>
        //             <img />
        //             <p>Above we see the routes list in App.js global state. AppBaseClass uses this in tandem with our LinksTech to provide routes to each item in this list</p>
        //             <p>By default the NavList structure is built in with the ability to read those routes and propogate links on the NavBar.</p>
        //             <p>However, we see towards the bottom of the constructor a way to change the list to do custom things. Since NavList is just a list it can be emptied, pushed to, removed from etc.</p>
        //             <p>The AppBaseClass provides for the ability to have a default Nav. But the technology provides one to many navbars and navlists as needed</p>
        //             </div>
        //         <div style="margin-top: 20px;"><h3>NavBar:</h3>
        //             <p><b>Minimum Syntax: </b> &lt; NavBar links?=[] /&gt; </p>
        //             <b> Requisites?</b><p>links: If you do not provide Routes with the AppBaseClass the NavBar will need to have a list of links as in the example above to show link navigation on the bar.</p>
        //             </div>
        //             <p>Both the Routes class from LinkTech and the NavBar from NavTech as well as the MapTech are exported to be extended and altered as needee</p>

        // </div>
        )
    }

    
}