# Test Assignment for MM

Project is done as serverless function for https://zeit.co/
It is deployed at https://mm-test.lkatartn.now.sh/
It takes following query parameters

| Parameter | Type    | Is optional?              | Example value       |
| --------- | ------- | ------------------------- | ------------------- |
| A         | boolean |                           | true/false          |
| B         | boolean |                           | true/false          |
| C         | boolean |                           | true/false          |
| D         | float   |                           | 0.1                 |
| E         | integer |                           | 2                   |
| F         | integer |                           | 3                   |
| type      | string  | Optional (default="Base") | "Custom1","Custom2" |

Examples

- https://mm-test.lkatartn.now.sh/?A=true&B=true&C=false&D=2.5&E=4&F=3
- https://mm-test.lkatartn.now.sh/?type=Custom1&A=true&B=true&C=true&D=4.2&E=4&F=3
- https://mm-test.lkatartn.now.sh/?A=true&B=true&C=true&D=4.2&E=4&F=3
