
import { PageTemplate } from "flinntech"
import CompListArch from "../../assets/compListArch.png";
import picOb from "../../assets/object.png";
import getListPic from "../../assets/getList.png"
import getComponentPic from "../../assets/getComponent.png";
import prepare from "../../assets/prepare.png";
import run from "../../assets/run.png";
import setCompState from "../../assets/setCompState.png"
import sub from "../../assets/sub.png"

export default class ComponentListNPMDocs extends PageTemplate {
    constructor(props,) {
        super(props);

        this.state = {
            ...this.state,
            defaultClass: "fit",

        }
    }


    render() {
        return (
            <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle, fontFamily: 'Arial, sans-serif', padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#333', fontSize: '1.8rem', fontWeight: 'bold' }}>Description:</h2>
                    <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                        <p>1. ComponentList NPM is a component-oriented design for the functional parts of a website. It is able to store class objects and allow generous access to them.</p>
                        <p>2. ComponentList technology allows a place where all your components can be held, but will also allow operations to be done on the front and back end.</p>
                        <p>3. ComponentList allows you to seamlessly add, update, delete, and read components from both the front end and back end.</p>
                        <p>4. ComponentList is built in plain JavaScript and is designed to work with any application.</p>
                        <p>5. ComponentList is made to work alongside Firebase. However, there is the ability to switch that out with your own logic and backend. Documentation will be added later on how to do that if requested enough.</p>
                    </div>
                </div>

                <h2 style={{ color: '#333', fontSize: '1.6rem', fontWeight: 'bold' }}>Previously, documentation of functions to use this part of the technology was all documented. Now, we give access to the source code here, and it's all documented in the code. Spend some time looking into them. For now, we share how to set up and use this technology.</h2>

                <h2 style={{ color: '#333', fontSize: '1.6rem', fontWeight: 'bold' }}>High-Level Architecture</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>ComponentList follows basic creational design patterns to provide a list structure that can be manipulated for the front end and back end.</p>
                <img src={CompListArch} alt="High-Level Architecture" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />

                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Classes involved</h3>
                <ul style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                    <li><strong>BaseClass:</strong> Provides a base class that can be extended for adding to the factory.</li>
                    <li><strong>ComponentListInterface:</strong> Provides an interface to interact with ComponentList technology.</li>
                    <li><strong>ComponentList:</strong> A list structure for one-to-many lists in an app.</li>
                    <li><strong>Factory:</strong> Registration and creation of objects to be added to the list.</li>
                    <li><strong>OperationsFactory:</strong> A helper class for ComponentList in preparing objects to be added to the list.</li>
                    <li><strong>OperationsObserver:</strong> An observer to help with callbacks for operations done.</li>
                </ul>

                <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>GitHub Link to Folder:</p>

                <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>The following documentation is done with React in mind, but the implementation can be added to any language.</p>
                    <h1 style={{ color: '#333', fontSize: '2rem', fontWeight: 'bold' }}>Setup</h1>
                    <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                        <p>1. Download the FlinnTech NPM framework.</p>
                        <p>2. Import ComponentListInterface into app.js <b>import ComponentListInterface from './componentListNPM/componentListInterface';</b></p>
                        <p>3. Create a new interface class inside state with a desired dispatch function to update the UI as well as endpoint database storage and auth from Firebase: <code>componentListInterface: new ComponentListInterface(this.dispatch, endpoint, db, storage, auth)</code></p>
                        <p>4. Use the interface to create a new list and add it to state for the rest of the app to use it: <code>list = componentListInterface.createComponentList();</code></p>
                        <p>5. Create components that extend the base class and add them to the factory using:</p>
                        <p><code>componentListInterface.getFactory().registerComponents(&#123; name: &quot;Type of the Class object in STRING&quot;, exe: &quot;student&quot;, component: Actual class object not instantiated, exe:Student &#125;&#41;;</code></p>

                        <div style={{ marginTop: '20px' }}>
                            <p><strong>Example of components that extends the base class:</strong></p>
                            <img src={picOb} alt="Class Example" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                            <p>You would add this class to the factory by calling step 5's function with the param: <code>&#123; name: &quot;student&quot;, component: &lt;span style=&quot;color: green;&quot;&gt;Student&lt;/span&gt; &#125;</code></p>
                        </div>

                        <p>6. After this is all set up, all you would need to do is begin adding raw data from the backend or some database.</p>
                        <p>After login, on mount, or whenever you would simply gather a data list of objects. The minimum requirement for a data object to work is that the type needs to be something that exists within the factory. A class object that you added. Example:<code>&#123; type: &quot;student&quot; &#125;</code></p>
                        <p>Add the data components as a list into the componentList using the addComponents function: <code>componentList.addComponents([listOfDataObjects]);</code></p>
                        <p>7. After you have your data loaded, you are done with the setup and can use getList or getComponent inside ComponentList to get the various components you have added by type.</p>
                    </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#333', fontSize: '1.8rem', fontWeight: 'bold' }}>Usage</h2>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Getting Data</h3>
                    <p>The following examples are just examples and images of frequently used functions from OperationsFactory, ComponentList, and BaseClass.</p>
                    <div style={{ marginTop: '20px' }}>
                        <p><strong>Example 1:</strong> <code>ComponentList.getList();</code></p>
                        <img  src={getListPic} alt="Component Example" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}/>
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>Get the list by filter and set it as a variable.</p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                Notice that these examples show how you could get a list by a certain attribute within the JSON of an object. For example, getting a list of goals by the student who owns them. The minimum requirement is the first parameter, which is the type. There is a default third parameter if you send in the second parameter to find a component list by owner. So, the use of the owner as the third parameter is redundant here since the default is already set as the attribute owner. Example: <code>comp.getList("goal", id);</code>
                            </p>
                        </div>

                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Example 2:</p>
                        <code style={{ backgroundColor: '#f4f4f4', padding: '5px', borderRadius: '4px' }}>ComponentList.getComponent();</code>
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>Get a component by filter and set it as a variable.</p>
                            <img src={getComponentPic} alt="Component Example" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                Notice that this example shows how you could get a component by a certain attribute within the JSON of an object. For example, getting a goal by the student who owns it. The minimum requirement is the first parameter, which is the type. There is a default third parameter if you send in the second parameter to find a component by owner. So, the use of the owner as the third parameter is redundant here since the default is already set as the attribute owner. Example: <code>comp.getComponent("goal", id);</code>
                            </p>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Operations</h3>

                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Example 3:</p>
                        <code style={{ backgroundColor: '#f4f4f4', padding: '5px', borderRadius: '4px' }}>operationsFactory.prepare();</code>
                        <div style={{ marginBottom: '20px' }}>
                            <img src={prepare} alt="Prepare Operation" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                            <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                <b>A couple of notes:</b>
                                <ul style={{ paddingLeft: '20px', fontSize: '1rem' }}>
                                    <li>This example shows how you send a single object to update. However, you may also send in an arr of objects as well.</li>
                                </ul>
                            </div>
                        </div>

                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Example 4:</p>
                        <code style={{ backgroundColor: '#f4f4f4', padding: '5px', borderRadius: '4px' }}>operationsFactory.run();</code>
                        <div style={{ marginBottom: '20px' }}>
                            <img src={run} alt="Run Operation" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                            <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                <b>A couple of notes:</b>
                                <ul style={{ paddingLeft: '20px', fontSize: '1rem' }}>
                                    <li>Once you are ready for something to be added, you can run it.</li>
                                </ul>
                            </div>
                        </div>

                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Example 5:</p>
                        <code style={{ backgroundColor: '#f4f4f4', padding: '5px', borderRadius: '4px' }}>BaseClass.setCompState();</code>
                        <div style={{ marginBottom: '20px' }}>
                            <img src={setCompState} alt="Set Component State" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                            <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                <b>A couple of notes:</b>
                                <ul style={{ paddingLeft: '20px', fontSize: '1rem' }}>
                                    <li><code>setCompState</code> can be used directly with the OperationsFactory and observer by sending in the parameters shown.</li>
                                    <li>You can set a callback so that a different function can be called from the caller side.</li>
                                    <li>The dispatch parameter is meant for UI changes and directly calls the dispatch function set in each BaseClass.</li>
                                </ul>
                            </div>
                        </div>

                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Example 6:</p>
                        <code style={{ backgroundColor: '#f4f4f4', padding: '5px', borderRadius: '4px' }}>BaseClass.subscribeToOperations();</code>
                        <div style={{ marginBottom: '20px' }}>
                            <img src={sub} alt="Subscribe to Operations" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                            <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                <b>A couple of notes:</b>
                                <ul style={{ paddingLeft: '20px', fontSize: '1rem' }}>
                                    <li>You can subscribe a function to the observer in the OperationsFactory and get notified when it runs.</li>
                                    <li>Each object can subscribe itself to the OperationsFactory.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '30px' }}>BaseClass</h2>
                        <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                            <p>1. It is important to note that each class can update and delete itself, but it's up to the ComponentList to add.</p>
                            <p>2. The BaseClass is incredibly powerful and has many tools for connecting with the backend API.</p>
                            <p>3. Please see here for the link to the BaseClass and read the documentation there.</p>
                        </div>
                    </div>
                </div>
            </div>
            // <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle }}>
            //     <div style="margin-top: 30px;"><h2>Description:</h2><div style="margin-left: 20px;">
            //         <p>1. ComponentList NPM is a component oriented design for the functional parts of a website. It is able to store class objects and allow generous access to them. </p>
            //         <p>2. ComponentList technology allows a place where all your components can be held but will also allow operations to be done on the front and back end</p>
            //         <p>3. ComponentList allows you to seamlessly add update or delete and read components from the front end and back end</p>
            //         <p>4. ComponentList is built in plain Javascript and is designed to work with any application. </p>
            //         <p>5. ComponentList is made to work along side firebase. However, there is ability to switch that out with your own logic and backend. Documentation will be added later on how to do that if requested enough.</p>
            //     </div></div>
            //     <h2>Previously documentation of functions to use this part of the technology was all documented. Now we give access to the src code here and its all documented on the code. Spend some time looking into them. For now we share how to setup and use this technology</h2>
            //     <h2>High Level Architecture</h2>
            //     <p>Component List follows basic creational design patterns to provide a list structure that can be manipulated for the FE and BE.</p>
            //     <img />
            //     <h3>Classes involved</h3>
            //     <p>BaseClass: Provide baseclass that can be extended for adding to the factory</p>
            //     <p>ComponentListInteface: provide an interface to interact with ComponentList technology</p>
            //     <p>ComponentsList: List structure for one to many lists in an app.</p>
            //     <p>Factory: registration and creation of objects to be added to the list</p>
            //     <p>OperationsFactory: Helper class for componentsList in preparing objects to be added to the list</p>
            //     <p>OperationsObserver: observer to help in callbacks for operations done.</p>
            //     <p>Githup Link to Folder:</p>

