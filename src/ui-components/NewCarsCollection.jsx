/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { RentalCar } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CarRentalCard from "./CarRentalCard";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function NewCarsCollection(props) {
  const {
    rentalCar,
    items: itemsProp,
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp };
  const itemsPagination = {
    sort: (s) => s.createdAt(SortDirection.DESCENDING),
  };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: RentalCar,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      type="grid"
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CarRentalCard
          rentalCar={item}
          height="auto"
          width="auto"
          margin="1rem 1rem 1rem 1rem"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CarRentalCard[0]")}
        ></CarRentalCard>
      )}
    </Collection>
  );
}
