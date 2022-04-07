import { atom, selector, useRecoilValue } from "recoil";

// atom 原子
export const loginState = atom({
    key: 'loginState',
    default: {}
})

export const arrState = atom({
    key: 'arrState',
    default: [5, 1, 3, 7, 99]
})

export const sortTypeState = atom({
    key: 'sortTypeState',
    default: 0          // 0 不排序, 1 由小到大, 2 由大到小
})

export const sortedArr = selector({
    key: 'sortedArr',
    get: ({get}) => {
        const arr = get(arrState), sortType = get(sortTypeState)

        const callbackFnObj = {
            1: (a, b) => a - b,
            2: (a, b) => b - a
        }

        return sortType == 0? arr: arr.slice().sort(callbackFnObj[sortType])
    }
})


export default {
    a: 123
}