            //     <p></p>
            //     <div style="margin-top: 40px;">
            //         <p style="margin-bottom: 10px;">The following documentation is done with React in mind but the implementation can be added to any language</p>
            //         <h1>Setup</h1>
            //         <div style="margin-left: 20px;">
            //             <p>1. Download flinntech npm framework</p>
            //             <p>2. import ComponentListInterface to app.js <b>import ComponentListInterface from './componentListNPM/componentListInterface';</b></p>
            //             <p>3. create a new class inside state with a desired dispatch function to update ui as well as endpoint database storage and auth from Firebase: componentListInterface: new ComponentListInterface(this.dispatch, endpoint, db, storage, auth) </p>
            //             <p>4. Use the interface to create a new list and add to state for the rest of the app to use it: list= componentListInterface.createComponentList();</p>
            //             <p>5. Create components that extend the base class and add them to the factory using
            //                 <p>componentListInterface.getFactory().registerComponents(❴ name:Type of the Class obj in STRING exe: student, component:Actual class object not instansiated exe: <span style="color: green;">Student </span>❵ );
            //                 </p>
            //             </p>
            //             <div style="margin: 20px;"> <p>example of an object that extends the base class:</p>
            //                 <img style="width: 80vw; height: auto;" />
            //                 <p>You would add this class to the factory by calling step 5's fucntion with the param:(❴ name:"student", component: <span style="color: green;">Student </span>❵ ) </p>
            //             </div>
            //             <p>6. After this is all set up all you would need to do is begin adding raw data from the backend or some database</p>
            //             <p style="margin-left: 30px;"> after login or on mount or whatever you would simply gather a data list of objects the minimum requirement of a data object in order to work is that the type needs to be something that exists within the factory. A class object that you added. exe: ❴ type: "student" ❵ </p>
            //             <p style="margin-left: 30px;"> Add the data components as a list into the componentList addComponents function exe: componentList.addComponents( [listOfDataObjects] ) </p>
            //             <p>7. After you have your data loaded you are done with the setup and can use getList or getComponent inside ComponentList to get the various components you have added by type</p>
            //         </div>
            //     </div>
            //     <div style="margin-top: 20px;"><h2>Usage</h2><h3>Getting Data</h3>
            //     <p>The following examples are just photos of frequently used functions from operations factory component list and BaseClass</p>
            //     <div style="margin-left: 20px;"><p style="margin-top: 20px;"><b>example 1: </b>ComponentList.getList();</p>
            //     <div style="margin-left: 30px;"> 
            //     <p>Get the list by filter and set as variable</p>

