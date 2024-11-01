import { definePattern } from '@pandacss/dev'

export default {
  anchor: definePattern({
    jsxName: 'Anchor',
    jsxElement: 'a',
    transform(props) {
      return {
        cursor: 'pointer',
        role: 'link',
        ...props,
      }
    },
  }),
  container: definePattern({
    jsxName: 'Container',
    properties: {
      center: {
        type: 'boolean',
      },
    },
    defaultValues: {
      center: true,
    },
    transform(props) {
      const { center, ...rest } = props

      return {
        width: 'full',
        height: 'auto',
        maxWidth: '56rem',
        minHeight: 'min-content',
        position: 'relative',
        paddingX: '1.5rem',
        marginX: center ? 'auto' : undefined,
        ...rest,
      }
    },
  }),
  list: definePattern({
    jsxName: 'List',
    jsxElement: 'ul',
    transform(props) {
      return {
        listStyleType: 'none',
        role: 'list',
        ...props,
      }
    },
  }),
  unorderedList: definePattern({
    jsxName: 'UnorderedList',
    jsxElement: 'ul',
    transform(props) {
      return {
        listStyleType: 'initial',
        marginInlineStart: '1em',
        role: 'list',
        ...props,
      }
    },
  }),
  orderedList: definePattern({
    jsxName: 'OrderedList',
    jsxElement: 'ol',
    transform(props) {
      return {
        listStyleType: 'decimal',
        marginInlineStart: '1em',
        role: 'list',
        ...props,
      }
    },
  }),
  listItem: definePattern({
    jsxName: 'ListItem',
    jsxElement: 'li',
    transform(props) {
      return {
        role: 'listitem',
        ...props,
      }
    },
  }),
  ystack: definePattern({
    jsxName: 'YStack',
    transform(props) {
      return {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.625rem',
        ...props,
      }
    },
  }),
  xstack: definePattern({
    jsxName: 'XStack',
    transform(props) {
      return {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.625rem',
        ...props,
      }
    },
  }),
  icon: definePattern({
    jsxName: 'Icon',
    jsxElement: 'svg',
    properties: {
      size: {
        type: 'number',
      },
    },
    defaultValues: {
      size: 20,
      focusable: false,
    },
    transform(props) {
      const { size } = props
      const fontSize = size ? `${size / 16}rem` : '1rem'

      return {
        verticalAlign: 'middle',
        width: '1rem',
        height: '1rem',
        fontSize,
        color: {
          _light: 'gray.950',
          _dark: 'gray.50',
        },
        ...props,
      }
    },
  }),
}
