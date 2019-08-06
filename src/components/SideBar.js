import React, { Component } from 'react'

export default class SideBar extends Component {
    constructor(props){
        super();
        this.state = {
            place: "",
            source: "",
        }
        this.handleChangePlace = this.handleChangePlace.bind(this)
        this.handleChangeSource = this.handleChangeSource.bind(this)
        this.handleCategoryCategory = this.handleCategoryCategory.bind(this)
        this.handleSourceSearch = this.handleSourceSearch.bind(this)
        this.handleCountryCategorySearch = this.handleCountryCategorySearch.bind(this);
        this.handleCategoryCategory = this.handleCategoryCategory.bind(this);
    }
    handleChangePlace(e){
        this.props.handlePlaceChange(e.target.value)
    }
    handleChangeSource(e){
        this.props.handleSourceChange(e.target.value)
    }
    handleCategoryCategory(e){
        this.props.handleCategoryChange(e.target.value)
    }
    handleSourceSearch(e){
        e.preventDefault()
        this.props.handleFilteredSourceSearch()
        this.formRef.reset()
    }
    handleCountryCategorySearch(e){
        e.preventDefault()
        this.props.handleFilteredCountryCategorySearch()
        this.formRef.reset()
    }
    
    render() {
        return (
            <div>
                <form id="filter-form" ref={input=>this.formRef = input}>
                    <div id="filter-city">
                        <select onChange={this.handleChangePlace} className="custom-select">
                            <option defaultValue="Select a place">Select a Country</option>
                            <option value="ar">Argentina</option>
                            <option value="at">Austria</option>
                            <option value="au">Australia</option>
                            <option value="be">Belgium</option>
                            <option value="bg">Bulgaria</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="cn">China</option>
                            <option value="co">Colombia</option>
                            <option value="ma">Morocco</option>
                            <option value="ru">Russia</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="za">South Africa</option>
                        </select>

                        <select onChange={this.handleCategoryCategory} className="custom-select">
                            <option defaultValue="Select a place">Select a category</option>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </select>
                        <button onClick={this.handleCountryCategorySearch}  className="btn btn-primary">Filter</button>
                    </div>
                    
                    <div id="filter-source">
                        <select onChange={this.handleChangeSource} className="custom-select">
                            <option defaultValue="channel">Select a source</option>
                            <option value="abc-news">ABC News</option>
                            <option value="business-insider">Business Insider</option>
                            <option value="cnn">CNN News</option>
                            <option value="espn">ESPN</option>
                            <option value="google-news">Google News</option>
                            <option value="mtv-news">M-TV News</option>
                            <option value="engadget">Engadget</option>
                        </select>
                        <button onClick={this.handleSourceSearch} className="btn btn-primary">Filter</button>
                    </div>
                </form>
            </div>
        )
    }
}