            //         <p>Notice that these examples show how you could get a list by a certain attribute within the json of an object. Getting an a list of goals by the student who owns them for example. The minimum requirement is the first param which is the type. There is a default third param if you send in the second param to find a component list by owner. So the use of owner as the third param is redundant here since the default is already set as the attribute owner. exe: comp.getList( "goal", id );</p>
            //     </div>
            //         <p style="margin-top: 30px;"><b>example 2:</b> ComponentList.getComponent();</p>
            //         <div style="margin-left: 30px;"> <p>Get a component by filter and set as variable </p>
            //             <img />
            //             <p>Notice that this example show how you could get a component by a certain attribute within the json of an object. Getting an a goal by the student who owns it for example. The minimum requirement is the first param which is the type. There is a default third param if you send in the second param to find a component by owner. So the use of owner as the third param is redundant here since the default is already set as the attribute owner. exe: comp.getComponent( "goal", id );</p>
            //         </div><h3 style="margin: 30px;">Operations</h3>

            //         <p><b>example 3:</b>  operationsFactory.prepare();</p><div style="margin-left: 30px;">
            //             <img /><div><b>A couple of Notes:</b><div style="margin-left: 20px;">
            //                 <p>1. Notice that this example shows how you can either use an array of objects to update them or just one single object without brackets to update</p>
            //                 </div></div></div>

