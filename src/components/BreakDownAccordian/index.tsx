import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { paymentAccordianDetails } from '../../dummyData/FoodItemData';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { AccordionContext } from 'react-bootstrap';

interface PaymentAccordianDetail {
    id: number;
    title: string;
    value: string;
    body: string;
}

interface ContextAwareToggleProps {
    children: React.ReactNode;
    eventKey: string;
    callback?: (eventKey: string) => void;
}

function ContextAwareToggle({ children, eventKey, callback }: ContextAwareToggleProps) {
    const { activeEventKey } = React.useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div className='breackdownrtnbtnprice'>
            <button
                type="button"
                className='breakdownaccordianbtn'
                onClick={decoratedOnClick}
            >
                <FontAwesomeIcon icon={faChevronRight} className='Arrow-Icon' />
                {children}
            </button>
        </div>
    );
}

const BreakDownAccordion = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0" className='breakdownaccordianwhole'>
                {paymentAccordianDetails.map((detail: PaymentAccordianDetail) => (
                    <Card key={detail.id} className='breakdownaccordiancard'>
                        <Card.Header className='breakdowncardheader'>
                            <ContextAwareToggle eventKey={detail.id.toString()}>
                                <div className="accordion-title-value">
                                    <span>{detail.title}</span>
                                    <span>{detail.value}</span>
                                </div>
                            </ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={detail.id.toString()}>
                            <Card.Body>{detail.body}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    );
}

export default BreakDownAccordion;
