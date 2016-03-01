import React, { Component } from 'react';
import style from './home.scss';
import Input from '../generalComponents/input';
import Button from '../generalComponents/button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {
            }
        };
        this._handleBtnClick = this._handleBtnClick.bind(this);
    }
    _handleBtnClick(obj, event){
        this.props.handleBtnClick(this.refs, "register", event);
    }
    _createBgRow(bgItem, index){
        let bgStyle = "url('"+ bgItem +"')";
        let divClass = "animated bgImage_"+index;
        if(index == 0){
            divClass += " fadeIn";
        }
        return(
          <div key={index} className={divClass} style={{backgroundImage:bgStyle}}></div>
        );
    }
render() {
        let emailValid = this.props.form.email.isValid;
        let showClass = this.props.show ? " show" : "";
        let pageWrapClasses = "pageWrap home" + showClass;
        return(
            <div id="home">
                <div className="bgWrapDiv" style={{position:"absolute",width:"100%",height:"100%"}}>
                     {this.props.backgrounds.all.map(this._createBgRow, this)}
                </div>
                <div className={pageWrapClasses}>
                  <div className="logo">
                      <img src="images/como_logo_white.png" alt="Como Logo"/>
                  </div>
                     <div className="text-center vAlign">
                       <div className="columns large-12">
                           <h1>Your Customer Loyalty Management Mobile App.</h1>
                           <p className="description">Branded mobile app with built-in engagement and rewards features.<br/> We provide the tips and guidance. You take control.</p>
                           <form>
                               <div className="row collapse">
                                   <Input className="borderLeft" foundationClasses="large-5 medium-5 columns" ref= "store" name="store" stateId="store" placeholder="Store name" isValid={this.props.form.store.isValid} type="text" value={this.props.form.store.value} onChange={this.props.setData.bind(null, this.props.stateId)} onFocus={this.props.onFocus} onBlur={this.props.handleValidation.bind(null, this.props)} onKeyUp={this.props.handleValidation.bind(null, this.props)} errorMsg={this.props.form.errorMessages.store} isRequired='true' validType='text'/>
                                   <Input className="borderNone" foundationClasses="large-5 medium-5 columns" name="email" ref="email" stateId="email" placeholder = "Email" type="email" isValid={this.props.form.email.isValid} value={this.props.form.email.value} onChange={this.props.setData.bind(null, this.props.stateId)} onFocus={this.props.onFocus} onKeyUp={this.props.handleValidation.bind(null, this.props)} onBlur={this.props.handleValidation.bind(null, this.props)} errorMsg={this.props.form.errorMessages.email} isRequired='true' validType='email'/>
                                   <Button foundationClasses="columns medium-2 large-2" buttonSize="large borderRight postfix" btnText="Start" onClick={this._handleBtnClick}/>
                               </div>
                           </form>
                           <p className="grey">By clicking Start you agree to the <a className="terms" href="" target="_blank">terms &amp; conditions</a> of use</p>
                       </div>
                    </div>
                </div>


            </div>
        );
    }
}
Home.propTypes = {
    backgrounds: React.PropTypes.object.isRequired,
    handleValidation: React.PropTypes.func.isRequired,
    form:React.PropTypes.object.isRequired,
    setData: React.PropTypes.func.isRequired,
    handleBtnClick: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    onFocus: React.PropTypes.func.isRequired
};
export default Home;