/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Car } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type NewCarsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    car?: Car;
    items?: any[];
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function NewCars(props: NewCarsProps): React.ReactElement;
