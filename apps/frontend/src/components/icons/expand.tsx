import createIcon from './factory/create-icon'

export const ExpandIcon = createIcon({
  displayName: 'ExpandIcon',
  viewBox: '0 0 20 20',
  path: (
    <g fill="currentColor">
      <polyline
        points="13 7 10 4 7 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <polyline
        points="13 13 10 16 7 13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  ),
})
