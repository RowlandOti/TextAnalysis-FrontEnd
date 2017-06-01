import React from 'react';
import {render} from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardHeader, CardText, CardTitle, CartTitle, CardActions} from 'material-ui/Card';
import axios from 'axios';

const styles = {
    cardQ: {
        width: 300,
        height: 200,
        marginLeft: 100,
        marginTop: 100,
    },
    cardA: {
        width: 800,
        height: 200,
        marginLeft: 500,
        marginTop: 100,
    },
    margins: {
        width: 500,
        marginLeft: 400,
        marginTop: 70,
    },
    button: {
        width: 50,
        marginLeft: 600,
        marginTop: 30,
    },
    gridlist: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};


class Mines extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: null,
            newVal: null,
        };
        this.val = {
            posts: []
        };
    }

    handleChange(e) {
        axios.get('http://127.0.0.1:5000/api/v2.0/Hi')
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log("Got error :(");
        });
    }

    
    setText(){
        this.setState({value: "Mickey"});
        
    }


    render(){
        return(
            <div>
                <AppBar title="Analyze"/>
                <br />
                <br />
                
                <TextField style={styles.margins}  hintText = "Type text you need analyzed." 
                 defaultValue={this.state.value}/> 

                <RaisedButton style={styles.button} label="Analyze"/>

                <Card style={styles.cardQ}>
                    <CardHeader 
                        title="Your Text"/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <CardActions>
                        <RaisedButton label="Rate" />
                    </CardActions>
                    
                </Card>
                <Card style={styles.cardA}>
                    <CardHeader 
                        title="Analyzed"/>
                    <br />
                    <br />
                    <br />
                    <CardText>
                        
                    </CardText>
                    <CardActions>
                        <RaisedButton label="Thumbs Up" onClick={this.handleChange} />
                    </CardActions>
                    
                </Card>

                <br />
            </div>
            
        );
    }

}

export default Mines;