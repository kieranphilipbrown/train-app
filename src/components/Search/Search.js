import React from 'react';
import { SearchContainer, SearchForm, SearchLabel, SearchInput, SearchButton, SearchInputResult } from './Search.styles';
import { Wrapper } from '../../assets/Styled/Utility/Utility';
import stations from '../../assets/data/stations.json';

class Search extends React.Component {
    state = {
        stationFrom: '',
        stationFromCode: '',
        stationTo: '',
        stationToCode: '',
        stationList: stations,
        searchResultsFrom: '',
        searchResultsTo: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
    }

    findMatches = (wordToMatch, stations) => {
        // console.log(stations.stations)
        return stations.stations.filter(station => {
            const regex = new RegExp(wordToMatch, 'gi');
            return station.stationName.match(regex) || station.crsCode.match(regex);
        });
    }

    displayMatches = (e, inputType) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
        const matchArray = this.findMatches(e.target.value, stations)
        console.log(matchArray);

        if (inputType === "from") {
            this.setState({
                searchResultsFrom: matchArray
            });
        }
        if (inputType === "to") {
            this.setState({
                searchResultsTo: matchArray
            });
        }

    }

    updateFromInputField = e => {
        this.setState({
            stationFrom: e.target.dataset.station,
            stationFromCode: e.target.dataset.code,
            searchResultsFrom: false
        })
    }

    updateToInputField = e => {
        this.setState({
            stationTo: e.target.dataset.station,
            stationToCode: e.target.dataset.code,
            searchResultsTo: false
        })
    }

    render() {
        const { searchResultsFrom, searchResultsTo } = this.state;
        return (
            <SearchContainer>
                <Wrapper>
                    <SearchForm onSubmit={(e) => this.handleSubmit(e)} autocomplete={'off'}>
                        <SearchLabel htmlFor="stationfrom">Where from?</SearchLabel>
                        <div style={{position: "relative"}}>
                            <SearchInput
                                id={'stationfrom'}
                                name={'stationFrom'}
                                type={'text'}
                                placeholder={'Station Name'}
                                value={this.state.stationFrom}
                                onChange={(e) => this.displayMatches(e, "from")}
                            />
                            {searchResultsFrom &&
                                <SearchInputResult>
                                    {
                                        searchResultsFrom.map((result, i) =>
                                            <li key={i} onClick={(e) => this.updateFromInputField(e, result)} data-station={result.stationName} data-code={result.crsCode}>
                                                {result.stationName}, {result.crsCode}
                                            </li>
                                        )
                                    }
                                </SearchInputResult>
                            }
                        </div>

                        <div style={{position: "relative"}}>
                            <SearchInput
                                id={'stationto'}
                                name={'stationTo'}
                                type={'text'}
                                placeholder={'Station Name'}
                                value={this.state.stationTo}
                                onChange={(e) => this.displayMatches(e, "to")}
                            />
                            {searchResultsTo &&
                                <SearchInputResult>
                                    {
                                        searchResultsTo.map((result, i) =>
                                            <li key={i} onClick={(e) => this.updateToInputField(e, result)} data-station={result.stationName} data-code={result.crsCode}>
                                                {result.stationName}, {result.crsCode}
                                            </li>
                                        )
                                    }
                                </SearchInputResult>
                            }
                        </div>
                        <SearchButton>Search</SearchButton>
                    </SearchForm>
                </Wrapper>
            </SearchContainer>
        );
    }
}

export default Search;

