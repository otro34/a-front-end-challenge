import React from 'react'
import PropTypes from 'prop-types'
import { AppBar  } from '@material-ui/core'

import { FilterContainer, StyledToolbarMui } from './styles'

import TypeFilter from './typeFilter'
import DateFilter from './dateFilter'

const Toolbar = ({ onDateChange, onTypeIdChange, courseTypes, typeId}) => {
    return (
        <AppBar position="static">
            <StyledToolbarMui>
                <FilterContainer>
                    <TypeFilter courseTypes={courseTypes} 
                                initialValue={typeId} 
                                onTypeIdChange={onTypeIdChange}/>
                </FilterContainer>
                <DateFilter onDateChange={onDateChange}/>
            </StyledToolbarMui>
        </AppBar>
    )
}

Toolbar.defaultProps = {
    typeId: 0
}

Toolbar.propTypes = {
    typeId: PropTypes.number,
    courseTypes: PropTypes.instanceOf(Array).isRequired,
    onDateChange: PropTypes.func.isRequired,
    onTypeIdChange: PropTypes.func.isRequired
}

export default Toolbar