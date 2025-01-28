
import {PageTemplate} from "flinntech";
import templateCard from "../../assets/templateCard.png"

export default class TemplateTech extends PageTemplate{
    constructor(props, ){
        super(props);

        this.state={
          ...this.state,
            defaultClass:"fit",

        }
    }
    

    render(){
        return(
            <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle, fontFamily: 'Arial, sans-serif', padding: '20px' }}>
  <h2 style={{ fontSize: '24px', color: '#333' }}>Base Classes</h2>
  <p style={{ marginBottom: '10px' }}>Notes on Base Classes</p>

  <b style={{ fontSize: '18px', color: '#555' }}>AppBaseComponent</b>
  <p style={{ marginBottom: '10px' }}>We have provided the AppBaseComponent to automate just about everything in the FlinnTech framework.</p>

  <p style={{ fontWeight: 'bold' }}>Important Roles:</p>
  <ol>
    <li>Build the components list.</li>
    <li>Set up all the popups.</li>
    <li>Set up the NavBar.</li>
    <li>Set up all the routes.</li>
    <li>Register all custom component classes with the factory.</li>
    <li>Ensure all interfaces have an App that consists of the global state in <code>App.js</code> and a dispatch function that works like <code>setState</code> to change the global state.</li>
  </ol>

  <p style={{ marginBottom: '10px' }}><b>Note:</b> If you do not use this class, you can still use the components. However, you will need to provide a way for all components to know about the global state using the <code>app</code> prop for each FlinnTech component you use. Needless to say, you would need to set up all these things yourself if you do not use this class.</p>

  <b style={{ fontSize: '18px', color: '#555' }}>BaseComponent</b>
  <p style={{ marginBottom: '10px' }}><code>AppBaseClass</code> extends the <code>BaseComponent</code> class, as does every other React-based class in FlinnTech.</p>

  <p><b>Key Features of BaseComponent:</b></p>
  <ul>
    <li><code>BaseComponent</code> is a React class and extends <code>Component</code>.</li>
    <li>It includes many useful functions as well as internal ones. Feel free to explore the class in the source code.</li>
    <li><code>BaseComponent</code> calls <code>render</code> from <code>Component</code>. <code>Render</code> first sets up various utilities and then uses <code>getHtml</code> to display the setup.</li>
  </ul>

  <p>To use <code>BaseComponent</code>, extend the class and implement the <code>getHtml</code> function and <code>setupItem</code> if any initialization is required beforehand.</p>

  <p><b>How setupItem Works:</b></p>
  <ol>
    <li><code>setupItem</code> works with two observers that run every time <code>render</code> is called: a <b>Setup Observer</b> and an <b>HtmlBuilder Observer</b>.</li>
    <li>The Setup Observer uses the <code>initialSetupFunctions</code> list to execute each function when triggered. You can view the default functions in the code.</li>
    <li>The HtmlBuilder Observer, while more complex, leverages functions in <code>initialBuilderSetupFunctions</code> to generate HTML that forms the <code>this.html</code> part of the render.</li>
    <li>For a deeper understanding, use debuggers in the base class and examine its behavior step by step.</li>
  </ol>

  <p><b>Example Usage:</b></p>
  <p style={{ fontStyle: 'italic' }}>Documentation with detailed examples will be provided later. For now, here is a basic example:</p>
  <img src={templateCard} style={{ border: '1px solid #ccc', borderRadius: '8px', marginTop: '10px', maxWidth: '100%' }} />

  <h2 style={{ fontSize: '24px', color: '#333', marginTop: '30px' }}>Templates</h2>
  <p style={{ marginBottom: '10px' }}>Now that we have introduced the <code>BaseComponent</code>, we can share some React component templates you can use that extend it.</p>

  <h3 style={{ fontSize: '20px', color: '#444', marginTop: '20px' }}>API Templates</h3>
  <b style={{ fontSize: '18px', color: '#555' }}>Login</b>
  <p style={{ marginBottom: '10px' }}>We provide a login component for your app.</p>
  <p style={{ marginBottom: '10px' }}>By default, our GitHub full app templates route to the login page using the router in NavTech. To bypass the login for testing or for apps that do not require login, set <code>currentUser</code> in the global state to <code>true</code>.</p>

  <b style={{ fontSize: '18px', color: '#555' }}>Register</b>
  <p style={{ marginBottom: '10px' }}>The Register component works hand in hand with Login and even extends the class.</p>

  <b style={{ fontSize: '18px', color: '#555' }}>GetComponentTemplate</b>
  <p style={{ marginBottom: '10px' }}>This is a "page" UI component that works with the API to fetch items from the backend.</p>
  <ul>
    <li>You can delay rendering until the items are retrieved.</li>
    <li>It fetches one or many components of a specific type from the backend.</li>
    <li>Filtering options for retrieved items are also included.</li>
  </ul>

