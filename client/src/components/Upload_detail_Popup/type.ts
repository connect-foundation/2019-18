
export interface OptionType {
    label: string;
    value: string;
}

interface DetailObject {
    field: string,
    ccl: string,
    commentsAllow: boolean,
    public: boolean,
}

export interface PopupProps {
    text: string,
    cancleHandler: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    aproveHandler: ()=>void;
    setDetailInfo: (arg0: DetailObject)=>void;
}

export type OptionsType<OptionType> = ReadonlyArray<OptionType>;

export type ValueType<OptionType> = OptionType | OptionsType<OptionType> | null | undefined;
