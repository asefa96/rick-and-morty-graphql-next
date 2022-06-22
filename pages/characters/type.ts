type ColumnName='Name' | 'Species' | 'Residents' | 'Status' | 'Location'  | 'Avatar'


export interface LocationColumnInfo{
    id:string
    label:ColumnName
    align:string
}

export type LocationColumns=Record<ColumnName,LocationColumnInfo>
 