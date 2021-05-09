import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar'
import ProjectList from './ProjectList/ProjectList'


class Portfolio extends Component {
    constructor({ data }) {
        super();
        this.state = { selected: 'All' };
        this.onSelectFilter = this.onSelectFilter.bind(this);
        this.data = data;
    }

    onSelectFilter(filter) {
        this.setState({ selected: filter })
    }
    render() {
        return (
            <div className="Portfolio">
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selected}
                    onSelectFilter={this.onSelectFilter} />

                <div className='ProjectList'>
                    {this.data.map((item, i) => {
                        if (item.category === this.state.selected) {
                            return <ProjectList item={item} key={i} />
                            
                        } else if (this.state.selected === 'All') {
                            return <ProjectList item={item} key={i} />
                        } return '';         
                    }
                    )}
                </div>
            </div>
        )
    }
}


export default Portfolio;