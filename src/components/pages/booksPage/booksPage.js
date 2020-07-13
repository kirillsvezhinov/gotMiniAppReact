import React,{Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails,{Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/service';
import RowBlock from '../../rowBlock'

export default class HousesPage extends Component{
    state = {
        selectedBook: null,
        error: false
    }
    GotService = new GotService();
    onItemSelected = (id) =>{
        this.setState({
            selectedBook: id
        })
        
    }
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
        const itemDetails = (
            <ItemDetails 
            
            itemId= {this.state.selectedBook}
            getData={this.GotService.getBook}
            >
               <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
            </ItemDetails>
        )
        const itemList = (
            
                <ItemList 
                getData = {this.GotService.getAllBooks}
                onItemSelected={this.onItemSelected}
                renderItem = {({name}) => name} />
         
            
        )
        return (
            
           <RowBlock left={itemList} right = {itemDetails}></RowBlock>
        )
    }

    
}