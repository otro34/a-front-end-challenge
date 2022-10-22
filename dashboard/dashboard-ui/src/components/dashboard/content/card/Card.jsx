import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Typography, Grid  } from '@material-ui/core'

import { StyledCard, 
        TitleContainer, 
        LineaProgressContainer, 
        StyledCardContent, 
        NumericDetailsGrid, 
        StyledLinearProgress,
        LocalAtmIcon,
        PeopleIcon,
        VisibilityIcon,
        FiberManualRecordIcon,
        StyledNumberGrid,
        ErrorGridCell,
        SubscriptionCostGrid } from './styles'

const Card = ({ title, 
                subscriptionCost, 
                totalEarned, 
                totalVacancies, 
                totalSubscriptions, 
                totalViews, 
                status  }) => {
    
    const [statusColor, setStatusColor] = useState('#43a047')
    
    const progress = (totalSubscriptions*100)/totalVacancies

    const changeStatusColor = color => {
        setStatusColor(color)
    }

    useEffect(() => {
        switch(status) {
            case 'Live':
                changeStatusColor('#43a047')
                break
            case 'Saved':
                changeStatusColor('#ffa726')
                break
            case 'Rejected':
                changeStatusColor('red')
                break
            default:
                break
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])                

    return(<StyledCard>
        <StyledCardContent>
            <TitleContainer>
                <Typography>{title}</Typography>
            </TitleContainer>
            <Grid container>
                <SubscriptionCostGrid item xs={8}>
                    ${subscriptionCost}/month
                </SubscriptionCostGrid>
                <Grid item xs={1}>
                    <FiberManualRecordIcon status={statusColor}/>
                </Grid>
                <StyledNumberGrid item xs={3}>
                    <span>{status}</span>
                </StyledNumberGrid>
            </Grid>
            <LineaProgressContainer>
                <StyledLinearProgress 
                            color="primary"
                            value={progress}
                            variant="determinate"
                            />
            </LineaProgressContainer>
            { status === 'Rejected' ? (
            <NumericDetailsGrid container>
                <ErrorGridCell item xs={12}>
                    <Typography color="error">
                        Card is on hold.
                    </Typography>
                </ErrorGridCell>
            </NumericDetailsGrid>)
            : (
            <NumericDetailsGrid container>
                <Grid item xs={1}>
                    <LocalAtmIcon />
                </Grid>
                <StyledNumberGrid item xs={3}>
                    ${Number((totalEarned)).toLocaleString()}
                </StyledNumberGrid>
                <Grid item xs={1}>
                    <PeopleIcon/>
                </Grid>
                <StyledNumberGrid item xs={3}>
                    {totalSubscriptions}
                </StyledNumberGrid>
                <Grid item xs={1}>
                    <VisibilityIcon/>
                </Grid>
                <StyledNumberGrid item xs={3}>
                    {totalViews}
                </StyledNumberGrid>
            </NumericDetailsGrid>)} 
        </StyledCardContent>
    </StyledCard>)
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    totalEarned: PropTypes.number.isRequired,
    subscriptionCost: PropTypes.number.isRequired,
    totalVacancies: PropTypes.number.isRequired,
    totalSubscriptions: PropTypes.number.isRequired,
    totalViews: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}

export default Card



