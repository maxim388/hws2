import React from 'react'
import downSvg from './svg/down.png'
import upSvg from './svg/up.png'
import s1 from './svg/Polygon 6.png'
import s2 from './svg/Polygon 7.png'

// добавить в проект иконки и импортировать
const downIcon = downSvg
const upIcon = upSvg
const noneIcon = s1

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case '':
            return down
        case down :
            return up
        case up:
            return ''
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    console.log(sort)
    console.log(value)
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {
                sort === down
                    ? <img
                        id={id + '-icon-' + sort}
                        src={downIcon}
                    />
                    : sort === up
                        ? <img
                            id={id + '-icon-' + sort}
                            src={upIcon}
                        />
                        : < ><img
                            id={id + '-icon-' + sort}
                            src={s1}
                        /><img
                            id={id + '-icon-' + sort}
                            src={s2}
                        /></>
            }

        </span>
    )
}

export default SuperSort
