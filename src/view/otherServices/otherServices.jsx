
import {PageTemplate} from "flinntech"

export default class OtherServices extends PageTemplate{
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
         Other Services

        </div>
        )
    }

    
}