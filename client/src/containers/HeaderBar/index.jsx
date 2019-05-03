import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemResult from '@components/ItemResult';
import HeaderUserInfo from '@components/HeaderUserInfo';
import HeaderListOption from '@components/HeaderListOption';
import {
  SearchInput,
  WrapSearchInput,
  WrapHeaderBar,
  SearchResultBox,
  WrapGrid,
  GridItem,
  HeaderSearchResultBox,
  ItemSearchResultBox,
} from './HeaderBar.styled';

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isShowSearchResultBox: false,
      listSearchResultCurrent: [],
    };
    this.data = {
      listSearchResult: [
        {
          img: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-1/p50x50/51137458_2536257143057862_4425742573352517632_n.jpg?_nc_cat=100&_nc_oc=AQlECvheVJTRdfWkYM1yEL2odtGd7zJ5BP9oEEkPOCAisiUWtgkwWwC0DMluLLh8J64&_nc_ht=scontent.fsgn5-5.fna&oh=7512e0409c5b34dbac959c6baa7a5556&oe=5D6D3A8A',
          name: 'Nguyen Kim Long',
          isOnline: true,
        },
        {
          img: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-1/p50x50/47288746_914790362045202_3910511029439692800_n.jpg?_nc_cat=104&_nc_oc=AQl_iJCpcSuBbPbhSrGgpIFAKgMG5U9jg2T9xIhYy0yDms5K5odLWnKF6kKU1B_s4RM&_nc_ht=scontent.fsgn5-4.fna&oh=5c5441e33f864bf6eb4721cd0f43072a&oe=5D73A459',
          name: 'Vo Thanh Tai',
          isOnline: true,
        },
        {
          img: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-1/p50x50/52750000_131840841198528_6687897669152538624_n.jpg?_nc_cat=104&_nc_oc=AQngtN1ZqcmOBdhgaRoz2t9Ab7ls9vnzS_NSFdCPI7rJ6BDF7hFk_pbN9b4_whCXiVY&_nc_ht=scontent.fsgn5-4.fna&oh=619d240643c38e705c2cf59a0be3dd8c&oe=5D2A1A5B',
          name: 'Nguyen Ngoc',
          isOnline: false,
        },
      ],
    };
  }

  // method: get text from search input
  getTextFromInput(evt) {
    const { name, value } = evt.target;
    const listSearchResultCurrent = this.data.listSearchResult
      .filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
    if (value !== '') {
      this.setState({
        [name]: value,
        listSearchResultCurrent,
      });
    } else {
      this.setState({
        [name]: value,
        listSearchResultCurrent: this.data.listSearchResult,
      });
    }
  }

  // method: handler on key down search input
  handlerKeyDownSearchInput(evt) {
    if (evt.keyCode === 27) {
      this.setState({
        searchText: '',
        isShowSearchResultBox: false,
      });
      ReactDOM.findDOMNode(this.refs['search-input']).blur();
    }
  }

  // method: handler on focus search input
  handlerFocusSearchInput() {
    this.setState({
      isShowSearchResultBox: true,
      listSearchResultCurrent: this.data.listSearchResult,
    });
  }

  // method: render list search result
  renderListSearchResult() {
    return this.state.listSearchResultCurrent.map(user => (
      <ItemSearchResultBox key={user.name}>
        <ItemResult {...user} />
      </ItemSearchResultBox>
    ));
  }

  render() {
    return (
      <WrapHeaderBar>
        <WrapGrid container spacing={0}>
          <GridItem item xs={4}>
            <HeaderUserInfo />
          </GridItem>
          <GridItem item xs={4}>
            <WrapSearchInput>
              <SearchInput
                ref="search-input"
                name="searchText"
                value={this.state.searchText}
                placeholder="Tìm kiếm bạn bè"
                onChange={evt => this.getTextFromInput(evt)}
                onKeyDown={evt => this.handlerKeyDownSearchInput(evt)}
                onFocus={() => this.handlerFocusSearchInput()}
                onBlur={
                  () => this.setState({
                    isShowSearchResultBox: false,
                    searchText: '',
                  })
                }
              />
              {
                this.state.isShowSearchResultBox ? (
                  <SearchResultBox>
                    <HeaderSearchResultBox>
                      <p>Kết quả tìm kiếm cho {`"${this.state.searchText}"`}</p>
                    </HeaderSearchResultBox>
                    {this.renderListSearchResult()}
                  </SearchResultBox>
                ) : null
              }
            </WrapSearchInput>
          </GridItem>
          <GridItem item xs={4}>
            <HeaderListOption />
          </GridItem>
        </WrapGrid>
      </WrapHeaderBar>
    );
  }
}
