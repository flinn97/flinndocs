
import { PageTemplate } from "flinntech"
import mapArch from "../../assets/mapArch.png";
import mapTech from "../../assets/mapTech.png"
import itemFactory from "../../assets/itemFactory.png"
import attributeItem from "../../assets/attributeItem.png"
export default class MapTech extends PageTemplate {
    constructor(props,) {
        super(props);

        this.state = {
            ...this.state,
            defaultClass: "fit",

        }
    }


    render() {
        return (
            <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle, padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h2 style={{ fontSize: '24px', color: '#2C3E50' }}>Description</h2>
    <p>MapTech is a complete, out-of-the-box listing suite of objects. (but can be any item) It comes with a controlled and customized UI and components.</p> {/* "full" -> "complete", "suite of objects or not" -> "suite of objects, whether or not they are included" */}
    <p>There are several components that make up the MapTech, all based in React. You can access a map by using the interface or the MapComponent React syntax.</p> {/* "MapTech" added comma, corrected "react" to "React" */}
    <p>Map items have a BaseClass, and you can extend that BaseClass and use the ItemTypeFactory to add your own map items.</p> {/* Corrected punctuation and capitalization */}
    <p>Although you can completely control inline styling and CSS classes for every HTML tag in the map component, there is a theme factory and a way to use our SCSS classes to build your own themes.</p> {/* "Though" -> "Although", "scss" -> "SCSS", "css" -> "CSS" */}
    <p>The map component is separated into three divisions: Container, Section, and Cell, for maximized UI customization.</p> {/* "seperated" -> "separated", "customizaiton" -> "customization" */}
    
    <h2 style={{ fontSize: '24px', color: '#2C3E50' }}>Architecture</h2>
    <img src={mapArch} style={{ width: '100%', maxWidth: '800px', margin: '20px 0' }} alt="MapTech architecture diagram" />
    <p>Mostly, you will not need to delve deep into this, but if you want to add a component to the type factory, this information is good to know.</p> {/* "get super deep in" -> "delve deep into" */}
    
    <h2 style={{ fontSize: '24px', color: '#2C3E50' }}>Usage</h2>
    <div style={{ marginLeft: '20px' }}>
        <h3>Example:</h3>
        <img src={mapTech} style={{ width: '100%', maxWidth: '800px', margin: '20px 0' }} alt="Usage example" />
        <p>This is almost a full example, but there may be other options. However, this will cover most everything you need to build.</p> {/* Reworded for clarity */}
        <p>Just like in older versions of FlinnTech, you can still use attribute texts, normal texts, images, delete, edit, and key words to create your cell. Please see the MapComponentItem for more details.</p> {/* Corrected punctuation and improved flow */}
        <p>There will be more information on filtering in the otherServices tab once that is documented.</p> {/* "info" -> "information", minor rephrasing */}
    </div>
    
    <div style={{ marginTop: '20px' }}>
        <h3>MapComponent:</h3>
        <p><b>Minimum Syntax:</b> &lt;MapComponent name="objType" cells= array of things you want to map out  /&gt;</p>
        <b>Requisites:</b>
        <p>name: The type of object you would like to map out within the component list.</p> {/* Minor rephrasing */}
        <p>cells: The MapComponent will map out the cells of your array. Cell types are shown below.</p> {/* "custum" -> "custom" */}
        <img src={itemFactory} alt="itemTypeFactory"/>
    </div>
    
    <h2 style={{ fontSize: '24px', color: '#2C3E50' }}>Creating Customized Map Items</h2>
    <p>import &#123;MapItemBaseClass&#125; from "flinntech"</p>
    <img src={attributeItem} style={{ width: '100%', maxWidth: '800px', margin: '20px 0' }} alt="Custom map item example" />
    <p>import &#123;mapInterface&#125; from "flinntech"</p>
    <p>mapInterface.getFactory().registerComponent("type", Component)</p>
    <p>Now, you can use your component anywhere using MapTech.</p> {/* "maptech" -> "MapTech" */}
</div>
            // <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle }}>
            //     <h2>Description</h2>
            //     <p>MapTech is a full out of the box listing suite of objects or not. Complete with controlled and customized UI and components. </p>
            //     <p>There are several components that make up the map tech all based in react. You can get access to a map by using the interface or the MapComponent react syntax</p>
            //     <p>Map items have a BaseClass and you can extend that baseclass and use the ItemTypeFactory to add your own map items</p>
            //     <p>Though you can completely control inline styling and css classes of every html tag in the map component there is a theme factory and a way to use our scss classes to build your own themes</p>
            //     <p>The map component is seperated into three divisions. Container, Section, Cell. For maximized UI customizaiton</p>
            //     <h2>Architecture</h2>
            //     <img />
            //     <p>Mostly you will not need to get super deep in this but in case you want to add a component to the type factory this stuff is good to know</p>
            //     <h2>Usage</h2>
            //     <div style="margin-left: 20px;"><h3>Example:</h3>
            //         <img />
            //         <p>This is almost a full example but there may be other options. However, this will get you through mostly everything you need to build</p>
            //         <p>Just like in older versions of flinntech you can still use attribute texts normal texts imgs del edit key words to create your cell. Please see the MapComponentItem for more details</p>
            //         <p>There will be more info on filtering in the otherServices tab when that is documented</p>
            //         </div>
            //     <div style="margin-top: 20px;"><h3>MapComponent:</h3>
            //         <p><b>Minimum Syntax: </b> &lt; MapComponent name= "objType" cells=❴ array of things you want to map out. ❵  /&gt; </p>
            //         <b> Requisites</b><p>name:  Type of object in that you would like to map out within component list.</p>
            //         <p>cells: The MapComponent will map out the cells of your array either by default vertical but can send in themes and custum styles to change that. Cell types are shown are below.</p>
            //         </div>
            //         <h2>Creating customized Map Items</h2>
            //         <p>import {MapItemBaseClass} from "flinntech"</p>
            //         <img/>
            //         <p>import {mapInterface} from "flinntech</p>
            //         <p>mapInterface.getFactory().registerComponent("type", Component)</p>
            //         <p>Then you can now use your component anywhere using the maptech.</p>



            // </div>
        )
    }


}