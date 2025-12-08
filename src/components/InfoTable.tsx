interface InfoTableProps {
  headers: string[]
  rows: string[][]
}

export function InfoTable({ headers, rows }: InfoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, index) => (
              <th
                key={index}
                className="text-left py-3 px-4 font-semibold text-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border/50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-3 px-4 text-muted-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
