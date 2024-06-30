import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MetricCard from "./MetricCard";
import MetricsData from "@/static/MetricsData";
import Theme from "@/theme/Theme";

export default function Metrics() {
  return (
    <Box bgColor={Theme.bgDarkShade}>
      <Container maxW={"7xl"} py={16}>
      <SimpleGrid columns={{base:1,lg:3}} gap={6}>
        {MetricsData.map((item,idx)=><MetricCard data={item} key={idx}/>)}
       
      </SimpleGrid>
    </Container>
    </Box>
  );
}
