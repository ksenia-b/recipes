import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { Paper } from '../Paper';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

const today = new Date().toJSON().slice(0,10);

function Card(props){
    return ( <Paper p={4} width={'250px'} h={'100%'} _hover={{borderColor: "gray.400"}}>
    <Stat>
    {/* <WarningIcon/> */}
    {props.icon}
      <StatLabel>{props.help_text}</StatLabel>
      <StatNumber>{props.value}</StatNumber>
      <StatHelpText>{today}</StatHelpText> 
    </Stat>
  </Paper>
   )
}

export default Card;