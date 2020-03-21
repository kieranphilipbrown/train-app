import React from 'react';
import styled from 'styled-components';

class Modal extends React.Component {
    render() {
        const { data, toggleModal } = this.props;
        return (
            <ModalOuter>
                <ModalInner>
                    <ModalClose onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#9a9a9a" d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                    </ModalClose>
                    <ModalUpper>
                        <p style={{fontWeight: "bold", marginRight: "45px"}}>{data.destination_name}</p>
                        {
                            data.status === "LATE"
                            ?
                            <span style={{fontSize: "14px", background: "#ff5656", border: "1px solid #e62525", padding: "5px 10px", display: "inline-block", borderRadius: "3px"}}>
                                {data.status.toLowerCase()}
                            </span>
                            :
                            <span style={{fontSize: "14px", background: "#59e32c", border: "1px solid #48c220", padding: "5px 10px", display: "inline-block", borderRadius: "3px"}}>
                                {data.status.toLowerCase()}
                            </span>
                        }
                        <p style={{color: "#6e6e6e", fontSize: "14px", display: "block", marginBottom: "15px"}}>From: {data.origin_name}</p>
                        <p>Expected: {data.expected_arrival_time}</p>
                    </ModalUpper>
                    <ModalMiddle>
                        <div>
                            <p style={{alignItems: 'center', display: 'flex', fontSize: '14px'}}>
                                <svg style={{marginRight: "8px", marginTop: "-3px", fill: "#8e8e8e"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                Arrives: {data.aimed_arrival_time}
                            </p>
                        </div>
                        <div>
                            <p style={{alignItems: 'center', display: 'flex', fontSize: '14px'}}>
                                <svg style={{marginRight: "8px", marginTop: "-3px", fill: "#8e8e8e"}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                Departs: {data.aimed_departure_time}
                            </p>
                        </div>
                    </ModalMiddle>
                    <ModalLower>
                        <span style={{color: '#737B87', fontSize: '12px', display: 'block', fontWeight: 'bold', textAlign: 'left'}}>OPERATOR</span>
                        {data.operator === "TP" ? <svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="153 0 149 109"><defs><path id="a" d="M0 107.215645h148.980534V.130422H0z"/></defs><g fill="none" fillRule="evenodd"><path fill="#00A6E6" d="M189.394754 83.609836l-4.28667-6.335977-4.311267 6.335977h-4.208454l6.363468-9.46358-6.258-9.248788h4.312152l4.102101 6.041134 4.07538-6.041134h4.313391l-6.258708 9.19536 6.468582 9.517008z"/><g transform="translate(153 .04947)"><path d="M50.014681 73.375041c1.919658 0 3.076443-.88183 3.076443-2.592963 0-1.737757-1.156785-2.592604-3.076443-2.592604h-3.023886v5.185567h3.023886zm.104937-8.526882c4.312506 0 6.679518 2.56544 6.679518 5.933919 0 3.368478-2.367012 5.907653-6.679518 5.907653h-3.128823v6.870617h-3.707658V64.848159h6.836481zM63.004101 73.375041h3.023356c1.920365 0 3.077327-.88183 3.077327-2.592963 0-1.737757-1.156962-2.592604-3.077327-2.592604H63.0041v5.185567zm6.337278 10.185307l-4.496898-6.870617h-1.84038v6.870617h-3.708365V64.848159h6.837542c4.312506 0 6.678633 2.56544 6.678633 5.933919 0 2.64711-1.44629 4.785127-4.154127 5.560102l4.943721 7.218168H69.34138zM79.332166 80.271723v-4.46384h5.4024l1.181382-3.287707h-6.583782v-4.383788h7.385232l1.182445-3.288247H75.519216V83.56033h11.404162l1.182445-3.288606zM13.088358 80.271723v-4.46384h5.402224l1.180851-3.287707h-6.583075v-4.383788h7.385587l1.181736-3.288247H9.276117V83.56033h11.402924l1.182621-3.288606zM112.550123 72.057818l-.736152-.2666c-1.735266-.669019-2.341176-1.123246-2.341176-2.138736 0-1.069459 1.104582-1.737757 2.314278-1.737757 1.314987 0 2.523975.534639 2.892759 1.496701h3.598297c-.16935-.443434-.459387-1.346671-1.079277-2.167519-1.119623-1.487167-2.973098-2.590805-5.411779-2.590805-3.049899 0-6.021582 1.977733-6.021582 4.99938 0 2.939795 2.182974 4.517268 5.127405 5.48041l.763404.213532c2.182266.74817 3.049899 1.54977 3.049899 2.912811 0 1.630901-1.604139 2.218429-2.892228 2.218429-1.656873 0-3.260658-1.122347-3.760746-2.485928h-.000354l.000354-.00126h-3.501146c.088834.496683.215891.95001.372146 1.364841l.160325.376694c1.10299 2.43286 3.675806 4.007635 6.729421 4.007635 2.576178 0 6.626607-1.658065 6.626607-5.48041 0-2.619768-1.578303-4.704357-5.890455-6.201418M97.407281 72.057818l-.737037-.2666c-1.73562-.669019-2.340114-1.123246-2.340114-2.138736 0-1.069459 1.104051-1.737757 2.314101-1.737757 1.314456 0 2.523975.534639 2.89276 1.496701h3.597588c-.170058-.443434-.458856-1.346671-1.078746-2.167519-1.1198-1.487167-2.973452-2.590805-5.411602-2.590805-3.050607 0-6.021582 1.977733-6.021582 4.99938 0 2.939795 2.182266 4.517268 5.12776 5.48041l.76305.213532c2.181911.74817 3.049544 1.54977 3.049544 2.912811 0 1.630901-1.604316 2.218429-2.892759 2.218429-1.656342 0-3.260835-1.122347-3.75986-2.485928h-.001062l.001061-.00126h-3.502207c.08901.496683.216421.95001.373207 1.364841l.159795.376694c1.10352 2.43286 3.675982 4.007635 6.729066 4.007635 2.576532 0 6.627492-1.658065 6.627492-5.48041 0-2.619768-1.578303-4.704357-5.890455-6.201418" fill="#00A6E6"/><path d="M21.098896 55.53112h1.72217c1.092903 0 1.751724-.502798 1.751724-1.477094 0-.989406-.65882-1.477453-1.751724-1.477453h-1.72217v2.954547zm3.608383 5.800978l-2.560252-3.913551h-1.048132v3.91355h-2.11272V50.673317h3.89488c2.4562 0 3.804279 1.461982 3.804279 3.38071 0 1.507675-.823393 2.724645-2.36719 3.16646l2.816313 4.111612H24.70728zM62.461915 55.53112c1.093433 0 1.752608-.502798 1.752608-1.477094 0-.989406-.659175-1.477453-1.752608-1.477453h-1.722348v2.954547h1.722348zm.059635-4.857804c2.456023 0 3.804809 1.461982 3.804809 3.38071 0 1.91801-1.348786 3.36452-3.804809 3.36452h-1.781983v3.913552H58.62773V50.673316h3.89382z" fill="#1E234F"/><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><path fill="#1E234F" mask="url(#b)" d="M97.22303 61.332206h2.141212V50.673424h-2.141211zM53.64184 54.79117l-.420633-.152549c-.990443-.380471-1.335514-.640055-1.335514-1.220207 0-.609834.629976-.991925 1.32118-.991925.749425 0 1.439744.305097 1.650503.854488h2.044414c-.111307-.386409-.259245-.715611-.439213-.998041-.000885 0-.001062-.00144-.002124-.0018-.00584-.009893-.011502-.019967-.018227-.030581-.61635-.95109-1.732788-1.685768-3.235352-1.685768-1.74146 0-3.436733 1.130261-3.436733 2.853627 0 1.678752 1.244557 2.578572 2.925496 3.128142l.436029.121967c1.245265.426524 1.740398.88471 1.740398 1.664001 0 .929502-.915766 1.265001-1.650857 1.265001-.945141 0-1.86126-.640595-2.145104-1.418269h-1.97363c.10529.910254.534594 1.46576.672446 1.663102.001238.00108.001238.002878.0023.003958.746947.9975 2.002475 1.612911 3.443988 1.612911 1.470712 0 3.782866-.945512 3.782866-3.126703 0-1.496521-.900724-2.685788-3.362233-3.541354M113.412801 59.459404V56.91645h3.003536l.673154-1.873395h-3.67669v-2.497441h4.191289l.672446-1.872316h-7.03556V61.33208h6.52804l.671562-1.872676zM69.982256 59.459404V56.91645h3.00389l.67227-1.873395h-3.67616v-2.497441h4.190758l.672624-1.872316H67.81043V61.33208h6.527156l.67333-1.872676zM17.31465 50.673334H9.281566l-.684656 1.903257h3.246147v8.755525h2.231992V52.57659h2.555473zM45.535745 50.675798v5.626483l-6.075909-5.757624V61.35005h2.145282v-5.642133l6.075378 5.766438V50.675798zM82.909033 50.675798v5.626483l-6.07644-5.757624V61.35005h2.145636v-5.642133l6.075377 5.766438V50.675798zM93.152995 50.675798v5.626483l-6.076086-5.757624V61.35005h2.145636v-5.642133l6.075024 5.766438V50.675798zM107.366109 50.675798v5.626483l-6.076086-5.757624V61.35005h2.145282v-5.642133l6.075377 5.766438V50.675798z"/><path fill="#00A6E6" mask="url(#b)" d="M135.755333 37.043707l4.539722 10.701776-7.147045-1.59996z"/><path fill="#8F83BD" mask="url(#b)" d="M129.190538 25.346156l12.604126-8.019226-5.987428 16.980727z"/><path d="M118.440595 16.533552c.069723.228103 16.829214 18.406192 16.829214 18.406192l-16.829214-4.992723V16.53355z" fill="#00A6E6" mask="url(#b)"/><path fill="#80CFF4" mask="url(#b)" d="M134.894726 35.59367l-16.45406-3.403198-17.683928 12.888903z"/><path fill="#1E234F" mask="url(#b)" d="M134.894726 35.59367l-34.137988 9.485705h17.683928z"/><path fill="#943F90" mask="url(#b)" d="M134.990638 36.508942l-13.807452 9.782348 4.32047 17.12644z"/><path d="M32.334451 57.066534l.919305-2.435558.919482 2.435558h-1.838787zm3.567152 4.283589h2.320295l-4.968319-10.916388-4.967787 10.916388h2.320117l.99416-2.463801h3.307198l.994336 2.463801z" fill="#1E234F" mask="url(#b)"/></g></g></svg> : null}
                        {data.operator === "NT" ? <svg width="100" height="53" version="1.1" viewBox="0 0 215 53"><g fill="#262262"><path d="M197.13 304.993c0-11.539-9.354-20.893-20.893-20.893-11.54 0-20.895 9.354-20.895 20.893 0 11.54 9.355 20.894 20.895 20.894 11.539 0 20.893-9.354 20.893-20.894m-10.655-8.821v11.284c0 5.63-4.58 10.21-10.21 10.21-5.63 0-10.21-4.58-10.21-10.21v-11.284a1.343 1.343 0 112.687 0v11.284c0 4.148 3.376 7.524 7.524 7.524s7.523-3.376 7.523-7.524v-11.284a1.342 1.342 0 112.686 0M210.296 312.708a6.978 6.978 0 01-6.97-6.97v-7.282a1.248 1.248 0 012.496 0v7.282a4.479 4.479 0 004.474 4.473 4.478 4.478 0 004.473-4.473v-7.282a1.248 1.248 0 112.497 0v7.282c0 3.843-3.128 6.97-6.97 6.97M319.57 312.636c-3.843 0-6.97-3.127-6.97-6.97v-7.282a1.248 1.248 0 112.497 0v7.281a4.479 4.479 0 004.473 4.473 4.478 4.478 0 004.474-4.473v-7.281a1.249 1.249 0 012.498 0v7.281c0 3.844-3.129 6.97-6.972 6.97M245.217 312.757a6.979 6.979 0 01-6.97-6.97v-7.282a1.25 1.25 0 012.496 0v7.281a4.478 4.478 0 004.474 4.473 1.248 1.248 0 010 2.498M308.135 312.687a6.977 6.977 0 01-6.97-6.97v-7.281a1.248 1.248 0 112.496 0v7.281a4.479 4.479 0 004.474 4.472 1.248 1.248 0 110 2.498M258.978 299.7a4.48 4.48 0 00-4.474 4.474v6.051h3.653a1.25 1.25 0 110 2.497h-3.653v5.466a1.248 1.248 0 11-2.496 0v-5.466h-1.826a1.249 1.249 0 110-2.497h1.826v-6.05a6.977 6.977 0 016.97-6.971 1.25 1.25 0 110 2.497M270.817 312.782a6.939 6.939 0 01-4.474-1.63v6.74a1.248 1.248 0 11-2.496 0v-19.458a1.249 1.249 0 112.496 0v7.378a4.478 4.478 0 004.474 4.473 4.478 4.478 0 004.47-4.473v-7.379a1.248 1.248 0 112.498 0v7.38c0 3.843-3.128 6.97-6.968 6.97M227.461 312.724c-4.393 0-7.967-3.48-7.967-7.757 0-4.277 3.574-7.756 7.967-7.756s7.965 3.48 7.965 7.756c0 4.277-3.572 7.757-7.965 7.757m0-13.016c-3.017 0-5.471 2.358-5.471 5.259 0 2.9 2.454 5.26 5.471 5.26 3.015 0 5.47-2.36 5.47-5.26s-2.455-5.26-5.47-5.26M289.807 312.705c-4.392 0-7.966-3.496-7.966-7.794 0-4.126 3.296-7.544 7.501-7.78l.072-.001a1.248 1.248 0 01.067 2.494c-2.382.133-4.34 1.743-4.948 3.881h11.991a1.247 1.247 0 011.244 1.326.7.7 0 01.004.08c0 4.298-3.573 7.794-7.965 7.794m0-2.497c2.63 0 4.83-1.807 5.352-4.207h-10.706c.522 2.4 2.724 4.207 5.354 4.207" transform="translate(0 -997.596) matrix(1.25 0 0 -1.25 -193.653 1404.955)"></path></g></svg> : null}
                        {data.operator === "AW" ? <svg width="120" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 865.04 188.8"><path d="M49.44 41.6c8.4-7.6 18.1-12.2 24.9-11.9a8.48 8.48 0 016.2 2.6 8.77 8.77 0 012 5.9v1l-1-.1c-6.3-.6-15.7 3.9-24 11.4s-13.7 16.4-13.8 22.7v1l-1-.1a8.47 8.47 0 01-5.7-2.6 8.81 8.81 0 01-2-6.4c.4-6.7 6.1-16 14.4-23.5M18.14 9.8c-8.1 7-17.6 21.4-18.1 37.6a71.88 71.88 0 0018.3 50.2c12.7 14 30.7 22.6 48.4 23.5a54.73 54.73 0 0039.5-13.8c6.7-5.9 8.8-11.3 11.6-17.2-5.4 6-6.1 6.7-7.4 7.9-9.6 8.7-22.8 12.7-36.6 11.6A66.45 66.45 0 0129.94 88c-22.7-24.7-23.4-61.7-1.5-81.4A45.55 45.55 0 0138.74 0s-12.7 3-20.6 9.8m17.2 6.8c-5.6 5-9.1 11.7-11 20.7 0 0 6-8.9 9.2-11.3 7.3-5.5 18.6-11.4 36.3-6.7 11.5 3 14.8 8.5 16.3 10.6 6.1 8.6-.3 23.4-13.5 36.2-13.1 12.6-31.8 16.7-38.4 11.7a63.73 63.73 0 009.3 9.4c11.3 6.8 27.5-2.4 37.8-12.2 9-9.4 20-22.6 13.5-36.8 4.6 8.1 7.9 18.2 7.9 25.4.1 23.7-17.2 32.4-22.2 35 7.9-.3 26.1-5.5 32-27.2 4.3-15.5-.5-33.4-12.5-46.7-9.6-10.7-22.8-17.2-36-17.9a39.07 39.07 0 00-28.7 9.8" className="logo__roundel"></path><path d="M510.94 93.4h-17l-6.8-16.5h-31.6l-6.9 16.5h-16.2s25.6-62.2 27.1-65.6 3.8-7.5 9.9-7.5h11.3l30.2 73.1M459.84 65h23l-11.4-30h-.2zm-246.9 28.4h-17l-6.8-16.5h-31.6l-6.9 16.5h-16.2s25.6-62.2 27.1-65.6 3.8-7.5 9.9-7.5h11.3l30.2 73.1M161.74 65h23l-11.4-30h-.2zm93.5-1a21.6 21.6 0 005.9-2.9 22.89 22.89 0 009.8-18.7 21.64 21.64 0 00-10.9-18.4c-6.9-4.2-14.3-3.8-22.2-3.8h-18.8v73.1h14.6v-28h3c1.8 0 2.7 1.4 6.2 6.4 5.8 8.2 15.4 21.6 15.4 21.6h18.2L255.24 64m-21.5-10.6V33.3h2.8c3.3 0 8-.2 11.3.6a10.18 10.18 0 017.9 9.6c0 4.3-3 7.8-7.4 9.1-3.7 1-8 .8-11.8.8h-2.8zm85.7 10.6a21.6 21.6 0 005.9-2.9 22.89 22.89 0 009.8-18.7 21.64 21.64 0 00-10.9-18.4c-6.9-4.2-14.3-3.8-22.2-3.8h-18.8v73.1h14.6v-28h3c1.8 0 2.7 1.4 6.2 6.4 5.8 8.2 15.4 21.6 15.4 21.6h18.2L319.44 64m-21.5-10.6V33.3h2.8c3.3 0 8-.2 11.3.6a10.18 10.18 0 017.9 9.6c0 4.3-3 7.8-7.4 9.1-3.7 1-8 .8-11.8.8h-2.8zm66.2-33.2h-7.8c-3.5 0-7.8 2.1-7.8 7.9v65.2h15.6V20.2m35.9 73.2h18.4l30.2-73.1h-17.4l-21.9 56.8h-.3l-21.8-56.8h-17.5l30.3 73.1M533.54 22.7h-8.3v-2.4h19.3v2.4h-8.3v25.6h-2.8V22.7m11.2 9.7v15.9h2.5V38.2c0-3.7 1.1-8.2 5.1-8.2a9.91 9.91 0 011.8.2v-2.6a9 9 0 00-1.8-.2c-2.6 0-4.3 2.1-5.2 4.4h-.1v-3.9h-2.5a27.63 27.63 0 01.2 4.5m24.9 12.6v3.3h2.5a28.86 28.86 0 01-.2-4.3v-9c0-5.3-2.1-7.6-7.2-7.6a15.5 15.5 0 00-6 1.4v2.4a11 11 0 016-1.7c3.4 0 4.6 1.8 4.6 5.3v1h-.5c-5.3 0-12.6.3-12.6 7.2 0 1.8.9 5.8 6.7 5.8 2.6-.1 5.5-1.4 6.7-3.8m-.3-5.8c0 2.2-.1 7.4-6.1 7.4-2.3 0-4.2-1-4.2-3.7 0-4.5 5.2-4.9 9.6-4.9h.7v1.2zm9.7-19h-2.5v3.4h2.5v-3.4zm-2.5 28.1h2.5V27.9h-2.5v20.4zm7.4-15.7v15.6h2.5V36.9c0-3.4 1.4-7.5 6.1-7.5 3.5 0 4.8 2.5 4.8 6.3v12.4h2.5V35c0-4.5-1.9-7.9-7-7.9-4.2 0-5.8 2.3-6.6 4.1h-.1v-3.6h-2.4a45.26 45.26 0 01.2 5m21 12.7l-.2 2.5a15.93 15.93 0 005.7 1c3.1 0 7.1-1.5 7.1-5.8 0-6.7-10.1-6.2-10.1-10 0-2.6 1.8-3.4 4.4-3.4a11.77 11.77 0 014.5 1l.2-2.2a15.64 15.64 0 00-5.1-.9c-3.4 0-6.7 1.5-6.7 5.6 0 5.9 9.8 5.2 9.8 10 0 2.3-2.1 3.6-4.5 3.6a12.5 12.5 0 01-5.1-1.4m54.9 3l8.1-28h-2.6l-7 24.8h-.1l-7.1-24.8h-3.3l-7.2 24.8h-.1l-6.9-24.8h-2.8l8 28h3.3l7.2-24.8h.1l7.1 24.8h3.3m21.3-3.3v3.3h2.5a28.86 28.86 0 01-.2-4.3v-9c0-5.3-2.1-7.6-7.2-7.6a15.5 15.5 0 00-6 1.4v2.4a11 11 0 016-1.7c3.4 0 4.6 1.8 4.6 5.3v1h-.5c-5.3 0-12.6.3-12.6 7.2 0 1.8.9 5.8 6.7 5.8 2.6-.1 5.5-1.4 6.7-3.8m-.3-5.8c0 2.2-.1 7.4-6.1 7.4-2.3 0-4.2-1-4.2-3.7 0-4.5 5.2-4.9 9.6-4.9h.7v1.2zm8 9.1h2.5V18.2h-2.5v30.1zm22-.7V45a12.65 12.65 0 01-5.7 1.5c-4.4 0-6.7-3.5-6.7-7.8h14v-1.3c0-5.5-2.4-10.1-8.1-10.1-5.2 0-8.6 4.4-8.6 10.7 0 6.1 2.5 10.7 9.3 10.7a17.47 17.47 0 005.8-1.1m-12.5-11c0-3.4 2.3-7.1 6-7.1s5.2 3.5 5.2 7.1h-11.2zm17.4 8.7l-.2 2.5a15.93 15.93 0 005.7 1c3.1 0 7.1-1.5 7.1-5.8 0-6.7-10.1-6.2-10.1-10 0-2.6 1.8-3.4 4.4-3.4a11.77 11.77 0 014.5 1l.2-2.2a15.54 15.54 0 00-5-.9c-3.4 0-6.7 1.5-6.7 5.6 0 5.9 9.8 5.2 9.8 10 0 2.3-2.1 3.6-4.5 3.6a13.42 13.42 0 01-5.2-1.4M533.54 67.6h-8.3v-2.4h19.3v2.4h-8.3v25.6h-2.8V67.6m11.6 9.7v15.9h2.5V83.1c0-3.7 1.1-8.2 5.1-8.2a9.91 9.91 0 011.8.2v-2.6a9 9 0 00-1.8-.2c-2.6 0-4.3 2.1-5.2 4.4v-3.9h-2.5c.1 1.4.1 2.3.1 4.5m27.3 15.3V90a12.65 12.65 0 01-5.7 1.5c-4.4 0-6.7-3.5-6.7-7.8h14v-1.3c0-5.5-2.4-10.1-8.1-10.1-5.2 0-8.6 4.4-8.6 10.7 0 6.1 2.5 10.7 9.3 10.7a17.47 17.47 0 005.8-1.1m-12.5-11.1c0-3.4 2.3-7.1 6-7.1s5.2 3.5 5.2 7.1h-11.2zm18.2-3.9v15.6h2.5V81.9c0-3.4 1.4-7.5 6.1-7.5 3.5 0 4.8 2.5 4.8 6.3v12.4h2.5V80c0-4.5-1.9-7.9-7-7.9-4.2 0-5.8 2.3-6.6 4.1h-.1v-3.6h-2.4a43.5 43.5 0 01.2 5m33.4 12.3v3.3h2.5a28.86 28.86 0 01-.2-4.3v-9c0-5.3-2.1-7.6-7.2-7.6a15.5 15.5 0 00-6 1.4v2.4a11 11 0 016-1.7c3.4 0 4.6 1.8 4.6 5.2v1h-.5c-5.3 0-12.6.3-12.6 7.2 0 1.8.9 5.8 6.7 5.8a7.07 7.07 0 006.7-3.7m-.2-5.8c0 2.2-.1 7.4-6.1 7.4-2.3 0-4.2-1-4.2-3.7 0-4.5 5.2-4.9 9.6-4.9h.7v1.2zm23.9 4.3V72.8h-2.5v11.3c0 3.4-1.4 7.5-6.1 7.5-3.5 0-4.8-2.5-4.8-6.3V72.9h-2.5V86c0 4.5 1.9 7.9 7 7.9 4.2 0 5.8-2.3 6.6-4.1h.1v3.6h2.4a43.5 43.5 0 01-.2-5m26.7-23.2l-11.5 28h2.7l3-7.5h14.1l3 7.5h2.9l-11.1-28h-3.1m7.4 18.1h-12.1l6.1-15.4zm9.9-6v15.9h2.5V83.1c0-3.7 1.1-8.2 5.1-8.2a9.91 9.91 0 011.8.2v-2.6a9 9 0 00-1.8-.2c-2.6 0-4.3 2.1-5.3 4.4v-3.9h-2.5a28.29 28.29 0 01.2 4.5m12.7 0v15.9h2.5V83.1c0-3.7 1.1-8.2 5.1-8.2a9.91 9.91 0 011.8.2v-2.6a9 9 0 00-1.8-.2c-2.6 0-4.3 2.1-5.2 4.4h-.1v-3.9h-2.5a28.29 28.29 0 01.2 4.5m15.7-12.2h-2.5v3.4h2.5v-3.4zm-2.6 28.1h2.5V72.8h-2.5v20.4zm15 0l7.2-20.4h-2.6l-5.9 17.7h-.1l-5.7-17.7h-2.8l6.9 20.4h3m21.5-3.3v3.3h2.5a28.86 28.86 0 01-.2-4.3v-9c0-5.3-2.1-7.6-7.2-7.6a15.5 15.5 0 00-6 1.4v2.4a11 11 0 016-1.7c3.4 0 4.6 1.8 4.6 5.2v1h-.5c-5.3 0-12.6.3-12.6 7.2 0 1.8.9 5.8 6.7 5.8a7.17 7.17 0 006.7-3.7m-.3-5.8c0 2.2-.1 7.4-6.1 7.4-2.3 0-4.2-1-4.2-3.7 0-4.5 5.2-4.9 9.6-4.9h.7v1.2zm39.6-15.7l.2-2.6c-1.4-.8-4.8-1-6.4-1-8.7 0-14.1 6-14.1 14.5 0 8.7 5.3 14.5 14.1 14.5 1.8 0 4.9-.3 6.4-1.2l-.2-2.4c-1.6 1-4.4 1.2-6.3 1.2-7.4 0-11.3-5-11.3-12.1 0-6.9 4.1-12.1 11.3-12.1a13.64 13.64 0 016.3 1.2m11.9 21.4l-5.7-17h-2.8l7.3 20.7-.5 1.8c-.8 2.6-1.5 4.4-3.7 4.4a7.52 7.52 0 01-1.9-.3l-.2 2.2a11.76 11.76 0 002.7.3c2.8 0 4.3-2.8 5.2-5.6l8.2-23.5h-2.6l-6 17m35.8 3.4h2.5V79.1c0-4-2.3-6.9-6.5-6.9a6.79 6.79 0 00-6.5 4.3h-.1c-.6-3.6-3.6-4.3-5.4-4.3-4.4 0-5.6 2.6-6.4 4h-.1v-3.4h-2.4a38.54 38.54 0 01.2 4.8v15.6h2.5V81.9c0-5.1 2.7-7.5 5.5-7.5 3.2 0 4.3 2.3 4.3 5.2v13.6h2.5V81.9c0-5.1 2.7-7.5 5.5-7.5 3.2 0 4.3 2.3 4.3 5.2v13.6m7.8-15.9v15.9h2.5V83.1c0-3.7 1.1-8.2 5.1-8.2a9.91 9.91 0 011.8.2v-2.6a9 9 0 00-1.8-.2c-2.6 0-4.3 2.1-5.2 4.4h-.1v-3.9h-2.5a28.29 28.29 0 01.2 4.5m28.7 11.1V72.8h-2.5v11.3c0 3.4-1.4 7.5-6.1 7.5-3.5 0-4.8-2.5-4.8-6.3V72.9h-2.5V86c0 4.5 1.9 7.9 7 7.9 4.2 0 5.8-2.3 6.6-4.1h.1v3.6h2.4a43.5 43.5 0 01-.2-5M811.74 149.4h-42.7a5.36 5.36 0 00-5.4 5.3v26.7a5.38 5.38 0 005.4 5.4h42.7a5.44 5.44 0 005.4-5.4v-26.7a5.36 5.36 0 00-5.4-5.3m1.5 32a1.42 1.42 0 01-1.5 1.5h-42.7a1.54 1.54 0 01-1.5-1.5v-26.7a1.47 1.47 0 011.5-1.5h42.7a1.54 1.54 0 011.5 1.5v26.7zm-33.2-1h-9v-24.5h9c6.3 0 9.8 4 9.8 12.1.1 7.1-2.3 12.3-9.8 12.4m3.9-11.9c0-4.9-.5-8.8-5.8-8.8h-1.2v16.7h2.1c3.1 0 4.9-2.5 4.9-7.9m21.5-.9a6.08 6.08 0 004.3-5.7c0-.5-.1-6-7-6h-10.3v24.5h8.6c2.3 0 9.4 0 9.4-6.9.1-1.7-.6-5-5-5.9m-7.2-7.9h1.9c2.6 0 3.7.9 3.7 2.9a2.94 2.94 0 01-3.2 3h-2.3v-5.9h-.1zm2.5 16.7h-2.4v-6.3h2.6c3.1 0 3.8 1.8 3.8 3.1-.1 3.2-3.1 3.2-4 3.2m-284.5-21.9h2.4v26.8h-2.4v-26.8zm37.1 8.3h4.5v2.5h.1a6.8 6.8 0 016-2.9c4.3 0 6.2 3 6.2 7.1v11.4h-4.7v-9.7c0-2.2 0-5.2-3.1-5.2-3.4 0-4.2 3.7-4.2 6v8.9h-4.7v-18.1m37.1-.5c5.4 0 9.5 3.6 9.5 9.6 0 5.2-3.5 9.4-9.5 9.4s-9.5-4.2-9.5-9.4c0-5.9 4.1-9.6 9.5-9.6m0 15.4c3.6 0 4.6-3.2 4.6-6.3 0-2.8-1.5-5.4-4.6-5.4s-4.5 2.7-4.5 5.4c-.1 3 .9 6.3 4.5 6.3zm37.1-14.9v16.4c0 4.9-2 9.6-9.6 9.6a17 17 0 01-6.3-1.2l.4-4a13 13 0 005.3 1.6c5.2 0 5.5-3.9 5.5-7h-.1a6.39 6.39 0 01-5.6 2.9c-5.4 0-7.4-4.3-7.4-9.2 0-4.4 2.3-9.4 7.7-9.4a6 6 0 015.6 2.9h.1v-2.5h4.4m-4.7 8.7c0-3.1-1.2-5.6-3.9-5.6-3.2 0-4.2 3-4.2 5.7 0 2.5 1.3 5.5 4 5.5 2.9 0 4.1-2.5 4.1-5.6zm6.3-8.8h5l4 13.4h.1l3.7-13.4h5.5l3.9 13.4h.1l3.8-13.4h4.5l-5.6 18.1h-5.6l-3.9-13.8h-.1l-3.9 13.8h-5.4l-6.1-18.1m32 0h4.4v2.5h.1a6.36 6.36 0 015.4-2.9 5.38 5.38 0 015.4 3.2 6.26 6.26 0 015.7-3.2c4.5 0 5.7 3.1 5.7 7.1v11.4h-4.7v-10.8c0-1.7 0-4.1-2.7-4.1-3.1 0-3.5 3.7-3.5 6.1v8.8h-4.7v-10.8c0-1.7 0-4.1-2.7-4.1-3.1 0-3.5 3.7-3.5 6.1v8.8h-4.7v-18.1m29.9 0h4.5v2.5h.1a6.8 6.8 0 016-2.9c4.3 0 6.2 3 6.2 7.1v11.4h-4.7v-9.7c0-2.2 0-5.2-3.1-5.2-3.4 0-4.2 3.7-4.2 6v8.9h-4.7v-18.1m21.1-3.4h-4.1v-4.1h4.1v4.1zm3.9 21.5h-4.7v-18.1h4.7v18.1zm-.7-25.5h4.1v4.1h-4.1v-4.1zm5.3 8.3a17 17 0 016.3-1.4c5.5 0 7.8 2.3 7.8 7.6v2.3c0 1.8 0 3.2.1 4.5s.1 2.6.2 4h-4.2a14.76 14.76 0 01-.2-2.7h-.1a6.41 6.41 0 01-5.6 3.1c-3.2 0-6.3-1.9-6.3-5.4a5.39 5.39 0 013.1-5.2 14.07 14.07 0 016.1-1.1h2.6c0-2.9-1.3-3.9-4.1-3.9a9.56 9.56 0 00-5.6 2l-.1-3.8m5.5 14.2a3.94 3.94 0 003.3-1.6 5.74 5.74 0 001-3.7h-2c-2.1 0-5.2.4-5.2 3.1-.1 1.5 1.2 2.2 2.9 2.2zm28.6 3h-4.5v-2.5h-.1a7.39 7.39 0 01-5.9 2.9c-4.3 0-6.2-3-6.2-7.1v-11.4h4.7v9.7c0 2.2 0 5.2 3.1 5.2 3.4 0 4.2-3.7 4.2-6v-8.9h4.7v18.1m-406.9-31.5h-42.7a5.36 5.36 0 00-5.4 5.3v26.7a5.38 5.38 0 005.4 5.4h42.7a5.44 5.44 0 005.4-5.4v-26.7a5.36 5.36 0 00-5.4-5.3m1.5 32a1.42 1.42 0 01-1.5 1.5h-42.7a1.54 1.54 0 01-1.5-1.5v-26.7a1.47 1.47 0 011.5-1.5h42.7a1.54 1.54 0 011.5 1.5v26.7zm-33.2-1h-9v-24.5h9c6.3 0 9.8 4 9.8 12.1.1 7.1-2.3 12.3-9.8 12.4m3.9-11.9c0-4.9-.5-8.8-5.8-8.8h-1.2v16.7h2.1c3.1 0 4.9-2.5 4.9-7.9m21.5-.9a6.08 6.08 0 004.3-5.7c0-.5-.1-6-7-6h-10.2v24.5h8.7c2.3 0 9.4 0 9.4-6.9a6 6 0 00-5.2-5.9m-7.1-7.9h1.9c2.6 0 3.7.9 3.7 2.9a2.94 2.94 0 01-3.2 3h-2.3v-5.9h-.1zm2.4 16.7h-2.4v-6.3h2.6c3.1 0 3.8 1.8 3.8 3.1-.1 3.2-3.1 3.2-4 3.2m40.1-9.7a6.9 6.9 0 00-3.2-.7c-2.9 0-4.8 2.3-4.8 5.7s1.6 5.9 4.9 5.9a11.29 11.29 0 003.6-.8l.2 3.9a16.27 16.27 0 01-4.7.6c-5.9 0-8.9-4.1-8.9-9.6 0-5.2 3.1-9.4 8.8-9.4a15.1 15.1 0 014.6.6l-.5 3.8m10.9-4.4c5.4 0 9.5 3.6 9.5 9.6 0 5.2-3.5 9.4-9.5 9.4s-9.5-4.2-9.5-9.4c0-5.9 4.1-9.6 9.5-9.6m0 15.4c3.6 0 4.6-3.2 4.6-6.3 0-2.8-1.5-5.4-4.6-5.4s-4.5 2.7-4.5 5.4c0 3 .9 6.3 4.5 6.3zm11.9-14.9h4.4v2.5h.1a6.36 6.36 0 015.4-2.9 5.38 5.38 0 015.4 3.2 6.26 6.26 0 015.7-3.2c4.5 0 5.7 3.1 5.7 7.1v11.4h-4.7v-10.8c0-1.7 0-4.1-2.7-4.1-3.1 0-3.5 3.7-3.5 6.1v8.8h-4.7v-10.8c0-1.7 0-4.1-2.7-4.1-3.1 0-3.5 3.7-3.5 6.1v8.8h-4.7v-18.1m29.9 0h4.5v2.6h.1a6.16 6.16 0 015.6-3c5.6 0 7.6 4.4 7.6 9.4s-2 9.5-7.7 9.5a6.13 6.13 0 01-5.3-2.5h-.1v9.5h-4.7v-25.5m4.7 9c0 2.6 1 5.9 4.2 5.9s4-3.4 4-5.9-.8-5.8-3.9-5.8-4.3 3.2-4.3 5.8zm16.4-8.1a17 17 0 016.3-1.4c5.5 0 7.8 2.3 7.8 7.6v2.3c0 1.8 0 3.2.1 4.5s.1 2.6.2 4h-4.2a14.76 14.76 0 01-.2-2.7h-.1a6.41 6.41 0 01-5.6 3.1c-3.2 0-6.3-1.9-6.3-5.4a5.39 5.39 0 013.1-5.2 14.07 14.07 0 016.1-1.1h2.6c0-2.9-1.3-3.9-4.1-3.9a9.56 9.56 0 00-5.6 2l-.1-3.8m5.5 14.2a3.94 3.94 0 003.3-1.6 5.74 5.74 0 001-3.7h-2c-2.1 0-5.2.4-5.2 3.1-.1 1.5 1.2 2.2 2.9 2.2zm12-15.1h4.5v2.5h.1a6.8 6.8 0 016-2.9c4.3 0 6.2 3 6.2 7.1v11.4h-4.7v-9.7c0-2.2 0-5.2-3.1-5.2-3.4 0-4.2 3.7-4.2 6v8.9h-4.7v-18.1m27.7 13.2l4.4-13.2h4.8l-6.8 18c-1.5 4-2.6 8-7.5 8a12 12 0 01-3.3-.5l.3-3.5a7.38 7.38 0 002.4.3 3 3 0 003.1-3.2l-6.9-19h5.2l4.3 13.1m-220.5-12.2a17 17 0 016.3-1.4c5.5 0 7.8 2.3 7.8 7.6v2.3c0 1.8 0 3.2.1 4.5s.1 2.6.2 4h-4.2a13.71 13.71 0 01-.2-2.7h-.1a6.53 6.53 0 01-5.6 3.1c-3.2 0-6.3-1.9-6.3-5.4a5.39 5.39 0 013.1-5.2 14.07 14.07 0 016.1-1.1h2.6c0-2.9-1.3-3.9-4.1-3.9a9.56 9.56 0 00-5.6 2l-.1-3.8m5.5 14.1a3.94 3.94 0 003.3-1.6 5.74 5.74 0 001-3.7h-2c-2.1 0-5.2.4-5.2 3.1-.1 1.6 1.2 2.2 2.9 2.2zm266.8 3.1h-4.5v-2.5h-.1a7.44 7.44 0 01-6 2.9c-4.3 0-6.2-3-6.2-7.1v-11.4h4.7v9.7c0 2.2 0 5.2 3.1 5.2 3.4 0 4.2-3.7 4.2-6v-8.9h4.7V181"></path></svg> : null}
                    </ModalLower>
                </ModalInner>
            </ModalOuter>
        );
    }
}

export default Modal;

const size = {
	tablet: '768px',
	desktop: '960px'
}

const device = {
	tablet: `(min-width: ${size.tablet})`,
	desktop: `(min-width: ${size.desktop})`
}

const ModalOuter = styled.div `
    align-items: center;
    background: #f6f2edb8;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

const ModalClose = styled.button `
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    height: 48px;
    justify-content: center;
    position: absolute;
    right: 1.3rem;
    top: 1.3rem;
    width: 48px;
`;

const ModalInner = styled.div `
	background: #ffffff;
	border-radius: 18px;
	box-shadow: 0 3px 13px -2px rgba(0,0,0,.15);
	display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 380px;
    min-height: 200px;
    position: relative;
    width: 92%;

	@media ${device.tablet} {
		width: 380px;
	}
`;

const ModalUpper = styled.div `
    padding: 1.5rem;
    text-align: left;
`;

const ModalMiddle = styled.div `
    border-top: 1px solid #f7f8f9;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 0.4rem 1.5rem;
`;

const ModalLower = styled.div `
    align-items: center;
    background: #F7F8F9;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    display: flex;
    justify-content: space-between;
    min-height: 70px;
    padding: 0 1.5rem;
`;
