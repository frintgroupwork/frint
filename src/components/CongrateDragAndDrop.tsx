"use client";
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Confetti from 'react-confetti';

interface CongratulationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onContinue: () => void;
}

const CongratulationModal: React.FC<CongratulationModalProps> = ({ 
  isOpen, 
  onOpenChange, 
  onContinue 
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
              Great Job! 🎉
            </h2>
          </ModalHeader>
          <ModalBody>
            <p className="text-neutral-600">
              You&apos;ve successfully categorized all the key points for the interview questions. 
              Your strategic thinking and attention to detail will help you shine in your interview preparation.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              variant="solid" 
              fullWidth
              onPress={() => {
                onOpenChange(false);
                onContinue();
              }}
            >
              Continue
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

export default CongratulationModal;