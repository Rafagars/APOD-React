import React, {Component} from 'react';

export default class Search extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        const { query } = this.props
        const { url } = `https://apodapi.herokuapp.com/search/?search_query=${query}&image_thumbnail_size=240&number=10&page=1`;

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result,
                })
            })
    }

    render(){
        const { data } = this.state
        const searches = data.map((search, index) => {
            return(
                <div key={index} className="text-center">
                    <h2 className="">{search.title}</h2>
                    <img src={search.url} width="30%"/>
                </div>
            )
        })

        return(
            <div className="container">
                {searches}
            </div>
        )

    }
}