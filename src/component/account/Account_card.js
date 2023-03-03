import { Button } from "@mui/material";
import React from 'react';
import Copy from "../Copy";
import './Account_card.css';

const Account_card = ({title, bank, name, account}) => {
    return (
        <div className="account_card_wrap">
            <div className="account_card__wrap">
                <span>{title} 계좌</span>
                <span>
                    <Button  style={{marginBottom: '5%'}} color="accountCopy" variant="contained" size="small">
                        <Copy text={`${bank} ${account}`}>
                            <span style={{lineHeight: '1rem'}}>복사</span>
                        </Copy>
                    </Button>
                </span>
            </div>
            <hr className="account_card_hr"/>
            <div>
                <div className="account_card__wrap2">
                    <span>{bank} (예금주: {name})</span>
                </div>
                <div className="account_card__wrap2">
                    <span>{account}</span>
                </div>
            </div>
        </div>
    );
};

export default Account_card;