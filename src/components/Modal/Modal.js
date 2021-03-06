import React from 'react';
import { StyledModal, ModalInner, ModalClose, ModalUpper, ModalMiddle, ModalLower } from './Modal.styles';

import { ReactComponent as TransPennineLogo } from '../../assets/images/tp-express-icon.svg';
import { ReactComponent as NorthernRailLogo } from '../../assets/images/northern-rail.svg';
import { ReactComponent as ArrivaWalesLogo } from '../../assets/images/arriva-wales.svg';
import { ReactComponent as ModalCloseIcon } from '../../assets/images/modal-close-icon.svg';

const operatorLogos = {
    TP: <TransPennineLogo />,
    NT: <NorthernRailLogo />,
    AW: <ArrivaWalesLogo />,
}

class Modal extends React.Component {

    componentDidMount() {
        document.body.classList.add("no-scroll");
    }

    componentWillUnmount() {
        document.body.classList.remove("no-scroll");
    }

    render(){
        const { destination_name, status, origin_name, expected_arrival_time, aimed_arrival_time, aimed_departure_time, operator, toggleModal} = this.props;
        return (
            <StyledModal id="modal">
                <ModalInner>
                    <ModalUpper>
                        <ModalClose onClick={toggleModal}>
                            <ModalCloseIcon />
                        </ModalClose>
                        <p className="train-title">{destination_name}</p>
                        <p className="train-from">From: {origin_name}</p>
                        {
                            status === "LATE"
                            ?
                            <span className="train-status train-status--red">
                                {status.toLowerCase()}
                            </span>
                            :
                            <span className="train-status train-status--green">
                                {status.toLowerCase()}
                            </span>
                        }
                        <p className="train-expected">Expected: {expected_arrival_time}</p>
                    </ModalUpper>
                    <ModalMiddle>
                        <div>
                            <p style={{alignItems: 'center', display: 'flex', fontSize: '14px'}}>
                                <svg style={{marginRight: "8px", marginTop: "-3px", fill: "#8e8e8e"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                Arrives: 
                                {
                                    expected_arrival_time === null || expected_arrival_time === ''
                                    ?
                                    `N/A`
                                    :
                                    aimed_arrival_time
                                }
                            </p>
                        </div>
                        <div>
                            <p style={{alignItems: 'center', display: 'flex', fontSize: '14px'}}>
                                <svg style={{marginRight: "8px", marginTop: "-3px", fill: "#8e8e8e"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                Departs: 
                                {
                                    aimed_departure_time === null || aimed_departure_time === ''
                                    ?
                                    `N/A`
                                    :
                                    aimed_departure_time
                                }
                            </p>
                        </div>
                    </ModalMiddle>
                    <ModalLower>
                        <span style={{color: '#737B87', fontSize: '12px', display: 'block', fontWeight: 'bold', textAlign: 'left'}}>OPERATOR</span>
                        {operatorLogos[operator]}
                    </ModalLower>
                </ModalInner>
            </StyledModal>
        )
    }
};

export default Modal;
