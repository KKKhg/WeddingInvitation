import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from 'react';
import './Account.css';
import Account_card from "./Account_card";



const Account = () => {
    return (
        <div className="account_wrap">
            <div className="f-l">마음 전하실 곳</div>
            <div className="account_btn_wrap">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                    >
                        <div>신랑측 계좌번호</div>
                    </AccordionSummary>
                    <AccordionDetails id="accordion1">
                        <div>
                            <Account_card 
                                title='신랑 아버지'
                                bank='우리'
                                name='강명석'
                                account='339-145707-02-002'
                            />
                            <Account_card 
                                title='신랑 어머니'
                                bank='우리'
                                name='김순영'
                                account='707-02-047061'
                            />
                             <Account_card 
                                title='신랑'
                                bank='신한'
                                name='강현구'
                                account='110-506-958892'
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="account_btn_wrap">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                    >
                        <div>신부측 계좌번호</div>
                    </AccordionSummary>
                    <AccordionDetails id="accordion1">
                        <div>
                            <Account_card 
                                title='신부 아버지'
                                bank='농협'
                                name='안성포'
                                account='123123'
                            />
                            <Account_card 
                                title='신부 어머니'
                                bank='국민'
                                name='최은주'
                                account='123123'
                            />
                            <Account_card 
                                title='신부'
                                bank='신한'
                                name='안유진'
                                account='123'
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
};

export default Account;