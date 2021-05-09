import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <LabelWrapper>
      <LabelText>{label}</LabelText>
      <InnerWrapper>
        <SelectWrapper value={value} onChange={onChange}>
          {children}
        </SelectWrapper>
        <Presentation aria-hidden='true'>
          <ValueWrapper>{displayedValue}</ValueWrapper>
          <IconWrapper>
            <Icon id='chevron-down' size={20} strokeWidth={2} />
          </IconWrapper>
        </Presentation>
      </InnerWrapper>
    </LabelWrapper>
  )
}

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const LabelWrapper = styled.label`
  width: fit-content;
  display: block;
`

const InnerWrapper = styled.div`
  position: relative;
`

const SelectWrapper = styled.select`
  padding: 12px 16px;
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const Presentation = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  padding: 12px 16px;

  ${SelectWrapper}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`

const ValueWrapper = styled.span`
  vertical-align: middle;
  padding-right: 24px;
`

const LabelText = styled.div`
  margin-left: 2px;
  margin-bottom: 8px;
`

export default Select
