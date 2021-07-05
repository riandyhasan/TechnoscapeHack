import React from "react";
import { FormControl, FormLabel, Input, Spacer, Grid, GridItem, Button } from "@chakra-ui/react";
import { DatePicker, Space, Select } from "antd";

export default function ReserveForm() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const { RangePicker } = DatePicker;

  return (
    <form>
      <Grid p="5rem" gap="1.5rem" mt="1.5rem">
        <GridItem>
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
        </GridItem>
        <GridItem>
          <Select defaultValue="Guest" style={{ width: 120 }} onChange={handleChange}>
            <Option value="guest">Guest</Option>
          </Select>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>
              Camp Types
              <Input />
            </FormLabel>
          </FormControl>
        </GridItem>
      </Grid>
    </form>
  );
}
