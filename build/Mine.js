import 'isomorphic-fetch';
import React from 'react';
import {render} from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardHeader, CardText, CardTitle, CartTitle, CardActions} from 'material-ui/Card';
import axios from 'axios';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const styles = {
    container: {
        position: 'fixed',
    },
    cardA: {
        display: 'inline-block',
        position: 'relative',
        width: 800,
        height: 200,
        marginTop: 100,
    },
    cardQ: {
        display: 'inline-block',
        position: 'relative',
        width: 300,
        height: 200,
        marginTop: 100,
    },
    margins: {
        width: 500,
        marginLeft: '35%',
        marginTop: 70,
    },
    button: {
        marginLeft: '50%'
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
        this.handleOn = this.handleOn.bind(this);
        this.handleOff = this.handleOff.bind(this);

        this.state = {
            value: null,
        }
        this.returned={
            val: null,
        }
        this.fetch={
            fetching: false,
        }
    }

    

    handleChange(e) {
        this.setState({fetching: true})

        var par = String(e.target.value);

        //Mains
        axios.get('http://127.0.0.1:5000/api/v1.0/'+par)
        .then(response => this.setState({val: response.data})
        )
        .catch((error) => {
            console.log(error.message);
            console.log(error.response)
        });

        this.setState({value: par})

        if(par.length == 0){
            this.setState({fetching: false})
        }

        
    }

    handleOff(e) {
        this.setState({fetching: false})
    }

    handleOn(e) {
        this.setState({fetching: true})
    }

    render(){
        
        const fetching = this.state.fetching;
        let load = null;
        if (fetching){
            
            load = <RefreshIndicator
                        size={35}
                        top={0}
                        left={30}
                        loadingColor="#FF9800"
                        status="loading"
                        style={styles.refresh} />
        }

        return(
            <div>
                <AppBar title="Analyze"/>
                <br />
                
                <br />
                <TextField style={styles.margins}  hintText = "Type text you need analyzed." 
                 onChange={this.handleChange} />
                 <br />
                <RaisedButton style={styles.button} label="Analyze"/>
                
                <div style={styles.container}>

                    <Card style={styles.cardQ}>
                        <CardHeader 
                            title="Your Text"/>
                        
                        <CardText>{this.state.value}</CardText>
                        { load }
                        
                    </Card>
                    
                    <Card style={styles.cardA}>
                        <CardHeader 
                            title="Analyzed"/>
                        
                        <CardText>{this.returned.val}</CardText>
                        <CardActions >
                            <RaisedButton label="Thumbs Up" onClick={this.handleOff} />
                        </CardActions>
                        
                    </Card>

                </div>
                <br />
            </div>
            
        );
    }

}

export default Mines;