/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function MyAddCar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="24px 0px 24px 0px"
      backgroundColor="rgba(255,255,255,1)"
      style={{
        textAlign: "left",
        margin: "1rem"
      }}
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Add Car"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Divider
          width="640px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Flex.Flex[0].Divider[0]")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <TextField
            label="name"
            display="flex"
            shrink="0"
            alignSelf="stretch"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[0]"
            )}
          ></TextField>
          <TextField
            label="price (USD)"
            display="flex"
            shrink="0"
            alignSelf="stretch"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[1]"
            )}
          ></TextField>
          <TextField
            label="description"
            display="flex"
            shrink="0"
            alignSelf="stretch"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[2]"
            )}
          ></TextField>
          <TextField
            label="image link"
            display="flex"
            shrink="0"
            alignSelf="stretch"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[3]"
            )}
          ></TextField>
        </Flex>
        <Divider
          width="640px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Flex.Flex[0].Divider[1]")}
        ></Divider>
        <Flex
          gap="10px"
          direction="column"
          shrink="0"
          width="97px"
          position="relative"
          padding="0px 0px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2]")}
        >
          <Button
            padding="8px 16px 8px 16px"
            display="flex"
            shrink="0"
            width="73px"
            size="default"
            variation="primary"
            children="Save"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
