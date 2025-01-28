
import { PageTemplate } from "flinntech";
import formArch from "../../assets/formArch.png";
import formTech from "../../assets/formTech.png";
import formExe from "../../assets/formExe.png";
import formFactory from "../../assets/formFactory.png"

export default class Formtech extends PageTemplate {
    constructor(props,) {
        super(props);

        this.state = {
            ...this.state,
            defaultClass: "fit",

        }
    }


    render() {
        return (
            <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle }}>
  <div style={{ marginTop: '20px' }}>
    <h2>Description:</h2>
    <div style={{ marginLeft: '20px' }}>
      <p>1. Form Tech is a React technology designed to connect different types of forms to the NPM ComponentList.</p>
      <p>2. There are many ways a user might interface with the software.</p>
      <p>3. Currently, there is no support for languages other than React. Collaboration is welcome for adding support for other languages.</p>
      <p>4. Form software connects various input types to the ComponentList software, allowing seamless updates to both the list and the backend.</p>
    </div>
  </div>

  <h2>Architecture</h2>
  <img src={formArch}/>
  <p>Generally, you will not need to dive deep into this, but if you wish to add a component to the type factory, this information will be useful.</p>

  <h2>Usage</h2>
  <div style={{ marginLeft: '20px' }}>
    <h3>Example 1:</h3>
    <img src={formTech}/>
    <p>The ParentFormComponent is the most basic example and is designed to use any type of input. It is backward compatible with earlier versions of Flinntech but much more powerful.</p>
    <p>The ParentFormComponent is also connected to the factory, enabling you to create a custom form component. Register it with the factory and use it with the ParentFormComponent as well.</p>
  </div>

  <div style={{ marginTop: '20px' }}>
    <h3>ParentFormComponent:</h3>
    <p><b>Minimum Syntax:</b> &lt; ParentFormComponent name="Attribute" obj? /&gt;</p>
    <b>Requisites:</b>
    <p><b>name:</b> The attribute of the object's JSON that you want to change.</p>
    <p><b>obj:</b> By default, the form components use the currentComponent in the app.state or the currentPopupComponent if `popup` is true. If those are not provided, you will need to send the `obj` explicitly.</p>
  </div>

  <h2>Extra forms that export ParentFormComponent, which can be used as direct React components or from the types with ParentFormComponent:</h2>
  <ul>
    <li>AddButton</li>
    <li>Button</li>
    <li>PopupButton</li>
    <li>UpdateButton</li>
    <li>RunButton</li>
    <li>UploadButton</li>
    <li>DelButton</li>
  </ul>
  <p>Each of these may require separate props. Please check the code for more details.</p>
  <p>There is a button base class, and a way to extend that class to create new custom buttons. Adding one of these works the same way as all the other patterns. As shown below:</p>

  <h2>Creating Customized Form Items</h2>
  <p>Import the <code>InputBaseClass</code> from "flinntech":</p>
  <pre>import &#123; InputBaseClass &#125; from "flinntech";</pre>
  <p>Create a component that extends this class:</p>
  <img src={formExe}/>
  <p>Import the <code>formInterface</code> from "flinntech":</p>
  <pre>import &#123; formInterface &#125; from "flinntech";</pre>
  <p>Register the component with the factory:</p>
  <pre>mapInterface.getFactory().registerComponent("yourType", Component);</pre>
  <p>Now you can use your component anywhere using the formTech factory and the ParentFormComponent.</p>

  <h2>Here's what the current Factory looks like:</h2>
  <img src={formFactory}/>
  <p>Keep in mind that the input type supports everything an HTML input element can support: checkbox, radio, selection, etc.</p>
</div>
            // <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle }}>
            //     <div style="margin-top: 20px;"><h2>Description:</h2><div style="margin-left: 20px;">
            //         <p>1. Form Tech is a react technology made to connect different types of forms to the NPM ComponentList.</p>
            //         <p>2. There are many different ways that a user might interface with the software.</p>
            //         <p>3. There is no support for other languages other than react. Colaboration is very welcome for other languages</p>
            //         <p>4. Form software will connect all sorts of different inputs to the componentList software and have the ability to update the list and the backend seamlessly</p>
            //     </div></div>
            //     <h2>Architecture</h2>
            //     <img />
            //     <p>Mostly you will not need to get super deep in this but in case you want to add a component to the type factory this stuff is good to know</p>
            //     <h2>Usage</h2>
            //     <div style="margin-left: 20px;"><h3>Example 1:</h3>
            //         <img />
            //         <p>The ParentFormComponent is the most basic example and is designed to use any type of input. It is backwards compadible with earlier versions of Flinntech but much more powerful</p>
            //         <p>The ParentFormComponent is connected to the factory as well so one can create a custom form component. Register with the factory and use with the ParentFormComponent as well</p>
            //     </div>
            //     <div style="margin-top: 20px;"><h3>ParentFormComponent:</h3>
            //         <p><b>Minimum Syntax: </b> &lt; ParentFormComponent name= "objType" obj?/&gt; </p>
            //         <b> Requisites</b><p>name:  The Attribute of the objects json that you want to change.</p>
            //         <p>Obj: By default the Form components us the currentComponent in the app.state or the currentPopupComponent if popup is true. But if those are not sent you will need to send down the obj</p>
            //     </div>
            //     <h2>Extra forms that export ParentFormComponent that can be used as direct react components or from the types with ParentFormComponent:</h2>
            //     <p>AddButton</p>
            //     <p>Button</p>
            //     <p>PopupButton</p>
            //     <p>UpdateButton</p>
            //     <p>RunButton</p>
            //     <p>UploadButton</p>
            //     <p>DelButton</p>
            //     <p>Each of these may need seperate props. Please looks into the code to find out more</p>
            //     <p>There is a button base class and a way to extend that class to create new custom buttons. Adding one of these works the same way as all the other patterns. As seen below:</p>
            //     <h2>Creating customized Form Items</h2>
            //     <p>import {InputBaseClass} from "flinntech"</p>
            //     <p>create a component extending the class</p>
            //     <img />
            //     <p>import {formInterface} from "flinntech</p>
            //     <p>mapInterface.getFactory().registerComponent("yourType", Component)</p>
            //     <p>Then you can now use your component anywhere using the formTech factory and ParentFormComponent.</p>
            //     <h2>Here is what the current Factory looks like</h2>
            //     <img/>
            //     <p>Keep in mind that the input type supports anything an input in normal html can support check, radio, selection, etc.</p>

            // </div>
        )
    }


}