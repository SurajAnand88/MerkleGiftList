import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import main from "./index";

function App() {
  const [name, setName] = useState("");
  const [eligibility, setEligibility] = useState("");

  async function handleSubmit() {
    const data = await main(name);
    setEligibility(data);
  }

  return (
    <>
      <Navbar />
      <Flex direction={"column"} align={"center"} mt={4} gap={3} px={6}>
        <Text>Enter your name to check eligibility!</Text>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button colorScheme="red" onClick={handleSubmit}>
          Submit
        </Button>
        <Text color={eligibility.includes("robot") ? "green.400" : "red"}>
          {eligibility}
        </Text>
      </Flex>
    </>
  );
}

export default App;
