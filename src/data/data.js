export default function data () {
  return (
    {
      label: {
        cols: {
          short: 'col',
          long: 'column'
        },
        rows: {
          short: 'row',
          long: 'row'
        }
      },
      colsCurrentId: 5,
      rowsCurrentId: 5,
      topic: 'Title of the question',
      rows: [
        {
          id: 'row1',
          label: 'row1'
        },
        {
          id: 'row2',
          label: 'row2'
        },
        {
          id: 'row3',
          label: 'row3'
        },
        {
          id: 'row4',
          label: 'row4'
        }
      ],
      cols: [
        {
          id: 'col1',
          label: 'col1'
        },
        {
          id: 'col2',
          label: 'col2'
        },
        {
          id: 'col3',
          label: 'col3'
        },
        {
          id: 'col4',
          label: 'col4'
        }
      ]
    }
  )
}
