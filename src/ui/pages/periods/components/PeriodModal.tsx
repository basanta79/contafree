import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Box,
    useToast,
    IconButton,
} from '@chakra-ui/react';
// import { AddIcon } from '@chakra-ui/icons';
import { IoMdAdd } from "react-icons/io";
import { Period } from '../../../../core/entities/Period';
import { CreatePeriod } from '../../../../core/use-cases/Periods/CreatePeriod';
import { RestPeriodRepository } from '../../../../infrastructure/adapters/rest/RestPeriodRepository';

interface PeriodModalProps {
    onCloseModal: () => void;
}

const PeriodModal: React.FC<PeriodModalProps> = ({ onCloseModal }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [period, setPeriod] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const periodRepository = new RestPeriodRepository();
    const createPeriodUseCase = new CreatePeriod(periodRepository);

    const handleSubmit = async () => {
        if (!period.trim()) {
            alert('Period no puede estar vacio');
            return;
        }

        setIsLoading(true);

        try {
            const newPeriod = new Period(period);
            await createPeriodUseCase.execute(newPeriod);
            setPeriod(''); 
            onClose(); 
            onCloseModal();
        } catch (error) {
            console.error('Error al crear el periodo:', error);
            toast({
                title: 'Error',
                description: 'Hi ha hagut un error',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Box display="flex" justifyContent="flex-end">
                <IconButton
                    variant='outline'
                    onClick={onOpen}
                    colorScheme="teal"
                    aria-label="Crear un nou periode"
                    icon={<IoMdAdd />}
                />
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear nou peridoe</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <FormControl isRequired>
                                <FormLabel>Periode</FormLabel>
                                <Input
                                    value={period}
                                    onChange={(e) => setPeriod(e.target.value)}
                                    placeholder="Introdueix el periode YY-YY"
                                />
                            </FormControl>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            isLoading={isLoading}
                            onClick={handleSubmit}
                            isDisabled={!period.trim() || isLoading}
                        >
                            Crear
                        </Button>
                        <Button onClick={onClose} ml={3}>
                            Cancel.lar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PeriodModal;