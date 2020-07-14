import React,{Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage'
import BooksPage,{BooksItem} from '../pages/booksPage'
import HousesPage from '../pages/housesPage'
import ErrorMessage from '../errorMessage'
import GotService from '../../services/service';
import {BrowserRouter as Router, Route } from 'react-router-dom';

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
           <Router>
                <div className="app"> 
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
                    <Route path='/characters' component={CharacterPage} />
                    
                    <Route path='/houses' component={HousesPage} />
                    <Route path='/books' exact component={BooksPage} />
                    <Route path='/book:id' render={
                        ({match}) => {
                            const {id} = match.params
                        return <BooksItem bookId={id}/>
                        }
                    } />
                </Container>
            </div>
           </Router>
        );
    }
};
