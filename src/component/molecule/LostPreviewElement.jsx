import { 
    Box,
    Text,
} from '@chakra-ui/react'

export const LostPreviewElement = ({onClick, content}) => {
    return (
        <>
            <Box bg='#EBF0FF' w='30%' p={4} borderWidth='1px' borderRadius='lg' color='#3E3E3E' onClick={onClick}>
                <Text as='b' fontSize='lg' color='#4169E1'>NEW!</Text>
                <Text fontSize='md'>{content}</Text>
            </Box>
        </>
    )
};

export default LostPreviewElement;