            //                 <p><b>example 4:</b>  operationsFactory.run();</p><div style="margin-left: 30px;">
            //             <img /><div><b>A couple of Notes:</b><div style="margin-left: 20px;">
            //                 <p>1. Once you are ready for something to be added you and run it.</p>
            //                </div></div></div>

            //                 <p><b>example 5:</b>  BaseClass.setCompState();</p><div style="margin-left: 30px;">
            //             <img /><div><b>A couple of Notes:</b><div style="margin-left: 20px;">
            //                 <p>1. setCompState can be used Directly with the Operations Factory and observer by sending in the params shown.</p>
            //                 <p>2. You can set for a callback so that a different function can be called from caller side</p>
            //                 <p>3. The dispatch param is meant for ui changes and directly calls the dispatch function set in each BaseClass</p>
            //                 </div></div></div>

            //                 <p><b>example 6:</b>  BaseClass.subscribeToOperations();</p><div style="margin-left: 30px;">
            //             <img /><div><b>A couple of Notes:</b><div style="margin-left: 20px;">
            //                 <p>1. You can subscripe a function to the observer in the Operations Factory and get notified when it runs</p>
            //                 <p>2. Each object can subscribe itself to the operations factory</p>
            //                 </div></div></div>

            //             </div></div>
            //             <h2>BaseClass</h2>
            //             <p>1. It is important to note that each class can update and delete itself but it's up to the components list to add</p>
            //             <p>2. The BassClass is incredibly powerful and has a lot of tools with connecting with the backend API </p>
            //             <p>3. Please see here for the link to the base class and read documentation there.</p>
            // </div>
        )
    }


}