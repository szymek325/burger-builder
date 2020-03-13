import React, {Component} from 'react';
import Button from "../../components/UI/Button/Button";
import classes from './ContactData.module.css'
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: "mati",
                address: 'csomdfs'
            }
        };
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false});
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
            });
        console.log(this.props.ingredients)
    };

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name='name' placeholder='Name'/>
            <input className={classes.Input} type="text" name='email' placeholder='Email'/>
            <input className={classes.Input} type="text" name='street' placeholder='Street Name'/>
            <input className={classes.Input} type="text" name='postal' placeholder='Postal Code'/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter youre Contact Data</h4>
                {form}
            </div>
        );
    }
}


export default ContactData;