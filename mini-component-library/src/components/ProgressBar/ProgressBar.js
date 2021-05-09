/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const dimensions = {
  large: {
    height: '16px',
    radius: '8px',
    padding: '4px',
  },
  medium: {
    height: '12px',
    radius: '4px',
    padding: '0',
  },
  small: {
    height: '8px',
    radius: '4px',
    padding: '0',
  },
}

const ProgressBar = ({ value, size }) => {
  if (!dimensions[size]) {
    throw new Error("Invalid size")
  }

  return (
    <OuterWrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={{
        '--height': dimensions[size].height,
        '--radius': dimensions[size].radius,
        '--padding': dimensions[size].padding,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressWrapper>
        <Progress value={value} />
      </ProgressWrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`

const ProgressWrapper = styled.div`
  height: var(--height);
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value + '%'};
  height: var(--height);
`

export default ProgressBar
