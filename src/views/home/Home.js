import React, { Component } from 'react';
import { app } from '../../config/firebaseConfig';
import Posts from '../../components/Main/posts';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        allignContent: 'center',
        width: 700,
        height: 'auto',
    },
})

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            postList: []
        }
    }

    componentDidMount = () => {
        app.database().ref('/posts/').orderByChild('createdDate').on('value', (snapshot) => {
            if (snapshot.val()) {
                var reversed = this.reverseChildren(snapshot)
                reversed.forEach((snap) => {
                    this.setState({postList: [...this.state.postList, snap.key]})
                })
            } else {
                this.setState({ loading: false })
                console.log('No posts found');
            }

            this.setState({ loading: false })
        })
    }

    reverseChildren = (snapshot) => {
        var children = []
        snapshot.forEach(function(child) {
            children.unshift(child)
        })
        return children
    }

    render () {
        const { classes } = this.props
        const { postList, loading } = this.state

        if(loading) {
            return <CircularProgress />
        } else {
            return (
                <div className="main">
                    {/* <GridList cellHeight={200} className={classes.gridList} cols={2}>
                        {postList.map(post => (
                            <GridListTile key={post.key}>
                                
                            </GridListTile>
                        ))}
                    </GridList> */}
                    <Posts data={postList} />
                </div>
            )
        }
    }
}

export default withStyles(styles)(Main)