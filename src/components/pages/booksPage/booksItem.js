import React,{Component} from 'react';
import ItemDetails,{Field} from '../../itemDetails';
import GotService from '../../../services/service';


export default class BooksItem extends Component{
    gotService = new GotService();



    render() {
      return (
      
           <ItemDetails 
            
            itemId= {this.props.bookId}
            getData={this.gotService.getBook}
            >
               <Field field='name' label='authors'/>
                <Field field='numberOfPages' label='numberOfPages'/>
                <Field field='released' label='released'/>
            </ItemDetails>
     
      )
    }
}