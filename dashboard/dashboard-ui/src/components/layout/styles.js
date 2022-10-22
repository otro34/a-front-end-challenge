import styled from 'styled-components'
import { topBarHeight } from '../../theme/variables'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`
export const TopBarContainer = styled.div`
    display: flex;
    width: 100%;
`
export const TopBarSpace = styled.div`
  min-height: ${topBarHeight};
`
export const Container = styled.div`
    width: 100%;
    height: calc(100% - ${topBarHeight})
`
export const Main = styled.main`
  margin: 10px 10px 10px 10px;
  height: 100vh;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  z-index: 0;
`
