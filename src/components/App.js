import React from 'react';
import './App.css';
import DisplayNews from './DisplayNews';
import SearchBar from './SearchBar';
import SideBar from './SideBar';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      newsData: [],
      status: false,
      newsPlace: "",
      newsSource: "",
      newsCategory: ""
    }
    this.getData = this.getData.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleFilteredCountryCategorySearch = this.handleFilteredCountryCategorySearch.bind(this);
    this.handleFilteredSourceSearch = this.handleFilteredSourceSearch.bind(this);

    this.api = '1214c73fb39b4b60b6609f604f4bd6b5'
  }
  componentDidMount(){
    this.getData();
  }
  async getData(){
    this.setState({status : false})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.api}`)
    let result = await response.json();
    this.setState({
      newsData: result,
      status: true
    })
  }
  async handleQuery(query=""){
    this.setState({status : false})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${this.api}`)
    let result = await response.json();
    this.setState({
      newsData: result,
      status: true
    })
  }
  handlePlaceChange(place){
    this.setState({ newsPlace: place })
  }
  handleSourceChange(source){
    this.setState({ newsSource: source })
  }
  handleCategoryChange(category) {
    this.setState({ newsCategory: category })
  }
  async handleFilterCountrySearch()
  {
    this.setState({ status: false })
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.newsPlace}&apiKey=${this.api}`)
    let result = await response.json()
    this.setState({
      newsData: result,
      status: true
    })
    console.log(result);
    this.setState({  newsPlace: ""  })
  }
  async handleFilterSourceSearch() {
    this.setState({ status: false })
    let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${this.state.newsSource}&apiKey=${this.api}`)
    let result = await response.json()
    this.setState({
      newsData: result,
      status: true
    })
    console.log(result);
    this.setState({  newsSource: "" })
  }
  async handleFilterCountryCategorySearch(){
    this.setState({ status: false })
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.newsPlace}&category=${this.state.newsCategory}&apiKey=${this.api}`)
    let result = await response.json()
    this.setState({
      newsData: result,
      status: true
    })
    console.log(result);
    this.setState({
      newsCategory: "",
      newsPlace: ""
    })
  }
  handleFilteredCountryCategorySearch(){  

    if(this.state.newsCategory === "" && this.state.newsPlace !== "")
    {
      this.handleFilterCountrySearch()  
    }
    else if(this.state.newsCategory !== "" && this.state.newsPlace !== "" )
    {
      this.handleFilterCountryCategorySearch()
    }
    else
    {
      alert("please select a Country !!!")
    }
  }

  handleFilteredSourceSearch() { 
    if(this.state.newsSource !== ""){
      this.handleFilterSourceSearch() 
    }
    else{
      alert("please choose a source of news and filter!!")
    }
  }

  render()
  {
    return(
      <div>
        <h2>Newsify</h2>
        <SearchBar handleQuery={this.handleQuery} />
          <SideBar 
            handlePlaceChange={this.handlePlaceChange}
            handleSourceChange={this.handleSourceChange}
            handleCategoryChange={this.handleCategoryChange}
            handleFilteredCountryCategorySearch={this.handleFilteredCountryCategorySearch}
            handleFilteredSourceSearch={this.handleFilteredSourceSearch}
          />
          <div style={{
            display: "flex",
            width:"100%",
            margin: "auto",
            flexWrap:"wrap"}}>
            {
              (!this.state.status) ? 
                <h1>Loading...</h1> :
                (this.state.newsData.articles) &&   Object.keys(this.state.newsData.articles)
                  .map((news, i) => <DisplayNews newsState={this.state.newsData.articles}
                                                  article={news} key={i} />)
            }
          </div>
      </div>
    )
  }
}

export default App;
