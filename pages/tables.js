import {
  Box,
  Button,
  HStack,
  Input,
  Table,
  Th,
  Thead,
  Tr,
  Text,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";

const tables = () => {
  return (
    <div>
      <Box mt='2%' mx='2%'>
        <HStack>
          <Input />
          <Button>Start</Button>
          <Button disabled>Status</Button>
        </HStack>
        <Table mt='2%'>
          <Thead>
            <Tr>
              <Th>Application Name</Th>
              <Th>Execution Status</Th>
              <Th>Total Test Cases</Th>
              <Th>Number of Pass</Th>
              <Th>Number of Fail</Th>
              <Th>Passed Logs</Th>
              <Th>Failed Logs</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>
                <Button>View</Button>
              </Td>
              <Td>
                <Button>View</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Box mt="4%">
          <Text fontSize={"2xl"} textAlign="center">
            History
          </Text><Text fontSize={"md"} textAlign="center">
            Key features of our project
          </Text>
        </Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Application Name</Th>
              <Th>Execution Status</Th>
              <Th>Total Test Cases</Th>
              <Th>Number of Pass</Th>
              <Th>Number of Fail</Th>
              <Th>Passed Logs</Th>
              <Th>Failed Logs</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>
                <Button>View</Button>
              </Td>
              <Td>
                <Button>View</Button>
              </Td>
            </Tr>{" "}
            <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>
                <Button>View</Button>
              </Td>
              <Td>
                <Button>View</Button>
              </Td>
            </Tr>{" "}
            <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>
                <Button>View</Button>
              </Td>
              <Td>
                <Button>View</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>
                <Button>View</Button>
              </Td>
              <Td>
                <Button>View</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};

export default tables;
