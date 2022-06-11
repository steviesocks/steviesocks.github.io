import { Box, Text } from 'grommet';

const ListItem = ({name, value}) => (
    <Box margin={{bottom: "small"}} color="#444">
        <Text size="small" weight="bold" color="#444">{name}</Text>
        <Text size="medium" color="#444">{value}</Text>
    </Box>
);

export default ListItem;