﻿import React, {Component} from 'react';
import Order from "../../components/Order/Order";
import axios from '../../axios-orders'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                console.log(res);
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({orders: fetchedOrders, loading: false})
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false})
            })
    }

    render() {
        const isLoading = this.state.loading;
        return (
            <div>
                {isLoading
                    ? <Spinner/>
                    : this.state.orders.map(order => (
                        <Order key={order.id} ingredients={order.ingredients} price={order.price}/>))
                }
            </div>

        );
    }
}

export default withErrorHandler(Orders, axios);