"use client";
import { Text } from "@chakra-ui/react";

import CountUp, { useCountUp } from "react-countup";

export default function Counting({num}) {
  useCountUp({
    ref: "counter",

    enableScrollSpy: true,
    scrollSpyDelay: 2000,
  });
  return (
    <Text fontSize={"60px"} fontWeight={700} >
     <CountUp duration="3" start={50} end={num} enableScrollSpy />+
    </Text>
  );
}
