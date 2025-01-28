
import {db, auth, storage } from './firebase.config.js';
import {AppBaseClass} from "flinntech";
import logo from "./assets/flinntechlogo.svg";
import Home from './view/home/Home.jsx';
import {User} from "./models/myComponents";

import "./style.scss"
import Overview from './view/overview/overview.jsx';
import MapTech from './view/mapTech/mapTech.jsx';
import NavTech from './view/navTech/navTech.jsx';
import Formtech from './view/formTech/formTech.jsx';
import CardTech from './view/cardTech/cardTech.jsx';
import TemplateTech from './view/templateTech/templateTech.jsx';
import UiTech from './view/UiTech/UITech.jsx';
import APITech from './view/APITech/APITech.jsx';
import PopupTech from './view/popupTech/popupTech.jsx';
import OtherServices from './view/otherServices/otherServices.jsx';
import LinkTech from './view/linkTech/linkTech.jsx';
import ComponentListNPMDocs from './view/componentListNPM/componentListNpm.jsx';
export default class App extends AppBaseClass {
  constructor(props){
    super(props, {db:db, endpoint:"EI", auth:auth, storage:storage});
    this.popupComponents={};
  this.popupComponentsProps={};
  let user = new User();
  user.setCompState({_id:"taylor@flinnapps.com", email:"taylor@flinnapps.com",})
  this.state.componentList.setComponentList([user]);
  let pageStyle={marginLeft:window.innerWidth<1000?"5px":"300px"}
    this.state={
      ...this.state,
      currentUser:user,

      navBarProps:{logoURL:logo, type:"sideBar", //navMapProps:{mapSectionClass:"Map-Section-ei makeRelative"}
    },
    //Phase 1: text phase 2: imgaes s pPhase 3: links and connectionhase 4: advanced ui
      routes:[
        {comp:Home, name: "home", path:"/", props:{pageStyle:pageStyle}},
        {comp:Overview, name: "overview", path:"/overview", props:{pageStyle:pageStyle}}, // phase 3 incomplete phase 4 Incomplete
        {comp:ComponentListNPMDocs, name: "ComponentList", path:"/componentlist", props:{pageStyle:pageStyle}}, // phase 2 done phase 3 incomplete phase 4 Incomplete
        {comp:MapTech, name: "maptech", path:"/maptech", props:{pageStyle:pageStyle}}, // phase 3 incomplete phase 4 Incomplete
        {comp:NavTech, name: "navTech", path:"/navtech", props:{pageStyle:pageStyle}}, //  phase 3 incomplete phase 4 Incomplete
        {comp:Formtech, name: "formTech", path:"/formtech", props:{pageStyle:pageStyle}}, // phase 3 incomplete  phase 4 Incomplete
        {comp:CardTech, name: "cardtech", path:"/cardtech", props:{pageStyle:pageStyle}}, //  phase 3 incomplete phase 4 Incomplete
        {comp:TemplateTech, name: "templatetech", path:"/templatetech", props:{pageStyle:pageStyle}}, // phase 3 incomplete phase 4 Incomplete
        // {comp:UiTech, name: "ui", path:"/ui", props:{pageStyle:pageStyle}},
        // {comp:APITech, name: "api", path:"/api", props:{pageStyle:pageStyle}},
        {comp:PopupTech, name: "popup", path:"/popup", props:{pageStyle:pageStyle}},  //phase 3 incomplete phase 4 Incomplete
        // {comp:LinkTech, name: "links", path:"/links", props:{pageStyle:pageStyle}}, //sync this in with nav
        // {comp:OtherServices, name: "otherservices", path:"/other", props:{pageStyle:pageStyle}},









      ],
      popups:[
      ]
    }

  }
}