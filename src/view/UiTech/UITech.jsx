
import {PageTemplate} from "flinntech"

export default class UiTech extends PageTemplate{
    constructor(props, ){
        super(props);

        this.state={
          ...this.state,
            defaultClass:"fit",

        }
    }
    

    render(){
        return(
        <div  className={this.props.pageClass||this.state.defaultClass} style={{...this.props.props.pageStyle}}>
         Ui

        </div>
        )
    }

    
}