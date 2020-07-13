import React,{Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails,{Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/service';
import RowBlock from '../../rowBlock'



export default class CharacterPage extends Component{
    state = {
        selectedChar: null,
        error: false
    }
    GotService = new GotService();
    onItemSelected = (id) =>{
        this.setState({
            selectedChar: id
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
        const charDetails = (
            
            <ItemDetails 
            getData={this.GotService.getCharacter}
            itemId= {this.state.selectedChar}>
                <Field field ='gender' label='Gender'/>
                <Field field ='born' label='Born'/>
                <Field field ='culture' label='Culture'/>
                <Field field ='died' label='Died'/>
            </ItemDetails>
        )
        const itemList = (
            
                <ItemList 
                getData = {this.GotService.getAllCharacters}
                onItemSelected={this.onItemSelected}
                renderItem = {({name,gender}) => `${name} (${gender})`} />
         
            
        )
        return (
            
           <RowBlock left={itemList} right = {charDetails}></RowBlock>
        )
    }
}