  <b style={{ fontSize: '18px', color: '#555' }}>GetComponentsFromUrl</b>
  <p style={{ marginBottom: '10px' }}>This extends <code>GetComponentTemplate</code> and works with the URL to fetch backend items.</p>

  <b style={{ fontSize: '18px', color: '#555' }}>getAllComponentByUserTemplate</b>
  <p style={{ marginBottom: '10px' }}>This also extends <code>GetComponentTemplate</code> and fetches all components where the owner attribute matches the <code>currentUser</code> ID.</p>

  <h3 style={{ fontSize: '20px', color: '#444', marginTop: '20px' }}>Page Templates</h3>
  <b style={{ fontSize: '18px', color: '#555' }}>PageTemplate</b>
  <p style={{ marginBottom: '10px' }}>Creates a page where you can add your UI components.</p>

  <h3 style={{ fontSize: '16px', color: '#444', marginTop: '20px' }}>In all cases, simply import the class and extend it for use.</h3>
</div>
        // <div  className={this.props.pageClass||this.state.defaultClass} style={{...this.props.props.pageStyle}}>
        //  <h2>Base Classes</h2>
        //  <p>Notes on Base Classes</p>
        //  <b>AppBaseComponent</b>
        //  <p>We have provided the AppBaseComponent to provide automation for just about everything in flinntech framework.</p>
        //  <p>Important Roles:</p>
        //  <p>1. Build the components list</p>
        //  <p>2. Setup all the popups</p>
        //  <p>3. Setup the NavBar</p>
        //  <p>4. Setup all the routes</p>
        //  <p>5. Register all custom component classes with the factory</p>
        //  <p>6. Ensure all interfaces have App which consists of the global state in App.js and a dispatch function that works like setState to change the global state </p>
        //  <p>Note: If you do not use this class you can still use the components. But you will need to provide a way for all the components to know about global state using the app prop for each flinntech component you use</p>
        //  <p>Needless to say you would need to set up all these things yourself if you do not use this class</p>
        //  <b>BaseComponent</b>
        //  <p>AppBaseClass extends the BaseComponent class as does every other react based class in flinntech</p>
        //  <p>BaseComponent is a react class and extends Component</p>
        //  <p>It includes a lot of very useful functions as well as internal functions feel free to see the class here</p>
        //  <p>BaseComponent calls render from Component. Render first sets up a bunch of stuff and then getHtml for displaying what was setup</p>
        //  <p>So a basic usage of BaseComponent is to extend the class and impliment the getHtml Function and setupItem if anything needs to be setup first</p>
        //  <p>render returns this.html variable</p>
        //  <p>How setupItem works:</p>
        //  <p>1. setupItem works with two observers that run everytime render runs. A setup observer and an HtmlBuilder observer</p>
        //  <p>2. The setup Observer uses the the initialSetupFunctions list to run each function when the observer is called to run. You can look at the defaults on the code </p>
        //  <p>3. The HtmlBuilder Observer is complicated but essentially it uses functions in the initialBuilderSetupFunctions to create html that later form the this.html part of the render</p>
        //  <p>4. If you would like to really understand how it works put some debuggers in the base class and go slow. We solve for some pretty complicated patterns in this BaseComponent and it is extremely useful but is difficult to know how to use</p>
        //  <p>5. Documentation will later be written that explains just how to use all the functionality of the base class. But here is a basic example:</p>
        //  <img/>
        //  <h2>Templates</h2>
        //  <p>Now that we have introduced the BaseComponent we can share some react component templates you can use that extend it.</p>
        //  <h3>API templates</h3>
        //  <b>Login</b>
        //  <p>We provide a login component for your app.</p>
        //  <p>By default our gitHub full app tempates go to the login by default using the router in NavTech</p>
        //  <p>In order to bypass the login for testing or for apps that do not need login set the currentUser in state to be true</p>
        //  <b>Register</b>
        //  <p>Register works hand in hand with login and even extends the class</p>
        //  <b>GetComponentTemplate</b>
        //  <p>This a "page" UI Component that works with the API to grab items from the backend</p>
        //  <p>There is an option to hold off rendering until items are found</p>
        //  <p>GetComponet gets one to many components by a specific type from the backend</p>
        //  <p>Added filtering of what to get from the backend is also included</p>
        //  <b>GetComponentsFromUrl</b>
        //  <p>Extends GetComponentTemplate</p>
        //  <p>It works with the URL to get things from the backend.</p>
        //  <b>getAllComponentByUserTemplate</b>
        //  <p>Also extends GetComponentTemplate</p>
        //  <p>Gets all the components with owner attribute as the id of the currentUser</p>
        //  <h3>PageTemplates</h3>
        //  <b>PageTemplate</b>
        //  <p>Creates a Page that you can put UI in</p>
        //  <h3>In all cases you simply import the class and extend for use</h3>
        // </div>
        )
    }

    
}