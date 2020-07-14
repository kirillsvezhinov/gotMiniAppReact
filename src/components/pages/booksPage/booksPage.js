import React,{Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/service';
import {withRouter} from 'react-router-dom'

class BooksPage extends Component{
    state = {
        error: false
    }
    GotService = new GotService();
    componentDidCatch(){
        this.setState({
            error:true
        })
    }
    render(){
        if(this.state.error){
            return (
                <ErrorMessage/>
            )
        }
        return (
            
            <ItemList 
            getData = {this.GotService.getAllBooks}
            onItemSelected={(itemId) =>{
                this.props.history.push(`/books/${itemId}`)
            }}
            renderItem = {({name}) => name} />
     
        )
    }

    
}
export default withRouter(BooksPage)