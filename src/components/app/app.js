import React,{Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage'
import ErrorMessage from '../errorMessage'
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/service';
import './app.css'


export default class App extends Component {
    GotService = new GotService();
    state = {
        showRandomChar: true,
        error: false
    }
  
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }
    componentDidCatch(){
        console.log('error sorry)')
        this.setState({
            error:true
        })
    }
    


    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        if(this.state.error){
            return <ErrorMessage/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button 
                                className="button_skip"
                                onClick={this.toggleRandomChar}>Toggle random character</Button>
                        </Col>
                    </Row>
                   <CharacterPage/>
                    <Row>
                    <Col md='6'>
                        <ItemList 
                        getData = {this.GotService.getAllHouses}
                        onItemSelected={this.onItemSelected}
                        renderItem ={(item) => item.name} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId= {this.state.selectedChar}/>
                    </Col>
                    </Row>
                <Row>
                    <Col md='6'>
                        <ItemList 
                        getData = {this.GotService.getAllBooks}
                        onItemSelected={this.onItemSelected}
                        renderItem ={(item) => item.name} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId= {this.state.selectedChar}/>
                    </Col>
                </Row>
                </Container>
            </>
        );
    }
};
