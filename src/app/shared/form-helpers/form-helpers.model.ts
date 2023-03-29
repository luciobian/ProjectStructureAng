export interface FormModel {
    name: string;
    controls: FormControlModel[];
}

export interface FormControlModel {
    name: string;
    label: string;
    value: string;
    type: string;
    options?: string[];
} 