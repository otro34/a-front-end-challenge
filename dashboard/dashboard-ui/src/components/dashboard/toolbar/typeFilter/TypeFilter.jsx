import React from 'react'

import PropTypes from 'prop-types'

import { FormControl, Select, MenuItem } from '@material-ui/core'

import StyledInput from './styles'

const TypeFilter = ({courseTypes, onTypeIdChange, initialValue}) => {
    return (
        <FormControl variant="outlined">
            <Select input={<StyledInput />} value={initialValue} onClick={onTypeIdChange}>
                <MenuItem value={0}>All</MenuItem>
                { courseTypes && courseTypes.length > 0 && 
                    courseTypes.map(courseType => {
                        return (<MenuItem 
                                    key={courseType.id}
                                    value={courseType.id}>
                                        {courseType.name}
                                </MenuItem>)
                    })}
            </Select>
        </FormControl>
    )
}
TypeFilter.defaultProps = {
    initialValue: 0
}

TypeFilter.propTypes = {
    courseTypes: PropTypes.instanceOf(Array).isRequired,
    initialValue: PropTypes.number,
    onTypeIdChange: PropTypes.func.isRequired
}

export default TypeFilter