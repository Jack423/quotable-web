import React, { Component } from 'react'
import { app } from '../../config/firebaseConfig'
import ContextUser from '../../contextUser'
import { Redirect, Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import LikeIcon from '@material-ui/icons/Favorite'
import DateIcon from '@material-ui/icons/Schedule'
import CardActions from '@material-ui/core/CardActions'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    card: {
        marginTop: 30,
        maxWidth: 345,
    },
    likeIcon: {
        color: '#9e9e9e'
    },
    dateIcon : {
        color: '#9e9e9e'
    }
})

class Post extends Component {
    static contextType = ContextUser;

    constructor(props) {
        super(props);

        this.state = {
            authorId: undefined,
            username: undefined,
            handle: undefined,
            avatar: undefined,
            createdDateText: undefined,
            quote: undefined,
            description: undefined,
            edit: false,
            postId: props.postId,
            likesCount: 0,
            liked: false,
            render: true
        }
    }

    componentDidMount = () => {
        //console.log(this.state.postId)
        app.database().ref(`/posts/${this.state.postId}`).once('value', (snapshot) => {
            if (snapshot.val()) {
                this.setState({ authorId: snapshot.val().authorId })
                this.updatePost(snapshot)
                //console.log(snapshot.val().quote)
            } else {
                console.log('No posts were found')
                //this.props.updateRedirect(true, "error")
            }
        }).then(() => {
            //console.log(this.state.authorId)
            app.database().ref(`/profiles/${this.state.authorId}`).once('value', (snapshot) => {
                if (snapshot.val()) {
                    if (snapshot.val().photoUrl) {
                        this.setState({
                            avatar: snapshot.val().photoUrl,
                            username: snapshot.val().username,
                            handle: `@${snapshot.val().handle}`
                        })
                        //console.log('set photo to ', this.state.avatar)
                    } else {
                        this.setState({avatar: "https://firebasestorage.googleapis.com/v0/b/quotable-c70b9.appspot.com/o/ic_profile.png?alt=media&token=28e3f4fb-811a-49c7-b2ba-34b6c4f2d1cd"})
                    }
                } else {
                    console.log('Could not find any posts')
                }
            })
        })
    }

    updatePost = (snapshot) => {
        this.setState({
            quote: snapshot.val().quote,
            description: snapshot.val().description,
            likesCount: snapshot.val().likesCount,
            createdDateText: new Date(snapshot.val().createdDateText).toLocaleDateString()
        })
        console.log(this.state.likesCount)
    }

    handleLike = () => {
        if (!app.auth().currentUser()) {
            //return ()
        }
    }

    render() {
        const { classes } = this.props

        if (this.state.redirect) {
            return <Redirect to="/error" />
        } else {
            if (this.state.render) {
                return (
                    <Card className={classes.card}>
                        <CardHeader 
                            avatar={
                                <Avatar aria-label="Avatar" src={this.state.avatar} />
                            }
                            title={this.state.username}
                            subheader={this.state.handle}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textPrimary" component="p">{this.state.quote}</Typography>
                            <br/>
                            <Typography variant="body2" color="textSecondary" component="p">{this.state.description}</Typography>
                        </CardContent>
                        <CardActions>
                            <LikeIcon className={classes.likeIcon}></LikeIcon>
                            <Typography variant="body2" color="textSecondary" component="p">{this.state.likesCount}</Typography>
                            <DateIcon className={classes.dateIcon}></DateIcon>
                            <Typography variant="body2" color="textSecondary" component="p">{this.state.createdDateText}</Typography>
                        </CardActions>
                    </Card>
                );
            } else {
                return null
            }
        }
    }
}

Post.contextType = ContextUser

export default withStyles(styles)(Post)