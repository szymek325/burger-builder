import React, {Component} from 'react';
import Button from "../../components/UI/Button/Button";
import classes from './ContactData.module.css'
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input/Input";

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
            ingredients: this.props.ingredients,
            price: this.props.price,
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
            <Input inputtype="input" type="text" name='name' placeholder='Name'/>
            <Input inputtype="input" type="text" name='email' placeholder='Email'/>
            <Input inputtype="input" type="text" name='street' placeholder='Street Name'/>
            <Input inputtype="input" type="text" name='postal' placeholder='Postal Code'/>
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