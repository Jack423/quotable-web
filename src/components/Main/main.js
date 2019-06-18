import React, { Component } from 'react'
import { app } from "../../config/firebase_config"
import Posts from './posts'
import ContextUser from '../../contextUser'

class Main extends Component {
    static contextType = ContextUser

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            post_list: []
        }
    }
}