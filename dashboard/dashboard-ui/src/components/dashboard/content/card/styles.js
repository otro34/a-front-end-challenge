import styled from 'styled-components'

import { Card, Grid, LinearProgress } from '@material-ui/core'

import { LocalAtm, 
        People,
        Visibility,
        FiberManualRecord} from '@material-ui/icons'

export const StyledCard = styled(Card)`
    height: 180px;
    padding: 0px 0px 0px 0px;
    
`
export const StyledCardContent = styled.div`
    padding: 0px 0px 0px 0px;
`

export const TitleContainer = styled.div`
    height: 60px;
    padding: 10px;
    text-align: center;
`
export const LineaProgressContainer = styled.div`
    padding: 10px;
    .MuiLinearProgress-root {
        overflow: hidden;
        position: relative;
        height: 10px;
    }
`
export const NumericDetailsGrid = styled(Grid)`
    background-color: #e0e0e0;
    height: 40px;
`
export const StyledLinearProgress = styled(LinearProgress)`
    height:10px;
`
export const LocalAtmIcon = styled(LocalAtm)`
    margin-top: 5px;
    margin-left: 5px;
`
export const PeopleIcon = styled(People)`
    margin-top: 5px;
`
export const VisibilityIcon = styled(Visibility)`
    margin-top: 5px;
`
export const FiberManualRecordIcon = styled(FiberManualRecord)`
    margin-top: 5px;
    color: ${props => props.status};
`
export const StyledNumberGrid = styled(Grid)`
    padding: 5px 0px;
`
export const ErrorGridCell = styled(Grid)`
    padding-top:5px;
    text-align: center;
`
export const SubscriptionCostGrid = styled(Grid)`
    padding-left: 10px;
`