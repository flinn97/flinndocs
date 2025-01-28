
import {PageTemplate} from "flinntech"
import popTech from "../../assets/popTech.png";
import popupApp from "../../assets/popupApp.png";
import popupObj from "../../assets/popupObj.png";
import popupbutton from "../../assets/popupbutton.png"

export default class PopupTech extends PageTemplate{
    constructor(props, ){
        super(props);

        this.state={
          ...this.state,
            defaultClass:"fit",

        }
    }
    

    render(){
        return(
            <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle, padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Description</h2>
            <p>In earlier versions of Flinntech, we identified a pattern regarding popups that prompted us to build a popup creator for all popups created.</p>
            <p>The AppBaseClass sets up much of this functionality for us. If you would like to use the PopupCreator without the AppBaseClass, be sure to review how it is implemented in that class and replicate its behavior.</p>
            <p>Map items have a BaseClass, which you can extend. Use the ItemTypeFactory to add your own map items.</p>
            <p>All popups are Card components, so be sure to check that tab to understand what goes into creating them.</p>
        
            <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Architecture</h2>
            <img src={popTech} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} alt="Architecture diagram" />
            <p>The PopupMachine includes a checker for a popupSwitch, which correlates with content in the factory. If everything matches, the popup is displayed.</p>
        
            <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>Usage</h2>
            <div style={{ marginLeft: '20px' }}>
                <h3 style={{ color: '#555' }}>Example: App.js setup to use PopupCreator</h3>
                <img src={popupApp} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} alt="App.js example" />
                <p>Using the AppBaseClass, there are two types of popups that are created:</p>
                <ol>
                    <li>Popups that are directly related to a type of Component the Popup will be working with.</li>
                    <li>Normal popups that do not need to be associated with a component.</li>
                </ol>
        
                <h3 style={{ color: '#555' }}>Component Popups</h3>
                <p>For a component popup to display, two conditions need to be met:</p>
                <ol>
                    <li>The popupSwitch must match the factory type that the object was registered with.</li>
                    <li>The currentPopupComponent must have the same type as the componentType in the object retrieved from the factory using the popupSwitch.</li>
                </ol>
                <p>This is an example of an object that could be registered with the factory:</p>
                <img src={popupObj} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} alt="Factory registration example" />
                <p>In the AppBaseClass, we provide a popupComponents global map containing the component type and its content. The AppBaseClass registers, adds, and updates popups for each pair.</p>
                <p>Additionally, you can pass props for those components using popupComponentsProps, allowing them to have the required data.</p>
                <p>With this documentation and the Card documentation, you should have enough information to create a Component Popup.</p>
                <p>There are many reasons to set up a popup with a component. However, if that doesn't matter, here are the instructions for setting up a normal popup:</p>
        
                <h3 style={{ color: '#555' }}>Normal Popups</h3>
                <p>Normal popups are set up similarly to component popups, except that you do not need to add a component type to the object.</p>
                <p>In the popup list in the App.js state, all you need to do is provide the content:Component pair. The AppBaseClass will handle the rest.</p>
                <p>The AppBaseClass uses the class name for the popupSwitch and registers it in the factory with that name.</p>
                <p>You can use the object mapping in the popups state to change the popupSwitch if needed. You can also modify the theme and type as shown above.</p>
                <p>Currently, we are working on a patch to allow passing props to the component. For now, use the global state for required values.</p>
            </div>
        
            <div style={{ marginLeft: '20px' }}>
                <h3 style={{ color: '#555' }}>Example: How to use the PopupButton to bring up popups</h3>
                <p>We provide a customizable button that allows you to display popups.</p>
                <img src ={popupbutton} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} alt="Popup button example" />
                <p>The process is as follows:</p>
                <ol>
                    <li>Update the popupSwitch in the state to match the required string for your popup.</li>
                    <li>Add the component to currentPopupComponent.</li>
                </ol>
            </div>
            <p style={{ fontStyle: 'italic', color: '#777' }}>Note: Even though we use the AppBaseClass to automate popups, all the technology can work using simple props passed down instead of global state values.</p>
        </div>
        
        // <div  className={this.props.pageClass||this.state.defaultClass} style={{...this.props.props.pageStyle}}>
        //  <h2>Description</h2>
        //         <p>In earlier versions of Flinntech we found a pattern regarding popups that prompted us to build a popup creater for all popups created </p>
        //         <p>The AppBaseClass sets up a lot of this for us so if you would like to use the PopupCreater without the AppBaseClass be sure to look into how we do it in that class and replicate</p>
        //         <p>Map items have a BaseClass and you can extend that baseclass and use the ItemTypeFactory to add your own map items</p>
        //         <p>All Popups are Card components so be sure to check that tab to see what goes into that</p>
        //         <h2>Architecture</h2>
        //         <img />
        //         <p>The PopupMachine has a checker for a popupSwitch with correlates to content in the factory. If everything matches the popup is displayed.</p>
        //         <h2>Usage</h2>
        //         <div style="margin-left: 20px;"><h3>Example: App.js setups to use PopupCreator</h3>
        //             <img />
        //             <p>Using the AppBaseClass There are two types of popups that are created:</p>
        //             <p>1. Popups that are directly related to a type of the Component the Popup will be working with.</p>
        //             <p>2. Normal Popups that do not need to be associated with a component</p>
        //             <h3>Component Popups</h3>
        //             <p>In order for a component popup to show up two cases need to be achieved. </p>
        //             <p>1. The popupSwitch needs to match the factory type that the object was registered with</p>
        //             <p>2. The currentPopupComponent needs to have the same type as the componentType in the object that was retrieved from the factory with the popup switch </p>
        //             <p>This is an example of an obj that could be registered with the factory</p>
        //             <img/>
        //             <p>In the AppBaseClass we provide the popupComponents global map with the type of component and it's content and the AppBaseClass registers add and update popups for each pair</p>
        //             <p>we also can pass in props for those components using the popupComponentsProps which allows those components to have anything we need them to have</p>
        //             <p>In any case with this and the card documentation you should have enough here to create a componentPopup</p>
        //             <p>There are many reasons why you may want to set up a popup with a component but in case that doesn't matter here's the docs to setup a normal popup</p>
        //             <h3>Normal Popups</h3>
        //             <p>Normal popups are set up just like the component popups except that you do not need to add a component type to the object</p>
        //             <p>In the popup list in App.js state all you really need to do is provide the content:Component pair and the AppBaseClass will provide the rest</p>
        //             <p>The AppBaseClass uses the name of the class for the popupSwitch and registers to the factory with that name</p>
        //             <p>You can use the object mapping in the popups state to change the popupSwitch if you like. You can also change the theme and the type as shown above</p>
        //             <p>Currently we have a patch in the works to also be able to pass down props to the component. For now just keep things in the global state if you need them</p>
        //             </div>
        //             <div style="margin-left: 20px;"><h3>Example: How to use the popupButton to bring up popups</h3>
        //             <p>We provide a customizable button that allows you to bring up poups</p>
        //             <img/>
        //             <p>The idea is: A. Update the popupSwitch in the state to match the needed string for your popup. B. Add component to currentPopupComponent</p>
        //             </div>
        //             <p>Last Note: Even though we use the AppBaseClass to automate popups for you all the tech can use simple props passed down instead of global state values to work.</p>

        // </div>
        )
    }

    
}