import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '../stack'
import { styles } from './paragraph.styles'
import { merge } from '../../../utils'

function Paragraph({ css, gap, ...props }) {
  return (
    <Stack
      as="p"
      component="Paragraph"
      gap={gap}
      direction="vertical"
      css={merge(styles.Paragraph, css)}
      {...props}
    />
  )
}

Paragraph.propTypes = {
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ])
}

Paragraph.defaultProps = {
  gap: 4
}

export { Paragraph }
