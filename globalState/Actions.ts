export const SET_SUBTITLE = 'SET_SUBTITLE';

export interface subTitle{
    subTitle: string
}

export interface TYPE_subTitle {
    type: string,
    payload:string
};


export function changeSubTitle(subTitle:string){
    return {
        type: SET_SUBTITLE,
        payload: subTitle
    }
}



export type Action = TYPE_subTitle;