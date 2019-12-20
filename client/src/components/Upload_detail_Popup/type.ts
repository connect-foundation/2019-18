
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
    field: string,
    ccl: string,
    cancleHandler: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    aproveHandler: ()=>void;
    setField: React.Dispatch<React.SetStateAction<string>>
    setCcl: React.Dispatch<React.SetStateAction<string>>
    setIspublic: React.Dispatch<React.SetStateAction<boolean>>
    setCanComments: React.Dispatch<React.SetStateAction<boolean>>
}

export type OptionsType<OptionType> = ReadonlyArray<OptionType>;

export type ValueType<OptionType> = OptionType | OptionsType<OptionType> | null | undefined;
