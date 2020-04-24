import React from 'react';
import './App.css';
import { FoodList } from './components/food-list/food-list';
import { Filter } from './components/filter/filter';
import { Search } from './components/search/search';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSearch = this.onSearch.bind(this);

    // Todo: use MobX store
    this.state = {
      foodList: [],
      loading: true,
      searchText: '',
      rating: "None",
      category: "None"
    }
  }

  onSearch(searchText) {
    this.setState({
      loading: true,
      searchText: searchText,
      rating: "None",
      category: "None"
    })
    fetch('http://demo6189805.mockable.io/getData')
      .then(res => res.json())
      .then((data) => {
        const list = data && data.foodList;
        let result = [];
        list && list.forEach((foodobj) => {
          // Todo : put null check
          if (foodobj.displayName.toLowerCase().includes(searchText.toLowerCase())) {
            result.push(foodobj);
          }
        });

        this.setState({
          foodList: result,
          loading: false
        })
      })

  }

  onSubmit(filters) {
    this.setState({
      loading: true,
      rating: filters['rating'],
      category: filters['category']
    })
    fetch('http://demo6189805.mockable.io/getData')
      .then(res => res.json())
      .then((data) => {
        const list = data && data.foodList;

        var result = [];
        list && list.forEach((foodobj) => {
          let shouldShow = true;
          for (let filterKey in filters) {
            // if (filters[filterKey] !=="None" && foodobj[filterKey] != filters[filterKey]) {
            //   shouldShow = false;
            // }
            if (filters[filterKey] !== "None") {
              if (filterKey == 'rating' && Number(foodobj[filterKey]) >= Number(filters[filterKey])) {
                shouldShow = true;
              } else if (foodobj[filterKey] != filters[filterKey]) {
                shouldShow = false;
              }

            }
          }
          if (shouldShow) {
            result.push(foodobj);
          }
        });

        this.setState({
          foodList: result,
          loading: false
        })

      })
  }

  onClear() {
    this.setState({
      loading: true,
      rating: "None",
      category: "None"
    })
    // Todo : follow DRY but time constraint
    fetch('http://demo6189805.mockable.io/getData')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          foodList: data && data.foodList,
          loading: false
        })
      })
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    // Todo : follow DRY but time constraint
    fetch('http://demo6189805.mockable.io/getData')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          foodList: data && data.foodList,
          loading: false
        })
      })
  }


  render() {
    const { loading, foodList, searchText, rating, category } = this.state;

    return (
      <>
        {loading ? '...Loading' :
          <>
            < div className="app-container">
              <Search onSearch={this.onSearch} searchText={searchText} />
              <div className="container">
                <Filter onSubmit={this.onSubmit} onClear={this.onClear} rating={rating} category={category} />
                <FoodList foodList={foodList} />
              </div>
            </div>
          </>
        }
      </>
    );
  }
}

export default App;
