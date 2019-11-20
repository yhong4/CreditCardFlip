import React from 'react';
import Card from '../Card';
import Input from '../Input/Input';
import Select from '../Input/Select';
import './panel.scss';

export default class Panel extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            cardNumber: "",
            cardName: "",
            cardCvc: "",
            expireMonth: "",
            expireYear: "",
            isFlipped: false,
        }

    }

    onValueChange(key, event){
        this.setState({[key]:event.target.value});
    }

    getYearOptions(duration){
        const year = parseInt(new Date().getFullYear());
        let years = [year];
        for(let i=1;i<duration;i++){
            years.push(year + i);
        }
        return years;
    }

    render(){
        const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        const years = this.getYearOptions(24);

        return(
            <section id="panel" class="wrap">
                <div className="panel-container">
                    <div className="card-section">
                        <Card />
                    </div>
                    <div className="form-section">
                        <div className="input-group">
                            <Input 
                                name="Card Number"
                                onValueChange={this.onValueChange.bind(this, "cardNumber")}
                                /> 
                            <Input 
                                name="Card Name"
                                onValueChange={this.onValueChange.bind(this,"cardName")}
                            />                      
                        </div>
                        <div className="select-group">
                            <Select 
                                name="Month"
                                options={months}
                                onValueChange={this.onValueChange.bind(this, "expireMonth")}
                            />
                            <Select 
                                name="Year"
                                options={years}
                                onValueChange={this.onValueChange.bind(this, "expireYear")}
                            />
                            <Input 
                                name="CVC"
                                onValueChange={this.onValueChange.bind(this, "cardCvc")}
                            />
                        </div>
                    </div>
                  
                </div>
            </section>
        )
    }
}