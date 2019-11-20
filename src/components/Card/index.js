import React from 'react';
import './card.scss';


export default class Card extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            flipped: false,
            cardType: "",
        }
    }

    render(){
        return(
            <>
                <div className="card-container">
                    <div className="card-wrap"></div>
                    <div className="card-head">
                        <div className="chip"></div>
                        <div className="brand-amex"></div>
                    </div>
                    <div className="card-body">
                        <div className="card-number">#### #### #### ####</div>
                    </div>
                    <div className="card-foot">
                        <div>
                            <div className="title">Card Holder</div>
                            <div className="content">Neo Hong</div>
                        </div>
                        <div>
                            <div className="title">Expires</div>
                            <div className="content">01/20</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
