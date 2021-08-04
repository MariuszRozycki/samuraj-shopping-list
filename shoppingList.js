class ShoppingList extends React.Component {

    state = {
        item1: 'cucumbers',
        item2: 'juice',
        item3: 'beer'
    }

    render() {
        return (
            <React.Fragment>
                <h1>Shopping list</h1>
                <ul>
                    <ItemList name={this.state.item1} />
                    <ItemList name={this.state.item2} />
                    <ItemList name={this.state.item3} />
                </ul>
            </React.Fragment>
        )
    }
}

const ItemList = (props) => {
    return (
        <li>{props.name}</li>
    )
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'));