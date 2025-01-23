"use client"
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Confetti from 'react-confetti';

interface CongratulationsModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onContinueQuiz: () => void;
  onSkipQuiz: () => void;
}

const CongratulationsModal: React.FC<CongratulationsModalProps> = ({ 
  isOpen, 
  onOpenChange, 
  onContinueQuiz,
  onSkipQuiz 
}) => {
  return (
    <>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="md"
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-success-600">
              Congratulations! 🎉
            </h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-neutral-600 mb-4">
              You've successfully completed the interview preparation session. 
              Would you like to test your knowledge with a quick quiz?
            </p>
          </ModalBody>
          <ModalFooter className="flex flex-col gap-2">
            <Button 
              color="primary" 
              variant="solid" 
              fullWidth
              onPress={() => {
                onOpenChange(false);
                onContinueQuiz();
              }}
            >
              Take Quiz
            </Button>
            <Button 
              color="primary" 
              variant="bordered"
              fullWidth
              onPress={() => {
                onOpenChange(false);
                onSkipQuiz();
              }}
            >
              Skip Quiz
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      {/* Confetti Effect */}
      {isOpen && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}
    </>
  );
};

export default CongratulationsModal;