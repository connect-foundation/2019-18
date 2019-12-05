export interface PortfolioProp{
    introSimple: string;
    introDetail: string;
    showOption: boolean;
    onChangeintroSimple :(e: React.ChangeEvent<HTMLTextAreaElement>)=> void;
    onChangeintroDetail :(e: React.ChangeEvent<HTMLTextAreaElement>)=> void;
    onClickShowOption : (e: React.MouseEvent<HTMLDivElement>)=>void;
    onChangeActiveFields:(e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit:(e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel:(e: React.MouseEvent<HTMLButtonElement>) => void;
    activeField: any;
}
