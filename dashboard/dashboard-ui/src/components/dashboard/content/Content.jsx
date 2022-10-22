import React from 'react'

import PropTypes from 'prop-types'

import { Grid } from '@material-ui/core'
import Card from './card'

const Content = ({ courses }) => {
    
return (
    <Grid container spacing={2}> { courses && courses.map(course => {

    return <Grid key={course.id} item lg={3} sm={4} xs={12}>
                <Card {...course} />
            </Grid>
})}
    </Grid>)
}

Content.propTypes = {
    courses: PropTypes.instanceOf(Array).isRequired
}

export default Content
