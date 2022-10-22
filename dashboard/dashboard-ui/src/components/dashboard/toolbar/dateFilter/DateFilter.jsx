import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { format } from 'date-fns'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'

import { IconButton, Typography } from '@material-ui/core'

import { StyledKeyboardArrowRightIcon, StyledKeyboardArrowLeftIcon } from './styles'

const DateFilter = ({ onDateChange }) => {
    const today = format(addDays(new Date(), 0), 'MM-dd-yyyy')
    
    const initialState = {
        date: today,
        label: 'TODAY'
    }
    
    const [ state, setState ] = useState(initialState)

    const calculateDate = (daysFunc, incommingDate, label) => {
        const newToday = format(addDays(new Date(), 0), 'MM-dd-yyyy')
        const calculatedCurrentDate = format(daysFunc(new Date(), 1), 'MM-dd-yyyy')
        const calculatedSentDate = format(daysFunc(new Date(incommingDate), 1), 'MM-dd-yyyy')

        if (newToday === calculatedSentDate) {
            setState({ date: calculatedSentDate , label: 'TODAY'})
        } else if (calculatedCurrentDate === calculatedSentDate) {
            setState({ date: calculatedSentDate , label})
        } else
            setState({ date: calculatedSentDate , label: calculatedSentDate})
        onDateChange(calculatedSentDate)
    }

    const handleMinDate = () => {
        const { date } = state
        calculateDate(subDays, date, 'YESTERDAY')
    }

    const handleMaxDate = () => {
        const { date } = state
        calculateDate(addDays, date, 'TOMORROW')
    }

    return (
        <>
        <IconButton id="left" name="left" value="left" onClick={handleMinDate}>
            <StyledKeyboardArrowLeftIcon />
        </IconButton>
        <Typography>
            {state.label}
        </Typography>
        <IconButton onClick={handleMaxDate}>
        <StyledKeyboardArrowRightIcon />
    </IconButton>
    </>
    )
}

DateFilter.propTypes = {
    onDateChange: PropTypes.func.isRequired
}

export default DateFilter