import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const dimensions = {
  small: {
    fontSize: 14 / 16 + 'rem',
    border: '1px',
    iconSize: 16,
    paddingL: 20 + 'px',
    paddingY: 4 + 'px',
  },
  large: {
    fontSize: 18 / 16 + 'rem',
    border: '2px',
    iconSize: 24,
    paddingL: 32 + 'px',
    paddingY: 8 + 'px',
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (!dimensions[size]) {
    throw new Error('Invalid size')
  }
  return (
    <Label style={{ '--width': width + 'px' }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        type='text'
        placeholder={placeholder}
        style={{
          '--font': dimensions[size].fontSize,
          '--border': dimensions[size].border,
          '--paddingL': dimensions[size].paddingL,
          '--paddingY': dimensions[size].paddingY,
        }}
      />
      <IconWrapper style={{ '--size': dimensions[size].iconSize + 'px' }}>
        <Icon id={icon} size={dimensions[size].iconSize} strokeWidth={2} />
      </IconWrapper>
    </Label>
  )
}

const Input = styled.input`
  padding: var(--paddingY) 4px var(--paddingY) var(--paddingL);
  font-size: var(--font);
  border: none;
  border-bottom: var(--border) solid black;
  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);

  color: ${COLORS.gray700};
  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`

const Label = styled.label`
  position: relative;
  width: var(--width);
`

export default IconInput
