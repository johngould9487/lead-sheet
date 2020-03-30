import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Bar from './Bar'

class Main extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Bar />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Main