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
    jsxName: 'listItem',
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
        alignItems: 'center',
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
        alignItems: 'center',
        flexDirection: 'row',
        gap: '0.625rem',
        ...props,
      }
    },
  }),
}
