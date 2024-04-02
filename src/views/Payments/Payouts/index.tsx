import React from 'react';
import Drop_Down_Menu from '../../../components/Drop Down Menu';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import PaymentStatusBox from '../../../components/Payment Status Box';
import { paymentBoxData } from '../../../dummyData/FoodItemData';
import BreakDownAccordian from '../../../components/BreakDownAccordian';

const Payouts = () => {
    return (
        <div className="payouts-container">
            <div className="payouts-header">
                <h2 className="payouts-title">Payments</h2>
                <div className="payouts-content">
                    <input type='date' className="payouts-input" />
                    <Drop_Down_Menu />
                    <Button className="payouts-button">
                        <FontAwesomeIcon icon={faDownload} className='payouts-button-icon' />
                        Download
                    </Button>
                </div>
            </div>
            <div className='paymentStatusBoxStyling'>
                {paymentBoxData.map(item => (
                    <PaymentStatusBox
                        key={item.id}
                        title={item.title}
                        value={item.Value}
                        percentage={item.Percentage}
                    />
                ))}
            </div>
            <div className='paymentsGraphBox'>
                <div className='paymentGraphBoxUpperLine'>
                    <h3>Sales Report</h3>
                    <Button className='viewreportbtn'>View Report</Button>
                </div>
            </div>
            <div className='payBreakDownBox'>
                <div className='payBreakDownBoxContainer'>
                    <h3>Pay Breakdown</h3>
                    <BreakDownAccordian/>
                </div>
            </div>
        </div>
    );
};

export default Payouts;
