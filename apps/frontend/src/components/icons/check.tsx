import createIcon from './factory/create-icon'

export const CheckIcon = createIcon({
  displayName: 'CheckIcon',
  viewBox: '0 0 20 20',
  path: (
    <g fill="currentColor">
      <polyline
        points="6.5 10.5 8.75 13 13.5 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  ),
})
