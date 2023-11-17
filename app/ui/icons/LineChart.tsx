import React from 'react'
import cx from 'clsx'
import PropTypes from 'prop-types'

interface ILineChart {
  className?: string,
}

const LineChart = ({ className }: ILineChart): JSX.Element => (
  <svg
    className={cx('fill-gray-700 dark:fill-gray-50', className)} viewBox='0 0 512 512'>
    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
    <path d='M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z' />
  </svg>
)

LineChart.propTypes = {
  className: PropTypes.string,
}

LineChart.defaultProps = {
  className: '',
}

export default LineChart