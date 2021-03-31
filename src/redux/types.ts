export interface IReducerState {
    randomJoke: string,
    categories: string[],
    jokesList: Array<{
        id: string,
        value: string
    }>,
    searchApplied: boolean,
    activeCategory: string
}