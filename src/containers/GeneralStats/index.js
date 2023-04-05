import { Grid, GridItem, Box } from '@chakra-ui/react';
import { PlusSquareIcon, SmallCloseIcon, EditIcon } from '@chakra-ui/icons';

import  Card  from '../../components/Card';

const itemNames = {
    "recipe_added": "Рецептів додано",
    "recipe_edited": "Рецептів відредагована",
    "recipe_deleted": "Рецептів видалено"
}

const statsItems = {
        "recipe_added": [5, <PlusSquareIcon/>],
        "recipe_edited": [2, <EditIcon/>],
        "recipe_deleted": [1, <SmallCloseIcon/>]
}

function GeneralStats(){

 return ( <Grid
    templateColumns='repeat(5, 1fr)' gap={6}>
{ Object.entries(statsItems).map( (k, v) => {
    return ( <GridItem w="100%">
        <Box cursor={'pointer'}>
           <Card  help_text={itemNames[k[0]]} value={k[1][0]} icon={k[1][1]}/>
        </Box>
      </GridItem>
)    
})
}
</Grid>

  )
}

export default GeneralStats;