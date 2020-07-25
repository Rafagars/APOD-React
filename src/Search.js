import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        const  query  = this.props.match.params.query;
        console.log(query)
        const url  = `https://apodapi.herokuapp.com/search/?search_query=${query}&image_thumbnail_size=240&number=10&page=1`;
        console.log(`Url: ${url}`)
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
        console.log(`Data: ${data}`)
        const searches = data.map((search, index) => {
            return(
                <div key={index} className="text-center">
                    <h2 className="">{search.title}</h2>
                    <a href={search.hdurl}><img alt={search.title} src={search.url} width="30%"/></a>
                </div>
            )
        })

        return(
            <div className="text-center">
                {searches}
            </div>
        )

    }
}