import React, {ChangeEvent, Component} from 'react';

export interface FilterProps {
    category: string;
    text: string;
    categories: string[];
    filter: (category: string, text: string) => any;
}

export class Filter extends Component<FilterProps> {
    constructor(props: any) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        // TODO: To implement text search
    }
    handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
        this.props.filter(e.target.value, '');
    }
    render() {
        return(
            <div>
            <select  onChange={this.handleSelectChange}>
                {this.props.categories.map(name => (
                    <option value={name}>{name}</option>
                ))}
            </select>
            <input type="text" placeholder="Search" onChange={this.handleInputChange} />
            </div>
        );
    }
}
